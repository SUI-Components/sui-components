# SUI - Dropdown list
The dropdown is the component that makes up a list of values that is deployed thanks to the* Select component or others like Autosuggest. Each line of value is composed of one or a few atoms, usually text, although it also allows the use of checkboxes and images.

Dropdown allows the selection of a single unique option and also the multiselection using the* [Checkbox](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--ALhw~d67i531xdaHHfPTcmlLAg-tmVSbtoe8nZTaZk9mkdsE) atom.

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @Marc G, FE Kiko Ruiz Lloret|

## Structure

- Dropdown is a single selectable text or a combination of some elements ([Checkbox](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--ALhw~d67i531xdaHHfPTcmlLAg-tmVSbtoe8nZTaZk9mkdsE) + selectable text)
- Dropdown have a flexible width that is adjustable to the content. 
See the Visual>Text specifications for more info about that constrain.


![Default simple values list of Dropdown List  VS  The multiselect values (combined with Checkbox atom)](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1534146766352_Dropdown+row++Structure.png)

## Behavior

### Showed elements by default

During implementation, there are 3 possibilities for how many elements of the list will be shown.

- **S** Small: < 4 items (Cutting out the last one visually)
- **M** Medium: < 6 items (Cutting out the last one visually)
- **L** Large: < 8 items (Cutting out the last one visually)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1534145895941_Dropdown+row+Structure+Height.png)

![Check zeplin for specific technical aspects ( exemple: Background:  Primary colour full lightness 90%)](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1533820344746_Dropdown+row++Behaviour.png)

![To indicate the hover we must put the pointer](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1533887034946_options.gif)
![The selected item don’t need change the font-weight](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1533887034921_dropdown_check.gif)

### Recommendation: 

Gray out any unavailable options instead of removing them: any items that cannot be selected should remain in view. If disabled items are removed, the interface loses spatial consistency and becomes harder to learn.

## Visual

- Measurements specifications:
    - The inner margin of each row is 16px
    - The maximum height of each row 40px
    - (Check the [Select](https://paper.dropbox.com/doc/SUI-Select--AJtBe_JcZUYGXg00QYmHnQ7oAg-OrlQjuARbK4ZoPdMcSf7p) and [Checkbox & Radio button](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--AJtrEE8GozBn7va40aJgBWL9Ag-tmVSbtoe8nZTaZk9mkdsE) [definition](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--AJtrEE8GozBn7va40aJgBWL9Ag-tmVSbtoe8nZTaZk9mkdsE) for more information)

- Text specifications:
    - Just one text line in each row is allowed
    - Use <24 characters max
    - If your item need more than <24 characters, use ellipsis


- Dropdown box specifications:
    - Position: Dropdown box should be **top:0px** from the bottom of Select component
    - Shadow: Large
    - Stroke: Thinkness ( 1 )    Color (#BBBBBB) Gray-l2    Position (Inside)
    - Border radius: Custom
    - (Check the [Select](https://paper.dropbox.com/doc/SUI-Select--AJtBe_JcZUYGXg00QYmHnQ7oAg-OrlQjuARbK4ZoPdMcSf7p) for more information)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1533888683177_Dropdown+row++Visual.png)

![Use ellipsis when the Selectable text will be longer](https://d2mxuefqeaa7sj.cloudfront.net/s_EAB3330EEF8440D7947614D13105721CA6142D19672B5118282DAEAB8E25DDD8_1533900242345_Dropdown+row++Visual+Constrains.png)

## Responsive

The states (selectable text and checkbox behavior) in mobile are the exactly the same but the **Hover** state canot be displayed

Check [Select](https://paper.dropbox.com/doc/SUI-Select--AJtBe_JcZUYGXg00QYmHnQ7oAg-OrlQjuARbK4ZoPdMcSf7p)  for more information

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

- Every interactive element should be focusable
- Focus order should match visual order
- Focus should be visible
- Interactive elements and images should be correctly labelled
- Interactive elements should be differentiated from content
- Clickable area should be sufficient
- Content should have enough contrast to its background 
- Controls should be correctly labelled
- Content should be able to increase in size
- Text should always be displayed as text
- Content should declare the language

## Links

- Zeplin: https://zpl.io/2pBk0XE

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
- Motor: https://zpl.io/VQE8YyP

## Changelog

### Version 1.0

- Nothing here yet
