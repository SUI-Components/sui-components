### FormTextarea

_**Important:**_
_The `@schibstedspain/sui-form-textarea` component **is not yet fully compliant with UX Design**, as it is still in WIP by UX team._
_**Please take into account the specifications defined [here](https://paper.dropbox.com/doc/SUI-Form-Elements-WIP-dLZacE1Ye7Qxrp7n9Y0Hy)**, when iterate this first provisional component's version to make it fully compliant._

Basic text-area form element.

A placeholder to specify a short hint of the expected value of the text area (which will be displayed only when the text-area is empty) can be passed in `placeholder` property.

The default height and width of the text area can be defined whether with `cols` and `rows` property, or with a custom CSS class name.

The spellcheck of the inner text of the text area can be disabled (HTML5).

You can pass a custom callback to be executed when the text area value is changed, through `onChange` property.
