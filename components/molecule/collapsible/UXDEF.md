# SUI - Collapsible
*The collapsible component allows the user to expand or collapse content. We use this component to lightweight the content of a page or section.*

|   Status          | Complete |
|   :----           |   :---- |
|   Current version |   1.2 |
|   Category        |   Molecule |
|   Owners          |   UX @David G, @Chris J, @Nilo M, FE @Pablo G )|

## Structure

The collapsible component is conformed by a text link with an arrow icon. 
The arrow icon is aligned on the right of the text.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087158369_1-Collapsible-+Structure.png)

## Behavior

When the user clicks on the component, it shows a content that was fully or partially hidden, and changes its state:

- SHOW
    When its content is partially hidden, the arrow icon points down and the copy invites the user to click and view more information.
- HIDE
    When its content is fully shown, the arrow icon points up and the copy invites the user to click and hide some information.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087182240_2-Collapsible-+Behavior.png)


When the user clicks on the collapsible component when it’s in its “Hide” state, the information previously shown will hide again.

Its default position is the “Show” state.

Its hit area includes both text link and arrow icon.

When changing from “hide” to “show” there can be a transition to both smooth the animation and help the user understand the interaction.

Both components (text and link) are independent in its alignment. 
Example:
Text paragraph align: left
Link “Show” align: center.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087407222_3.3-Collapsible-types-Variations.png)

### Height

A maximum height for the hidden area can be specified if needed. In that case, hidden area will have its own scroll when shown.

## Types

### Basic Collapsible

When the content is partially hidden.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087195388_3.1-Collapsible-Types.png)

### Gradient Collapsible

When the content is partially hidden with a gradient to transparent hiding the last lines. When the content is displayed the gradient will be hidden.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087206769_3.2-Collapsible-Types.png)

## Contents

Collapsible labels should be clear enough to allow the user to identify the action with a short titles.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087383980_4-Collapsible-+Content.png)

## Visual

The gradient variation is displayed in position absolute above the top content.
Collapsible label is the Medium typography size with a Primary color. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513087433600_5-Collapsible-+Visual.png)

## Responsive

No specific changes beyond adapting to screen surface.


## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1518181703445_7-Collapsible-Focus.png)

6. Information should not be supported only by one sense
7. Interactive elements and images should be correctly labelled
8. Content should be written in common language
10. Clickable area should be sufficient

The active/clickable area is the full width of the Icon + Label and a height of 24px.
    
![](https://d2mxuefqeaa7sj.cloudfront.net/s_8A56717BC5557F04E1DB974F960ADFB1B872D696883F0969AF34A0A2F91618B8_1513088059587_6-Collapsible-+Active+Area.png)

12. Controls should be correctly labelled
16. Text should always be displayed as text

## Links

- Zeplin: https://zpl.io/2jpXM34

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.ir88o/aXGLA9X
- Milanuncios
- Motor

## Changelog

### Version 1.2

- Paragraph & link independent alignment

### Version 1.0

- Document creation
