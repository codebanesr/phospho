# {py:mod}`phospho`

```{py:module} phospho
```

```{autodoc2-docstring} phospho
:allowtitles:
```

## Submodules

```{toctree}
:titlesonly:
:maxdepth: 1

phospho.sessions
phospho.tasks
phospho.config
phospho.client
phospho.extractor
phospho.utils
phospho.collection
```

## Package Contents

### Functions

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`init <phospho.init>`
  - ```{autodoc2-docstring} phospho.init
    :summary:
    ```
* - {py:obj}`new_session <phospho.new_session>`
  - ```{autodoc2-docstring} phospho.new_session
    :summary:
    ```
* - {py:obj}`_log_single_event <phospho._log_single_event>`
  - ```{autodoc2-docstring} phospho._log_single_event
    :summary:
    ```
* - {py:obj}`_wrap_iterable <phospho._wrap_iterable>`
  - ```{autodoc2-docstring} phospho._wrap_iterable
    :summary:
    ```
* - {py:obj}`log <phospho.log>`
  - ```{autodoc2-docstring} phospho.log
    :summary:
    ```
* - {py:obj}`wrap <phospho.wrap>`
  - ```{autodoc2-docstring} phospho.wrap
    :summary:
    ```
````

### Data

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`__all__ <phospho.__all__>`
  - ```{autodoc2-docstring} phospho.__all__
    :summary:
    ```
* - {py:obj}`log_queue <phospho.log_queue>`
  - ```{autodoc2-docstring} phospho.log_queue
    :summary:
    ```
* - {py:obj}`consumer <phospho.consumer>`
  - ```{autodoc2-docstring} phospho.consumer
    :summary:
    ```
* - {py:obj}`current_session_id <phospho.current_session_id>`
  - ```{autodoc2-docstring} phospho.current_session_id
    :summary:
    ```
* - {py:obj}`logger <phospho.logger>`
  - ```{autodoc2-docstring} phospho.logger
    :summary:
    ```
````

### API

````{py:data} __all__
:canonical: phospho.__all__
:value: >
   ['Client', 'Consumer', 'LogQueue', 'Event', 'generate_timestamp', 'generate_uuid', 'convert_to_jsona...

```{autodoc2-docstring} phospho.__all__
```

````

````{py:data} log_queue
:canonical: phospho.log_queue
:value: >
   None

```{autodoc2-docstring} phospho.log_queue
```

````

````{py:data} consumer
:canonical: phospho.consumer
:value: >
   None

```{autodoc2-docstring} phospho.consumer
```

````

````{py:data} current_session_id
:canonical: phospho.current_session_id
:value: >
   None

```{autodoc2-docstring} phospho.current_session_id
```

````

````{py:data} logger
:canonical: phospho.logger
:value: >
   'getLogger(...)'

```{autodoc2-docstring} phospho.logger
```

````

````{py:function} init(api_key: typing.Optional[str] = None, project_id: typing.Optional[str] = None, tick: float = 0.5) -> None
:canonical: phospho.init

```{autodoc2-docstring} phospho.init
```
````

````{py:function} new_session() -> str
:canonical: phospho.new_session

```{autodoc2-docstring} phospho.new_session
```
````

````{py:function} _log_single_event(input: typing.Union[phospho.extractor.RawDataType, str], output: typing.Optional[typing.Union[phospho.extractor.RawDataType, str]] = None, session_id: typing.Optional[str] = None, task_id: typing.Optional[str] = None, raw_input: typing.Optional[phospho.extractor.RawDataType] = None, raw_output: typing.Optional[phospho.extractor.RawDataType] = None, input_to_str_function: typing.Optional[typing.Callable[[typing.Any], str]] = None, output_to_str_function: typing.Optional[typing.Callable[[typing.Any], str]] = None, output_to_task_id_and_to_log_function: typing.Optional[typing.Callable[[typing.Any], typing.Tuple[typing.Optional[str], bool]]] = None, concatenate_raw_outputs_if_task_id_exists: bool = True, to_log: bool = True, **kwargs: typing.Dict[str, typing.Any]) -> typing.Dict[str, object]
:canonical: phospho._log_single_event

```{autodoc2-docstring} phospho._log_single_event
```
````

````{py:function} _wrap_iterable(output: typing.Union[typing.Iterable[phospho.extractor.RawDataType], typing.AsyncIterable[phospho.extractor.RawDataType]]) -> None
:canonical: phospho._wrap_iterable

```{autodoc2-docstring} phospho._wrap_iterable
```
````

````{py:function} log(input: typing.Union[phospho.extractor.RawDataType, str], output: typing.Optional[typing.Union[phospho.extractor.RawDataType, str, typing.Iterable[phospho.extractor.RawDataType]]] = None, session_id: typing.Optional[str] = None, task_id: typing.Optional[str] = None, raw_input: typing.Optional[phospho.extractor.RawDataType] = None, raw_output: typing.Optional[phospho.extractor.RawDataType] = None, input_to_str_function: typing.Optional[typing.Callable[[typing.Any], str]] = None, output_to_str_function: typing.Optional[typing.Callable[[typing.Any], str]] = None, output_to_task_id_and_to_log_function: typing.Optional[typing.Callable[[typing.Any], typing.Tuple[typing.Optional[str], bool]]] = None, concatenate_raw_outputs_if_task_id_exists: bool = True, stream: bool = False, **kwargs: typing.Dict[str, typing.Any]) -> typing.Dict[str, object]
:canonical: phospho.log

```{autodoc2-docstring} phospho.log
```
````

````{py:function} wrap(function: typing.Callable[[typing.Any], typing.Any], **kwargs: typing.Any) -> typing.Callable[[typing.Any], typing.Any]
:canonical: phospho.wrap

```{autodoc2-docstring} phospho.wrap
```
````