# AtomImage

AtomImage is a component that loads an image inside, maintaining all the accesibility attributes. This component can be set to show a placeholder image, a skeleton and/or a spinner while the final image is being loaded. This component will also show an Error Box if the image could't be loaded


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

### With skeleton while loading

```javascript
<AtomImage 
  src={ urlImage } 
  alt="Nice Picture" 
  skeleton={ urlImageSkeleton } 
/>
```

### With placeholder while loading

```javascript
<AtomImage 
  src={ urlImage } 
  alt="Nice Picture" 
  placeholder={ urlImagePlaceholder }
/>
```

### With spinner while loading

```javascript
<AtomImage 
  src={ urlImage } 
  alt="Nice Picture" 
  spinner={ Spinner }
/>
```

### With custom Error if error loading

```javascript
<AtomImage 
  src={ urlImage } 
  alt="Nice Picture" 
  errorText="Oh no!! This image couldn't be loaded"
  errorIcon={ MyIconErrorLoading }
/>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/image/demo).**