# AtomSlider

`AtomSlider` is a component that works as an input that provides a slider a number or a set of two numbers (range)

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/slider/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,slider)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-slider?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-slider)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Aslider&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Aslider)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-slider)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/slider/LICENSE.md)

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

### Basic usage with custom markers (only first and last position)

```js
<AtomSlider
  min={1}
  max={9}
  marks={['1 km', '9 km']}
/>
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