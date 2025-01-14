"""
All the models stored in database.

This contains also some business logic. 
"""

from typing import List, Literal, Optional

from pydantic import BaseModel, Field

from app.utils import generate_timestamp, generate_uuid


class Eval(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    created_at: int = Field(default_factory=generate_timestamp)
    project_id: str
    org_id: Optional[str] = None
    session_id: Optional[str] = None
    task_id: str
    # Flag to indicate if the task is success or failure
    value: Optional[Literal["success", "failure", "undefined"]]
    # The source of the event (either "user" or "phospho-{id}")
    source: str
    test_id: Optional[str] = None
    notes: Optional[str] = None


class Event(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    created_at: int = Field(default_factory=generate_timestamp)
    # The name of the event (as defined in the project settings)
    event_name: str
    task_id: str
    session_id: Optional[str] = None
    project_id: str
    org_id: Optional[str] = None
    # The webhook that was called (happened if the event was True and the webhook was set in settings)
    webhook: Optional[str] = None
    # The source of the event (either "user" or "phospho-{id}")
    source: str


class Task(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    created_at: int = Field(default_factory=generate_timestamp)
    project_id: str
    org_id: Optional[str] = None
    session_id: Optional[str] = None
    input: str
    additional_input: Optional[dict] = Field(default_factory=dict)
    output: Optional[str] = None
    additional_output: Optional[dict] = Field(default_factory=dict)
    metadata: Optional[dict] = Field(default_factory=dict)
    data: Optional[dict] = Field(default_factory=dict)
    # Flag to indicate if the task is success or failure
    flag: Optional[str] = None  # Literal["success", "failure", "undefined"]
    last_eval: Optional[Eval] = None
    # Events are stored in a subcollection of the task document
    events: Optional[List[Event]] = Field(default_factory=list)
    # The environment is a label
    environment: str = Field(default="default environment")
    # Notes are a free text field that can be edited
    notes: Optional[str] = None
    # Testing
    test_id: Optional[str] = None
    # Topics : a list of topics
    topics: Optional[List[str]] = Field(default_factory=list)

    def preview(self):
        # Return a string representation of the input and output
        # This is used to display a preview of the task in the frontend
        if self.output is not None:
            return f"{self.input} -> {self.output}"
        else:
            return self.input


class Session(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    created_at: int = Field(default_factory=generate_timestamp)
    project_id: str
    org_id: Optional[str] = None
    metadata: Optional[dict] = None
    data: Optional[dict] = None
    # Notes are a free text field that can be edited
    notes: Optional[str] = None
    # preview contains the first few tasks of the session
    preview: Optional[str] = None
    # The environment is a label
    environment: str = "default environment"
    events: Optional[List[Event]] = Field(default_factory=list)
    tasks: Optional[List[Task]] = None
    # Session length is computed dynamically. It may be None if not computed
    session_length: Optional[int] = None


class EventDefinition(BaseModel):
    event_name: str
    description: str
    webhook: Optional[str] = None
    webhook_headers: Optional[dict] = None


def default_project_settings():
    return {}


class Project(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    created_at: int = Field(default_factory=generate_timestamp)
    project_name: str  # to validate this, use https://docs.pydantic.dev/latest/concepts/validators/
    # If a user creates a project just for themselves,
    # their project will be linked to their own organization
    org_id: str
    # If no settings set, will be an empty dict
    settings: Optional[dict] = Field(default_factory=default_project_settings)
    user_id: Optional[str] = None


class Organization(BaseModel):
    id: str
    created_at: int  # UNIX timetamp in seconds
    name: str
    modified_at: int
    email: str  # Email for the organization -> relevant notifications
    status: str  # Status of the organization -> "active" or "inactive"
    type: str  # Type of the organization -> "beta"


class Test(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    project_id: str
    org_id: Optional[str] = None
    created_by: str
    created_at: int = Field(default_factory=generate_timestamp)
    last_updated_at: int
    terminated_at: Optional[int] = None
    status: Literal["started", "completed", "canceled"]
    summary: dict = Field(default_factory=dict)


ComparisonResults = Literal[
    "Old output is better",
    "New output is better",
    "Same quality",
    "Both are bad",
    "Error",
]


class Comparison(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    created_at: int = Field(default_factory=generate_timestamp)
    project_id: Optional[str] = None
    org_id: Optional[str] = None
    instructions: Optional[str] = None
    context_input: str
    old_output: str
    new_output: str
    comparison_result: ComparisonResults
    source: str
    test_id: Optional[str] = None


class LlmCall(BaseModel):
    id: str = Field(default_factory=generate_uuid)
    org_id: Optional[str] = None
    created_at: int = Field(default_factory=generate_timestamp)
    model: str
    prompt: str
    llm_output: Optional[str] = None
    api_call_time: float  # In seconds
    # Identifier of the source of the evaluation, with the version of the model if phospho
    evaluation_source: Optional[str] = None
