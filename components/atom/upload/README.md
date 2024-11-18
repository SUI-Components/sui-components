# AtomUpload

AtomUpload is a component that handles the file selection (via click or drag & drop) and displays the different statuses of the uploading process

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/upload/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,upload)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-upload?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-upload)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aupload&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aupload)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-upload)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/upload/LICENSE.md)

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