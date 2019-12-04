# SUI - Select field
Select it is a form field that let users select from a list of possible values. It can be for one selection or multi-selection.

**It should also be noted that Select it is a molecule because it must be combined with Dropdown list molecule (to show the list of values) and usually is combined with other atoms like Label, Placeholder or HelpText.**

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   2.0 |
|   Category        |   Molecule |
|   Owners          |   UX @David G, @Daniel P, FE @Julian G|

## Structure

- This component always works in combination of [Dropdown list](https://paper.dropbox.com/doc/SUI-Dropdown-list--AMZeIHGwjPUH_E1rMLoO7RbvAg-VSQSdXvEyqawESsk4IkMC) and [Icons](https://paper.dropbox.com/doc/SUI-Icons-WIP--AMb5tk9_hn_MtVAcoE03FXOSAg-vn9iJCzYbYm7pvgHC25eD) molecules and usually with [Label](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT), [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AK5EFuDlc~Bh5FlpHa9XLyQkAg-IqZya9lRXdMvFm0PkT1Vu) and [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-Validation--ALVgLbb5nsUmflT9ZK8XqyiyAg-RZpyYPWRNVPzdC9fVrCtc).
- Select have a flexible length that is adjustable to the grid of the page.
- The default size for Select is Medium. Small size will be used only in a few cases
- Example: Filters in a left side column usually use the Small size.

Remember; if there are few values to choose (one or multiple), [Checkbox & Radiobutton](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--AMY4nZaXW1WgxNkQvhDzPNo9Ag-tmVSbtoe8nZTaZk9mkdsE) will be a better component to use.

![Those are the 2 sizes of the Select field, combined with Label, Placeholder and Dropdown components.](https://d2mxuefqeaa7sj.cloudfront.net/s_DF6298C88B53A6B5F6349AE8A93D2FD8E1ABB0F59103E254A993325BBD3DB217_1537261829195_1-Select-structure.png)

## Behavior

### States

- Select have the same 3 basic states: default, focused and disabled.
- For the first iteration, the focus will be the native browser focus.
- Remember, the values to select will be shown on the [Dropdown](https://paper.dropbox.com/doc/SUI-Dropdown-list--AMZeIHGwjPUH_E1rMLoO7RbvAg-VSQSdXvEyqawESsk4IkMC) list component.

**Recommendations:**

- The clickable area of the chevron up/down icon should be more than **40px**, specially 
    for mobile. (See accesibility content for more information)
![Select states combined with Label, Placeholder, Icons and Dropdown components.](https://paper-attachments.dropbox.com/s_87D765E0F56282B787F751ADD711841F06D0972A27E693320F65D35C1824146B_1554819850757_Select-behavior1.png)

### Multi select

This type is less used and less recommended.
When some values are selected, they appear in the Select field as [Tags](https://paper.dropbox.com/doc/SUI-Tags-bOSL4L5TFYZqPaK0wnCHb) that can be self-deleted. At the same time, they remain as visual options on the [Dropdown](https://paper.dropbox.com/doc/SUI-Dropdown-list--ANBJwzoE5h5fXlq~fBc6ZVgeAg-VSQSdXvEyqawESsk4IkMC) list, but in “disabled state”.

![Select states combined with Label, Icons and Dropdown components.](https://paper-attachments.dropbox.com/s_87D765E0F56282B787F751ADD711841F06D0972A27E693320F65D35C1824146B_1554819645297_Select-types.png)

## Content

We recommend to always use a [Placeholder](https://paper.dropbox.com/doc/SUI-Text-placeholder-IqZya9lRXdMvFm0PkT1Vu) text that indicates what is being asked of users.

**Recommendations:**

- Avoid use Select field when there are only 2 or 3 options that could be displayed in a [Checkbox component](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button-tmVSbtoe8nZTaZk9mkdsE). (which require only a single click or tap).
- Resist the temptation to include many items whenever possible. If you have many items, consider alternative ways of presenting them or use facilities like [Autosuggest field](https://paper.dropbox.com/doc/SUI-Autosuggest-field-new-WIP--AMpYLvg3jxrwfy7lnSqo8rSsAg-zmn8DNgi7TQRmlqWG4kFD).
- [Dropdown](https://paper.dropbox.com/doc/SUI-Dropdown-list--ANBJwzoE5h5fXlq~fBc6ZVgeAg-VSQSdXvEyqawESsk4IkMC) recommendation: Gray out any unavailable options instead of removing them: any items that cannot be selected should remain in view. If disabled items are removed, the interface loses spatial consistency and becomes harder to learn.
# Visual

Here it is showed only the Select measures. To see the 2 sizes of the field, please check [Input field](https://paper.dropbox.com/doc/SUI-Input-field-WIP--ANBFezB5g93jmp~uku3ikwesAg-03mHJFkOCjviSZevsaTwm). Those are the same.
To see the margins between Select field and other atoms like [Label](https://paper.dropbox.com/doc/SUI-Label--AMZqSJ24S1u4zxxMfUb4GEpHAg-px3mcUaTHVqlGngk2JNPT), [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AMZT19S4CalH3esz_tCA1zpeAg-IqZya9lRXdMvFm0PkT1Vu) or [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-RZpyYPWRNVPzdC9fVrCtc), please check those components.

The following measurements are visible here:

- The inner margin of the select field should be 8 px minimum.
- The inner size and margins for the right-side icons: arrow up/down.
- The chevron up/down icon has a 8 px padding left.
    
![Select states combined with Label, Icons and Dropdown components.](https://paper-attachments.dropbox.com/s_87D765E0F56282B787F751ADD711841F06D0972A27E693320F65D35C1824146B_1554820866739_Select-visual.png)

## Responsive

The composition of different inputs can be displayed in a grid position when it is viewed on a desktop, but it must be displayed in a vertical position when it moves to small screens.

Breakpoints will determine when to change how to display it. Each vertical has its own breakpoints

To keep the coherence with the other fields used in forms like [Autosuggest field](https://paper.dropbox.com/doc/SUI-Autosuggest-field-new-WIP--AMpYLvg3jxrwfy7lnSqo8rSsAg-zmn8DNgi7TQRmlqWG4kFD), we recommend not use the native browser selector on mobile devices.

When Tags will be needed, using **Large Tag** is mandatory for mobile devices in order to have a better accessibility (See [Tags](https://paper.dropbox.com/doc/SUI-Tags--Ab3DNag_5dltDg1~9YF7J7UDAg-bOSL4L5TFYZqPaK0wnCHb) for more information)

![](https://paper-attachments.dropbox.com/s_87D765E0F56282B787F751ADD711841F06D0972A27E693320F65D35C1824146B_1554819714630_textarea-responsive.png)

### Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
3. Focus should be visible
8. Content should be written in common language
10. Clickable area should be sufficient: A minimum 40 x 40 pixels area is recommended to ensure a comfortable interaction no matter the device.
Users in motion or those with motor disabilities will benefit from an easier way of reaching an interactive element.
13. Errors should be prevented
16. Text should always be displayed as text

## Links

- Zeplin: https://zpl.io/V1MOPw5

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

### Version 2.0

- New Padding left for chevron icon.
- 40 px clickable area of chevron icon

### Version 1.0

- 06/11/2017 Creation of the atom
- 04/09/2018 Iteration. Now is going more simple to work more freely with other components. (decompose) 
