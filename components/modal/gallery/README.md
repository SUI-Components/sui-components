# SUI ModalGallery

> Description
Creates a fullscreen multimedia slider gallery (`sui-image-slider`) and opens it inside  a modal (`sui-modal-basic`).

#### Future tasks:
- [ ] Allow including videos in slider.
- [ ] Allow including floorplans in slider.
- [ ] Create multimedia multi-counter types (3 separated counter for images, videos and floorplans to show in modal's header.)

## Installation

```sh
$ npm install @schibstedspain/sui-modal-gallery --save
```

## Usage

### Basic usage
```js
import ModalGallery from '@schibstedspain/sui-modal-gallery'

<ModalGallery
  shouldRenderModal
  multimedia={{images: [/* Array of images */]}}
  initialSlide={6}
  doAfterSlide={() => alert('Slide changed!'}
  onClose={() => alert('Closing...')}
/>
```

> **Find full description and more examples in the [demo page](../demo).**
