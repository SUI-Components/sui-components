# AtomUpload

AtomUpload is a component that handles the file selection (via click or drag & drop) and displays the different statuses of the uploading process

## Installation

```sh
$ npm install @s-ui/react-atom-upload --save
```

## Usage

After importing the component `AtomTooltip` like this

```javascript
import AtomUpload, {uploadStatuses} from '@s-ui/react-atom-upload'
```

### Basic usage

```javascript
<AtomUpload
  status={uploadStatuses.ACTIVE}
  iconActive={IconActive}
  textActive={textActive}
/>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/upload/demo).**