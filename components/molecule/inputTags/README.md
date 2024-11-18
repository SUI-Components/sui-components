# MoleculeInputTags

`MoleculeInputTags` is an `AtomInput` with the behavior of adding/removing `AtomTag` as a list

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/inputTags/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,inputTags)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-input-tags?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-input-tags)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AinputTags&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AinputTags)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-input-tags)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/inputTags/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-input-tags --save
```

## Usage

```js
import MoleculeInputTags from '@s-ui/react-molecule-input-tags'
const closeIcon = () => <span>X</span>
```

### Basic usage

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} />
```

### Entering tags on Tab

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} onEnterKey="Tab" />
```

### Initial list of tags

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} tags={['john','paul','george','ringo']} />
```

### `AtomInput` props

All props of `AtomInput` can also be passed to `MoleculeInputTags`

```js
<MoleculeInputTags tagsCloseIcon={closeIcon} errorState={true} />
```

### Just unique values

You can set `allowDuplicates` to false to force unique values

```js
<MoleculeInputTags allowDuplicates={false} />
```

### Max tags

use `maxTags` prop to set a number of maximum tags that can be entered, after reaching that number the field gets disabled

```js
<MoleculeInputTags maxTags={3} />
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/inputTags/demo).**
