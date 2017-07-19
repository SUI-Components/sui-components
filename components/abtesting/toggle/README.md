# react-ab-testing-toggle
> Wraps a set of components and shows the one corresponding to `variation` key.


```html
<AbTestToggle variation="A">
  <button variationId="A" >Green Button</button>
  <button variationId="B" >Blue Button</button>
</AbTestToggle>
```


## Installation

```sh
npm install @schibstedspain/react-ab-testing-toggle --save
```


## Usage

```javascript
import AbTestToggle from '@schibstedspain/react-ab-testing-toggle'
```

```html
<AbTestToggle variation={variation}>
  <button style="color: green;" variationId="A" >Green Button</button>
  <button style="color: blue;" variationId="B" >Blue Button</button>
  <button style="color: black;" defaultVariation >Black Button</button>
</AbTestToggle>
```

* `if` variation equals"A" `then` Green Button is shown, as it has `variationId` set to "A"
* `if` variation="B" `then` Green Button is shown, as it has `variationId` set to "B"
* `if` variation is not defined `then` Black Button is show, is `defaultVariation` is defined.
