# AtomTextarea

AtomTextarea a component that wraps a composition of textarea + Help  Messages. It has some properties like:
- it displays the number of characters
- it doesn't allow more characters than the `maxCharacters` (`4000` by default)

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
<AtomTextarea />
```

### Long size

```javascript
<AtomTextarea size="long">
  Saul Bass on failure: Failure is built into creativity
</AtomTextarea>
```

### With placeholder

```javascript
<AtomTextarea placeholder="Write something cool here..." />
```

### Setting max characters

```javascript
<AtomTextarea maxCharacters={100}>
  Saul Bass on failure: Failure is built into creativity
</AtomTextarea>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/textarea/demo).**
