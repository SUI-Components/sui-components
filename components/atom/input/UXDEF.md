# SUI - Input field
*Input is the text field that users fill in with different types of information thru alphanumeric text.* 
*These include dates, passwords or even short answers.*

*It should also be noted that Input it is a molecule because always is combined with other atoms like Label, Placeholder or HelpText.*

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   2.0 |
|   Category        |   Molecule |
|   Owners          |   UX @David G, @Daniel P ,FE @Julian G|

## Structure

- This component almost always it works with [Label](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT) & [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AK5EFuDlc~Bh5FlpHa9XLyQkAg-IqZya9lRXdMvFm0PkT1Vu) atoms and usually it is combined with other atoms like [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-Validation--ALVgLbb5nsUmflT9ZK8XqyiyAg-RZpyYPWRNVPzdC9fVrCtc) or [Buttons](https://paper.dropbox.com/doc/SUI-Buttons-AvdtvjMAqbsFkTYSz3egT).
- Inputs have a flexible length that is adjustable to the grid of the page, except in a few cases where the length is fixed (see the Content cases below).
- The default size for inputs is Medium. Small size will be used only in a few cases
- Example: Filters in a left side column usually use the Small size.
- As an optional feature, the structure can contain a fixed icon or addons (left or right side) that visually indicates its contents or help the user understand and complete the input (see the Content cases below).

![Those are the 2 sizes of the Input field, combined with Label and Placeholder atoms](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1511430472179_structure.png)

## Behavior

### States

- Inputs have the 3 basic states: default, focused and disabled.
- Should be noted that Placeholder atom disappear when the Input is on focus status. This behavior helps the user understand that the field is ready to write on it.
- For the first iteration, the focus will be the native Browser focus.
![Input states combined with Label and Placeholder atoms](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1537263844471_2-inputs-behavior.png)

### Combined with buttons

- When an Input is used in combination with buttons, they are always placed to the right of the input, and in responsive adaptation the order can never be changed.
- Remember: the button size will always adapt itself to the input size.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1510148996994_+Inputs-structure.png)

## Content

We recommend to always use a [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--ALcBKGls8YGd6z2D3u_cnE8MAg-IqZya9lRXdMvFm0PkT1Vu) atom that indicates what users are being asked.

### Fixed inputs

There are specific cases where the length of the input is not flexible and has a fixed length, as the following cases. The length it is calculated adding a fix margin to the left & right side of the content.

Different types of content:

- **Date field** 
We will use the native browser date field
- **Postal Code**
- **Bank account** (1 input box with spaces/scripts between the blocks of numbers)
The code of this input, must be ready to accept the variations in the Country parameters or credit cards types variations.
- **Password** is an exception, that adds a new element:
- “Show” or “Hide” toggle inside the input text
To avoid confusion with secondary and tertiary buttons, this text may not be in capital letters

Remember, Input (specially the password) can be combined with [HelpText & Validation](https://paper.dropbox.com/doc/SUI-HelpText-Validation-RZpyYPWRNVPzdC9fVrCtc).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1537263897353_4-inputs-cases.png)

The date field and the bank account will be in 1 unique filed. The reasons after studying corner cases and conducting an external benchmark were:

- To continue with the current format (date) and keep it simple.
- Having the bank account in separate boxes doesn’t work on small screens.
- Having the bank account in separate boxes doesn’t make it intuitive for users who want to copy and paste.


### Icons and addons inside the input

Optionally, an Input can include icons and addons. Text (non editable) that helps the user understand and makes it easier to fill the content.

Even the visual design (colors, borders, icons…) are flexible to adapt to each vertical needs, there are some common rules to follow:

1. **Icons**
    1. Aren’t placed inside “fixed gray box”
    2. Must be on the left side of the input
        1. **Exeption**: The [Select](https://paper.dropbox.com/doc/SUI-Select--ALdcLEuyP4LKqQkgmvdzGl0NAg-OrlQjuARbK4ZoPdMcSf7p) and [Autosuggest](https://paper.dropbox.com/doc/SUI-Autosuggest-field-new-WIP-zmn8DNgi7TQRmlqWG4kFD) components uses actionable icons at the right side.
    3. Cannot be text. Only visual icons
2. **Addons**
    1. Must be placed inside a “fixed gray box”
    2. It is NON-editable informative text 
    3. Can be placed at the left or right side, depending on the needs.
    4. If it is combined with an icon, the addon must be placed to the right side, because the icon must be placed at the left side.
    5. Addons may not ever be used on the right side when it is combined with an interactive icon (like the arrow from [Select field](https://paper.dropbox.com/doc/SUI-Select-field-WIP--AM9~SFusS3v3n0VvUP_hv1kmAg-OrlQjuARbK4ZoPdMcSf7p), for example); because interactive icons are always on the right side.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1537264334678_3-Addons.png)

## Visual

Here it is showed only the Input measures. 
To see the margins between Input field and other atoms like [Label](https://paper.dropbox.com/doc/SUI-Label--AMZqSJ24S1u4zxxMfUb4GEpHAg-px3mcUaTHVqlGngk2JNPT), [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AMZT19S4CalH3esz_tCA1zpeAg-IqZya9lRXdMvFm0PkT1Vu) or [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-RZpyYPWRNVPzdC9fVrCtc), please check those components.

1. By default, the input box is rounded to 0. But every webpage (vertical) can adapt it to its UI needs.

![Input mesures combined with Label, Placeholder and Icon atoms](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1537264754902_6-+Inputs-visual.png)

## Responsive

The composition of different inputs can be displayed in a grid position when it is viewed on a desktop, but it must be displayed in a vertical position when it moves to a small screen. 

- The screen size will determine when the vertical position display should be changed.

Regardless of the position of the inputs composition, the label must always follow its own definition position. Check the the [Label definition](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D0205697BB8671E12E85C67415B7EDCAAC9185382AE5C5DF3A549200AC3F0C7C_1508919220395_+Inputs-responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

2. Focus should be visible
6. Information should not be supported only by one sense
10. Clickable area should be sufficient
12. Controls should be correctly labelled
13. Errors should be prevented 
16. Text should always be displayed as text

## Links

- Zeplin: https://zpl.io/aBw5MMk

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/2ZP5EGJ
- Milanuncios
- Motor: https://zpl.io/bzn16A3

## Changelog

### Version 2.0

- Iteration. Now is going more simple to work more freely with other components. (decompose) 

### Version 1.0

- Creation of the atom