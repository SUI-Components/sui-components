
### CoverBasic

It shows an image an also accepts a list of buttons and children.


### Usage
CoverBasic must have an `src` prop and might have a `height` prop too to define container height.
- If `height` prop is not provided the container height will be set via Sass var `$mah-cover-basic`.
- Use `$c-cover-basic-bgsize` Sass var to define the `cover` or `contain` background image style.
- The CoverBasic container might have a click via `handleClick` prop.
- Provide an array of buttons to be passed as childrens inside the CoverBasic container:

```javascript
const buttons = [
    {
    label: 'To be a button with icon',
    handleClick: () => { alert('To be a button with icon...') },
    icon: IconArrowLeft
  },
  {
    label: 'Or not to be',
    handleClick: () => { alert('Or not to be') }
  }
]
```

Each button might have: `label`, `icon` and `handleClick` function.
Multiple CoverBasic components might be allocated in the same page.

Please, if you find any issue report it [here](https://github.com/SUI-Components/sui-components/issues)