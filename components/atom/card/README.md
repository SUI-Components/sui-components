# AtomCard

AtomCard is a component that structures two main containers (media & info for example), with the purpose of giving  information about a product/client/article and linking to more detailed information about it.

## Installation

```sh
$ npm install @s-ui/react-atom-card --save
```

## Usage

```
import AtomCard from '@s-ui/react-atom-card'

const srcImageCar = 'http://images.com/my_image.jpg'
const urlTarget = 'https://www.coches.net/'

const CarImage = () => <AtomImage src={srcImageCar} alt="" />
const CarInfo = () => (
  <div>
    <h2>My Title</h2>
    <p>My Description</p>
  </div>
)
```

### Basic usage
```js
<AtomCard
  media={CarImage}
  content={CarInfo}
  href={urlTarget}
/>
```

### Vertical mode
```js
<AtomCard
  media={CarImage}
  content={CarInfo}
  vertical
/>
```

### With `highlight`
```js
<AtomCard
  media={CarImage}
  content={CarInfo}
  highlight
/>
```


> **Find full description and more examples in the [demo page](/workbench/atom/card).**