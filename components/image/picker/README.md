# ImagePicker

## Description

Panel with the selected image and a list of images that will replace the selected image as they are clicked.

## Installation

```sh
$ npm install @schibstedspain/sui-image-picker --save
```

## Usage

### Basic usage
```js
import ImagePicker from '@schibstedspain/sui-image-picker'

const images = [
  {
    alt: 'Alternate text for image 1',
    src: 'http://via.placeholder.com/350x150.png/000/fff?text=primary+1',
    thumb: 'http://via.placeholder.com/100.png/000/fff'
  },
  {
    alt: 'Alternate text for image 2',
    src: 'http://via.placeholder.com/150x350.png/666/094?text=primary+2',
    thumb: 'http://via.placeholder.com/100.png/666/094'
  }
]

const clickCallback = (image) => alert('clicked on image ' + image.src)

const actions = [
  {
    callback: (image) => alert('Clicked on action 1 with image ' + image.src),
    node: <div>Action 1</div>
  },
  {
    callback: (image) => alert('Clicked on action 2 with image ' + image.src),
    node: <div>Action 2</div>
  }
]

const emptyImage = <img src="http://URL-EMPTY-IMAGE" alt="Empty image" />

return (<ImagePicker images={images} onClick={clickCallback} actions={actions} emptyImage={emptyImage} />)
```
