# SUI - Switch 
*The switch is the radio button when there’re only 2 exclusive options. “On/off” is a common and clear example for explaining this component.*

*Generally, you can use either a radio button or a switch; those are our recommendations:*

- *For more than 2 options, only a radio button can be used.*
- *When the user must select between 2 options, a switch should be used instead.*

|   Status          | Done |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @David G, @Daniel P  |


## Structure

A switch is composed of a main and a central dynamic icon, plus the labels that explain it.
The most important aspect of this component is that the user can clearly understand the 2 excluding options and identify which one has been selected without any doubt.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1512391236103_1-Structure.png)

### Labels

There are 2 different labels to use that can be combined between them.

1. A title (label) + side-to-side labels that explain each option that will be selected.
2. A long label that explains an option that is available to be activated.

Here is how the clickable area works in Behavior.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1512385634780_2-Switchlabels.png)

If side-to-side labels aren’t used, the Short or Long labels can only be used with a Toggle-type switch. See the Types below.

## Types

There are 2 types of visual representation of the same function.

### Toggle switch

This is the common on/off case.

- On or active: this means that the function is working
- Off or inactive: this means that the function has stopped.
![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1511875119791_4-Type1.png)

### Select switch

This other type means that users don’t choose to make 1 option active or inactive; they rather choose between 2 different active options. 


![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1511875127412_5-Type2.png)

## Behavior

Check the [HelpText & Validation definition](https://paper.dropbox.com/doc/SUI-HelpText-Validation-RZpyYPWRNVPzdC9fVrCtc).

The common and recommended behavior for switches is for the changes to start working instantly. No “save changes” or “confirmations” alerts are needed (but providing users with success feedback is always a good practice).

### Clickable Area

The behavior of the clickable area for switch will depend on the labels (as seen above under Structure).
1 Label: 1 clickable area that acts as a toggle. 
2 Labels: 2 clickable areas. Each one selects its own, but the area where they overlap (the icon) acts as a toggle.

### State

- The switch inputs have 4 basic statuses: Active, inactive, focus and disable.
- For the first iteration, the focus will be the native browser focus.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1512391349933_Behavior.png)

Remember: the “Select switch” doesn’t have an “inactive status”. Both options to select will be in active state.

## Content

Check the [Label definition.](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT)

Remember, the label must be descriptive but brief.

## Visual

The following measurements can be viewed here:

- Switch size and spaces
- Spaces between Labels and the Switch
    
![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1525433800392_6-Visual.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus should be visible
6. Information should not be supported only by one sense
7. Interactive elements and images should be correctly labelled
8. Content should be written in common language
10. Clickable area should be sufficient
12. Controls should be correctly labelled
16. Text should always be displayed as text

The focus area has been defined as 24 px (only when it is for text+icon)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_0B00381A49C4EA49DAA19DF8F78564F8D62D43C9654F1BA5961B5AEAAEEEA827_1513841135458_7-Focus.png)

## Links

- Benchmark: https://confluence.schibsted.io/display/ST/Benchmark+Form+Elements#

- Zeplin: https://zpl.io/VkKqnkK

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/VkYOq3K
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Nothing here yet
