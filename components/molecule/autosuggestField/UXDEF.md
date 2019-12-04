# SUI - Autosuggest field
*Autosuggest it is a form field that let users select from a suggestion list of values. It is a dynamic list that shows the most similar values based on what users write on the field.*

*It should also be noted that Autosuggest it is a molecule because it must be combined with Dropdown list molecule (to show the list of values) and usually is combined with other atoms like Label, Placeholder or HelpText.*

|   Status          | WIP |
|   :----           |   :---- |
|   Current version |   2.0|
|   Category        |   Molecule |
|   Owners          |   UX @David G, @Daniel P, FE @Julian G |

## Structure

- This component always works in combination of [Dropdown list](https://paper.dropbox.com/doc/SUI-Dropdown-list--AMZeIHGwjPUH_E1rMLoO7RbvAg-VSQSdXvEyqawESsk4IkMC) and [Icons](https://paper.dropbox.com/doc/SUI-Icons-WIP--AMb5tk9_hn_MtVAcoE03FXOSAg-vn9iJCzYbYm7pvgHC25eD) molecules and usually with [Label](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT), [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AK5EFuDlc~Bh5FlpHa9XLyQkAg-IqZya9lRXdMvFm0PkT1Vu) and [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-Validation--ALVgLbb5nsUmflT9ZK8XqyiyAg-RZpyYPWRNVPzdC9fVrCtc).
- Autosuggest have a flexible length that is adjustable to the grid of the page.
- The default size for Select is Medium. Small size will be used only in a few cases
- Example: Filters in a left side column usually use the Small size.

![Those are the 2 sizes of the Autosuggest field, combined with Label, Placeholder and Dropdown atoms.](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537447574754_1-Autosuggest-structure.png)

## Behavior

### States
- Autosuggest have the same 3 basic states: default, focused and disabled.
- For the first iteration, the focus will be the native browser focus.
- Remember, the values to select will be shown on the [Dropdown](https://paper.dropbox.com/doc/SUI-Dropdown-list--AMZeIHGwjPUH_E1rMLoO7RbvAg-VSQSdXvEyqawESsk4IkMC) list component.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537447588403_2-Autosuggest-behavior1.png)

### *Dropdown list* opening/closing

The opening it is recommendable when the user enters minimum of 2 or 3 characters. 
This option may be more optimal for performance if the suggested listing is very extensive.
The *Dropdown list* will be closed when the user select a list value or if leave the focus of this component.

The closing it can be different if the component allow the user write a new value (not from the suggestions) or if it is obliged to select a value from the Dropdown list.

### Coincidence

When the user start to write on the field, Autosuggest must show the values that match. From 1 character to the complete word.
More letters written, more close to the perfect match. Less characters will just show simple coincidences.

For example when only 1 character will be written, Autosuggest provably will show lot of poor matches that simply contain that character in wherever of the value.
When 3 or 4 characters will be written, then autosuggest provably will show few matches that are so closed to the complete value the user is looking for.

![Autosuggest field combined with Label, Icon and Dropdown components.](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537268710081_3-Autosuggest-Coincidence.png)

### Select an option

The user can accelerate the introduction by focusing on a suggestion of those shown even if the writing has not yet been completed. For this, the user must select the suggestion of the list; selecting it with the mouse or using the keyboard (direction arrows and "enter").

Once the user has selected a value from the list (Dropdown), it remains fixed in the "Select field" and the "Dropdown list" will be closed.

![Autosuggest field combined with Label, Icon and Dropdown components.](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537270932106_4-Autosuggest-select.png)

**Remember:** it is necessary that the focus be visible at all times and for every element that has focus state.
**Remember:** To change between different elements focus, must be available thru tabulation on the keyword.

### Automatic focus

In case there is a complete match with a term in the list, it will automatically focus on it.

### Multi select

This type is less used and less recommended.
When some values are selected, they appear in the Select field as [Tags](https://paper.dropbox.com/doc/SUI-Tags-bOSL4L5TFYZqPaK0wnCHb) that can be self-deleted. At the same time, they remain as visual options on the [Dropdown](https://paper.dropbox.com/doc/SUI-Dropdown-list--ANBJwzoE5h5fXlq~fBc6ZVgeAg-VSQSdXvEyqawESsk4IkMC) list, but in “disabled state”.

![Select states combined with Label, Icons and Dropdown components.](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537273139257_5-Autosuggest-multiselect.png)

## Contents

We recommend to always use a [Placeholder](https://paper.dropbox.com/doc/SUI-Text-placeholder-IqZya9lRXdMvFm0PkT1Vu) text that indicates what is being asked of users.

**Recommendations:**

- Avoid use Autosuggest field when there are only 2 or 3 options that could be displayed in a [Checkbox component](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button-tmVSbtoe8nZTaZk9mkdsE). (which require only a single click or tap).
- Avoid use Autosuggest field when the possible values to choose (from Dropdown list) are from a closed list and easy to find if they are basic concepts or ordered alphabetically. In that case [Select field](https://paper.dropbox.com/doc/SUI-Select-field-WIP--AM9~SFusS3v3n0VvUP_hv1kmAg-OrlQjuARbK4ZoPdMcSf7p) will be better option.

## Visual

Here it is showed only the Autosuggest field measures.To see the 2 sizes of the field, please check [Input field](https://paper.dropbox.com/doc/SUI-Input-field-WIP--ANBFezB5g93jmp~uku3ikwesAg-03mHJFkOCjviSZevsaTwm). Those are the same.
To see the margins between this molecule and other atoms like [Label](https://paper.dropbox.com/doc/SUI-Label--AMZqSJ24S1u4zxxMfUb4GEpHAg-px3mcUaTHVqlGngk2JNPT), [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AMZT19S4CalH3esz_tCA1zpeAg-IqZya9lRXdMvFm0PkT1Vu) or [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-RZpyYPWRNVPzdC9fVrCtc), please check those components.

The following measurements are visible here:

- The inner margin of the text file
- The inner size and margins for the right-side icons: text delete blade
![Select states combined with Label, Icons and Dropdown components.](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537447610587_7-Autosuggest-visual.png)

## Responsive

The composition of different inputs can be displayed in a grid position when it is viewed on a desktop, but it must be displayed in a vertical position when it moves to small screens.

Breakpoints will determine when to change how to display it. Each vertical has its own breakpoints

To keep the coherence with the other fields used in forms like [Select field](https://paper.dropbox.com/doc/SUI-Select-field-WIP--AM9~SFusS3v3n0VvUP_hv1kmAg-OrlQjuARbK4ZoPdMcSf7p), we recommend not use the native browser selector on mobile devices.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_778845BDD53CEC600969D6616BD868C05D595362D9E370504722819D06D98DCF_1537273846600_6-Autosuggest-responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
3. Focus should be visible
8. Content should be written in common language
10. Clickable area should be sufficient
13. Errors should be prevented
16. Text should always be displayed as text

## Links

- Zeplin: https://zpl.io/bzXyp7V

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Nothing here yet
