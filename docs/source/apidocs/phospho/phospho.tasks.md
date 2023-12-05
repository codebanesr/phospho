# {py:mod}`phospho.tasks`

```{py:module} phospho.tasks
```

```{autodoc2-docstring} phospho.tasks
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`Task <phospho.tasks.Task>`
  - ```{autodoc2-docstring} phospho.tasks.Task
    :summary:
    ```
* - {py:obj}`TaskCollection <phospho.tasks.TaskCollection>`
  -
````

### API

`````{py:class} Task(client, task_id: str, _content: typing.Optional[dict] = None)
:canonical: phospho.tasks.Task

```{autodoc2-docstring} phospho.tasks.Task
```

```{rubric} Initialization
```

```{autodoc2-docstring} phospho.tasks.Task.__init__
```

````{py:property} id
:canonical: phospho.tasks.Task.id

```{autodoc2-docstring} phospho.tasks.Task.id
```

````

````{py:property} content
:canonical: phospho.tasks.Task.content

```{autodoc2-docstring} phospho.tasks.Task.content
```

````

````{py:method} refresh()
:canonical: phospho.tasks.Task.refresh

```{autodoc2-docstring} phospho.tasks.Task.refresh
```

````

`````

`````{py:class} TaskCollection(client)
:canonical: phospho.tasks.TaskCollection

Bases: {py:obj}`phospho.collection.Collection`

````{py:method} get(task_id: str)
:canonical: phospho.tasks.TaskCollection.get

```{autodoc2-docstring} phospho.tasks.TaskCollection.get
```

````

````{py:method} create(session_id: str, sender_id: str, input: str, output: str, additional_input: typing.Optional[dict] = None, additional_output: typing.Optional[dict] = None, data: typing.Optional[dict] = None)
:canonical: phospho.tasks.TaskCollection.create

```{autodoc2-docstring} phospho.tasks.TaskCollection.create
```

````

`````