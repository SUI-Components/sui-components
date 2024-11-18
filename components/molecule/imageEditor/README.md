# MoleculeImageEditor

Component to crop and rotate an image.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/imageEditor/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,imageEditor)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-image-editor?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-image-editor)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AimageEditor&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AimageEditor)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-image-editor)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/imageEditor/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-image-editor
```

## Usage

### Basic usage

#### Import package and use the component

```js
import MoleculeImageEditor from '@s-ui/react-molecule-image-editor'

return (
  <MoleculeImageEditor 
    cropLabelIcon={<CropIcon>}
    cropLabelText="Crop"
    image={image}
    onChange={handleChange}
    rotateLabelIcon={<RotateIcon>}
    rotateLabelText="Rotate"
  />
)
```

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-molecule-image-editor/lib/index';
```
