# AtomCard

AtomCard is a component that structures two main containers (media & info for example), with the purpose of giving  information about a product/client/article and linking to more detailed information about it.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/card/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,card)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-card?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-card)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Acard&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Acard)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-card)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/card/LICENSE.md)

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