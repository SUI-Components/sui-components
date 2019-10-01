# SUI - Rating
*A classification according how good or popular someone o something is.*

|   Status          | Pending review |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @Diego M|


## Structure

The rating component consists of two clearly differentiated parts. A block of stars that indicates the degree of satisfaction in a visual way and a label that reaffirms that statement with text giving more details. This label can have a link function.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C66946978555A8CAAFFDC75B2CF5587C671784276AFEDBF7ED7E005950261033_1542203714893_1-Rarting-+Structure.png)

## Behavior

The label have the same behaviour as a button but the disabled state have the same visual as resting state. The mission of the label is to add the number of total ratings. But if the site needs to show to the user the ratings more accurate, the label has to have a button behaviour. Add the label must be optional depending on the needs of the site. The flexibility of this component allows to add a superior label or be accompanied by a help text.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C66946978555A8CAAFFDC75B2CF5587C671784276AFEDBF7ED7E005950261033_1542203732292_2-Rarting-+Behavior.png)

## Types

As mentioned in the previous section, the existence of the label is based on the needs of the site, so exist two types of rating components: with or without label.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C66946978555A8CAAFFDC75B2CF5587C671784276AFEDBF7ED7E005950261033_1542203860811_3-Rarting-+variant.png)

## Contents

Try not to add a extensive text in the label. It has to be clear and concrete. It your label is 2 lines long or more, please rethink the content.
Stars have to be in the same line.
If you don’t have a lot of horizontal space, think to build the component in 2 lines: the stars in the top and the label below.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C66946978555A8CAAFFDC75B2CF5587C671784276AFEDBF7ED7E005950261033_1542203929964_4-Rarting-+Content.png)

## Visual

8px is the distance between the stars group and the label. The size could be adapted according to 24px, 32px and 40px, in spite of that the sizes between the parts must be the explained in the image.

The colors must be customizable to cover the needs of each site as well the objects. It’s not mandatory to use stars. But these objects must have a fill property so it is not recommended to use outlined icons. There will be two types of filling: full and half.
- Full: When the component is used to vote.  
- Half When the component is used to show a result with decimals in the average.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C66946978555A8CAAFFDC75B2CF5587C671784276AFEDBF7ED7E005950261033_1544112614946_6-Rartingvisual.png)

## Responsive

Keep in mind that this component must adapt the focus area to a larger one in order to facilitate its access when it appears in a mobile device. About this, the rules to follow are the same of any other component.

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

- Zeplin: https://zpl.io/bldmOE0

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
