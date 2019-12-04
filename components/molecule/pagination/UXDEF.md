# SUI - Pagination
Splitting the contents, or a section of contents, into pages.

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @Diego M, FE @david.m|

## Structure

The Pagination component consists of a group of buttons arranged in a row. Is divided in 2 parts:

- The **Navigation Buttons** allow the user to navigate consecutively, ascending or descending, through the pages where the content is.
- The **Page Buttons** indicate in which page the user is and allows to browse through the pages without an established order. By clicking on them, the user will go to the page corresponding to the number that the button has.
![](https://d2mxuefqeaa7sj.cloudfront.net/s_E0E3A61A83BDB72BB8AC39C38224D16D8CA20C3E185F85D34AF46B5A69051B00_1537522885243_1-Paginator-+Structure.png)

## Behavior

The **Navigation Buttons** acquire, as their name indicates, a button behavior, therefore they have this states: resting, hover, pressed and disabled.
The Disabled state could change the alpha value depending the component variant (see “Types” section).
The **Page Buttons** have the same behaviour with this states: resting, hover, pressed and highlighted.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E0E3A61A83BDB72BB8AC39C38224D16D8CA20C3E185F85D34AF46B5A69051B00_1537529845275_2-Paginator-+Behavior.png)

## Types

There are 3 versions of Pagination: 

- **Extended version.**
- **Compressed version**
- **Minimalist version**

Each type contains 3 variants that are characterized by the arrangement of the elements that component is formed with.

### Extended version

In this version, the Page Buttons have the structure of the button group showing a maximum of 10 links.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_1EDDC64A234DCE1825D7322E23721AB78CA3FC2C7066B3E01FA04DA8652988B1_1540480358614_Captura+de+pantalla+2018-10-25+a+les+17.12.02.png)

![](/static/img/pixel.gif)

### Compressed version
![](https://d2mxuefqeaa7sj.cloudfront.net/s_1EDDC64A234DCE1825D7322E23721AB78CA3FC2C7066B3E01FA04DA8652988B1_1540480615891_Captura+de+pantalla+2018-10-25+a+les+17.16.36.png)

## Contents

The Navigation Buttons should clearly describe the direction of the page. The use of long copys is not recommended. Apart from the text, this is emphasized by the use of iconography such as arrows or chevrons
The content of the Page Buttons has to be numeric

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E0E3A61A83BDB72BB8AC39C38224D16D8CA20C3E185F85D34AF46B5A69051B00_1537945903309_4-Paginator-+Content.png)

## Visual

Must to be 8 px distance between Navigation Buttons and Page Buttons. And between one navigation button with the other in case of variants 2 o 3.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E0E3A61A83BDB72BB8AC39C38224D16D8CA20C3E185F85D34AF46B5A69051B00_1537955905530_6-paginator-visual.png)

## Responsive

The compressed and minimal version works very well in Mobile devices. To use the extended version it will be necessary to adjust the number of Page Buttons to fit in the device width.

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

- Zeplin: https://zpl.io/2vN95z7

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
