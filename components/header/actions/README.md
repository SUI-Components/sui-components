# HeaderActions

## Installation

```sh
> npm install @schibstedspain/sui-header-actions --save
```

## Usage

### Basic usage

```js
import HeaderActions from '@schibstedspain/sui-header-actions'

return <HeaderActions
  buttonLabel='Accept'
  title='Actions header'
  icon={icon}
  onIconClick={() => alert('icon clicked')}
  onButtonClick={() => alert('button clicked')}
/>
```
