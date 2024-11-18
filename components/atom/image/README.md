# AtomImage

AtomImage is a component that loads an image inside, maintaining all the accesibility attributes. This component can be set to show a placeholder image, a skeleton and/or a spinner while the final image is being loaded. This component will also show an Error Box if the image could't be loaded

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/image/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,image)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-image?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-image)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aimage&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aimage)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-image)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/image/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-image --save
```

## Usage

After importing the component `AtomImage` like this

```javascript
import AtomImage from '@s-ui/react-atom-image'
```

### Basic usage

```javascript
<AtomImage
  src={ urlImage }
  alt="Nice Picture"
/>
```

### With a title

```javascript
<AtomImage
  src={ urlImage }
  alt="Nice Picture"
  title="Nice Picture"
/>
```

### With skeleton while loading

```javascript
<AtomImage
  src={ urlImage }
  alt="Nice Picture"
  title="Nice Picture"
  skeleton={ urlImageSkeleton }
/>
```

### With placeholder while loading

```javascript
<AtomImage
  src={ urlImage }
  alt="Nice Picture"
  title="Nice Picture"
  placeholder={ urlImagePlaceholder }
/>
```

### With spinner while loading

```javascript
<AtomImage
  src={ urlImage }
  alt="Nice Picture"
  title="Nice picture"
  spinner={ Spinner }
/>
```

### With custom Error if error loading

```javascript
<AtomImage
  src={ urlImage }
  alt="Nice Picture"
  title="Nice picture"
  errorText="Oh no!! This image couldn't be loaded"
  errorIcon={ MyIconErrorLoading }
/>
```

### With picture sources [mdn picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

Loads 50x50 image when the viewport is under 480px, elsewise it loads a 150x150 image

```js
<AtomImage
  src='https://via.placeholder.com/50'
  alt=''
  title=''
  sources={[
    {srcset: 'https://via.placeholder.com/150', media: '(min-width: 480px)'}
  ]}
```

### With Web Performance attributes

Attributes to optimize image that is a [LCP](https://web.dev/lcp) element,
usually the first image in the viewport

```js

import AtomImage, {DECODING, FETCHPRIORITY, LOADING} from '@s-ui/react-atom-image'

<AtomImage
  src='https://via.placeholder.com/50'
  alt='Optimized image for LCP'
  title='Optimized image for LCP'
  decoding={DECODING.sync}
  fetchpriority={FETCHPRIORITY.high}
  loading={LOADING.eager}
  sources={[
    {srcset: 'https://via.placeholder.com/150', media: '(min-width: 480px)'}
  ]}
```

Attributes to optimize image that is not a [LCP](https://web.dev/lcp) element,
usually the the images out of the viewport

```js

import AtomImage, {DECODING, FETCHPRIORITY, LOADING} from '@s-ui/react-atom-image'

<AtomImage
  src='https://via.placeholder.com/50'
  alt='Optimized image to lazy load and low the priority'
  title='Optimized image to lazy load and low the priority'
  decoding={DECODING.async}
  fetchpriority={FETCHPRIORITY.low}
  loading={LOADING.lazy}
  sources={[
    {srcset: 'https://via.placeholder.com/150', media: '(min-width: 480px)'}
  ]}
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/image/demo).**
