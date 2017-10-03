### FormCheckbox

_**Important:**_
_The `@schibstedspain/sui-form-checkbox` component **is not yet fully compliant with UX Design**, as it is still in WIP by UX team._
_**Please take into account the specifications defined [here](https://paper.dropbox.com/doc/SUI-Form-Elements-WIP-dLZacE1Ye7Qxrp7n9Y0Hy)**, when iterate this first provisional component's version to make it fully compliant._

Simple checkbox form element.

You can pass a custom callback to be executed when the checkbox value is changed, through `onChange` property.

Despite it has default icons to represent the states of the checkbox, it allows their customization (for checked/unchecked states) through `svgIcons.checked` and `svgIcons.unchecked` properties.

It also supports to display an error message, if the component's property `errorMessage` is set.