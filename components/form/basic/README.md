# Form Basic

React component that shows a form with list of suggestions under an input file when you start to write something.

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
* focus (Boolean): **Optional** It trigger focus in the input. Defaults to `false`.
* submit (object): **Optional** contains an optional icon and an optional text for the submit button


An example of the `sui-form-basic` component implementation is:

```javascript
// JSX file.

const EMPTY_SUGGESTS = []

const SearchIcon = ({ svgClass }) => <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' className={svgClass} viewBox='0 0 64 64' style={{ fill: 'inherit' }}><path d='M56.49,62.49a6,6,0,0,1-4.24-1.76l-9.9-9.9a4,4,0,0,1,0-5.66L41.2,44A25,25,0,1,1,44,41.2l1.14,1.14h0a4.09,4.09,0,0,1,5.66,0l9.9,9.9a6,6,0,0,1,0,8.48h0A6,6,0,0,1,56.49,62.49Zm-10-15.84L45.17,48l9.9,9.9a2,2,0,0,0,2.83,0h0a2,2,0,0,0,0-2.83L48,45.17l-1.36,1.36-.05.06ZM25,4A21,21,0,1,0,46,25,21,21,0,0,0,25,4Zm0,38A17,17,0,1,1,42,25,17,17,0,0,1,25,42Zm0-30A13,13,0,1,0,38,25,13,13,0,0,0,25,12Zm6.93,14.93a2,2,0,0,1-2-2,5,5,0,0,0-5-5,2,2,0,0,1,0-4,9,9,0,0,1,9,9A2,2,0,0,1,31.93,26.93Z' /> </svg>

const fakedResults = [
  {
    'login': 'A',
    'id': 1410106
  },
  {
    'login': 'aarizaq',
    'id': 45491
  }
]

class MyFormBasic extends React.Component {
  constructor () {
    super()
    this.state = {suggests: EMPTY_SUGGESTS}
    this._handleChange = this._handleChange.bind(this)
    this._handleSelect = this._handleSelect.bind(this)
  }

  _handleChange (string) {
    if (string) {
      const suggests = fakedResults
        .filter(user => user.login.includes(string))
        .map(user => ({id: user.id, content: user.login, value: user.login}))
      this.setState({ suggests: suggests })
    } else {
      this.setState({suggests: EMPTY_SUGGESTS})
    }
  }

  _handleSelect (suggest) {
    console.log(suggest)
    alert(suggest.content)
    this.setState({suggests: EMPTY_SUGGESTS})
  }

  _handleSubmit (content) {
    console.log(content)
  }

  render () {
    return (
      <FormBasic
        placeholder='Github users names'
        handleChange={this._handleChange}
        handleSelect={this._handleSelect}
        handleSubmit={this._handleSubmit}
        suggests={this.state.suggests}
        submit={{ icon: SearchIcon, text: 'Submit' }}
        collapsed
        />
    )
  }
}

return (<MyFormBasic />)

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

* sui-formBasic
* sui-formBasic-input
* sui-formBasic-clear
* sui-formBasic-results
* sui-formBasic-item
...

The component exports a basic CSS that you can include from the package in the node_modules.


## Bundle

In order to generate the bundle including all React dependencies and the component logic we need to bundle a single JS file running the following command:
```
$ npm run build
```
