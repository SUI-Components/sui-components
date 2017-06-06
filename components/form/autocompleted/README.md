# Form Autocompleted

React component that shows a form which contains:
- an input
- a list of suggestions
- an optional button

## Component Properties

The component exposes the following props:

* placeholder (String): **Optional** Default text value for the input file when no key is pressed (placeholder value).
* suggests (Array): **Required** Array of SuggestionObjects. Te array contains the suggestions to show. If you don't want to show anything you have to send an empty array.
* handleChange (Function): **Required** This function is called everytime user change the input field value.

	```javascript
		const handleChange = function( inputFileValue ){ ... }
	```
* handleSelect (Function): **Required** This function is called when one suggestion is selected (via click or enter pressed).

	```javascript
		const handleSelect = function( suggestionValue ){ ... }
	```
* handleSubmit (Function): **Optional** This function is called everytime user click the submit button.
* handleBlur (Function): This function is called everytime user exits the input.
* handleFocus (Function): This function is called everytime user focus on the input.
* selectFirstByDefault (Boolean): **Optional** It sets first position for the autocomplete default active option. Defaults to `true`.
* closeOnOutsideClick (Boolean): **Optional** Enables close suggestions on click outside. Elements in the array `excludeFromOutsideClick` (`input`, `submit`, `suggestList`) will not close the suggest list.
* focus (Boolean): **Optional** It trigger focus in the input. Defaults to `false`.
* submit (object): **Optional** contains an optional icon and an optional text for the submit button


An example of the `sui-form-autocompleted` component implementation is:

```javascript
// JSX file.

const EMPTY_SUGGESTS = []


const fakedSuggests = [
  {
    'login': 'A',
    'id': 1410106
  },
  {
    'login': 'aarizaq',
    'id': 45491
  }
]

class MyFormAutocompleted extends React.Component {
  constructor () {
    super()
    this.state = {suggests: EMPTY_SUGGESTS}
  }

  _handleChange (string) {
    // actions to do on input change
  }

  _handleSelect (suggest) {
    // actions to do on select item
  }

  _handleSubmit (content) {
    // actions to do on submit button
  }

  render () {
    return (
      <FormAutocompleted
        placeholder='Form autocompleted'
        handleChange={this._handleChange}
        handleSelect={this._handleSelect}
        handleSubmit={this._handleSubmit}
        suggests={this.state.suggests}
        submit={{ text: 'Submit' }}
        collapsed
				closeOnOutsideClick
        />
    )
  }
}

return (<MyFormAutocompleted />)

```

### SuggestObject

An SuggestObject is a plain JS Object with these specials keys:

```javascript
{
    'id': [Unique id for the suggestion],
    'value': [value to be passed to the handleSelect callback function]
    'content': [React Component] or [Text to be show in the UI]
    'literal': [String] This key is REQUIRED only if you are using a ReactJS Component like a content. It is used to decide which text has to be put in the input text when this suggestion is selected, in other case content will be used,
}
```

### Theme

There are several classes in order to apply a theme to the component:

* sui-formAutocompleted
* sui-formAutocompleted-input
* sui-formAutocompleted-clear
* sui-formAutocompleted-suggests
* sui-formAutocompleted-suggestsItem
...

The component exports a basic CSS that you can include from the package in the node_modules.


## Bundle

In order to generate the bundle including all React dependencies and the component logic we need to bundle a single JS file running the following command:
```
$ npm run build
```
