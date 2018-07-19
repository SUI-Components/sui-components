# AtomTextarea

AtomTextarea a component that wraps a composition of Label + textarea + Help & Validation Messages. It has some properties like:
- it displays the number of characters
- it doesn't allow more characters than the `maxCharacters` (`4000` by default)
- it handles two states: `success` and `error` (displays proper colors and messages in each case)


## Installation

```sh
$ npm install @s-ui/react-atom-textarea --save
```

## Usage

After importing the component `AtomTextarea` like this

```javascript
import AtomTextarea from '@s-ui/react-atom-textarea'
```

### Basic usage

```javascript
<AtomTextarea label="Description" />
```

### Long size

```javascript
<AtomTextarea label="Description" size="long" />
```

### With placeholder

```javascript
<AtomTextarea label="Description" placeholder="Write something cool here..." />
```

### Error

```javascript
<AtomTextarea  
  label="Description" 
  error 
  errorText="Something went wrong!"
>
  Saul Bass on failure: Failure is built into creativity
</AtomTextarea>
```

### Success

```javascript
<AtomTextarea 
  label="Description"
  success
  successText="Perfect!"
>
  Saul Bass on failure: Failure is built into creativity
</AtomTextarea>
```

### Setting max characters

```javascript
<AtomTextarea 
  label="Description" 
  maxCharacters={100}
>
  Saul Bass on failure: Failure is built into creativity
</AtomTextarea>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/textarea/demo).**
