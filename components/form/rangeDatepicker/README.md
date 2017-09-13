### FormRangeDatepicker

# @schibstedspain/sui-form-range-datepicker
> A React component that show a date range. You can select a start date and end date. When press the button, you get the date range between the dates.
> 
> This component use npm component: [react-datepicker](https://www.npmjs.com/package/react-datepicker).

## Installation

```sh
npm install @schibstedspain/sui-form-range-datepicker --save
```


## Usage

```javascript
import FormRangeDatepicker from '@schibstedspain/sui-form-range-datepicker'
```

```html
function handleClick (range) {
  console.log('handleClick', range)
}

function handleChangeStart (date) {
  console.log('handleChangeStart', date)
}

function handleChangeEnd (date) {
  console.log('handleChangeEnd', date)
}

<FormRangeDatepicker buttonLabel='Test' handleClickButton={handleClick} handleChangeStart={handleChangeStart} handleChangeEnd={handleChangeEnd} />
```
  
