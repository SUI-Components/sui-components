# AtomSlider

`AtomSlider` is a component that works as an input that provides a slider a number or a set of two numbers (range)

## Installation

```sh
$ npm install @s-ui/react-atom-slider --save
```

## Usage

```js
import AtomSlider from '@s-ui/react-atom-slider'
```

### Basic usage

```js
<AtomSlider/>
```

### Step 25 and default value 50

```js
<AtomSlider step={25} value={50}/>
```

### Disabled

```js
<AtomSlider step={25} value={25} disabled />
```

### Range Basic

```js
<AtomSlider range />
```

### Range Step 10

```js
<AtomSlider range step={10} />
```

### Capturing Value Change

```js
<AtomSlider onChange={ (e, {value}) => console.log(value)} />
```

    

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/slider/demo).**