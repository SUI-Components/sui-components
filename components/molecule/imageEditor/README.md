# MoleculeImageEditor

Component to crop and rotate an image.

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
