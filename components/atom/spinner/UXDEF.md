# SUI - Spinner
*An animated loop used for giving users feedback while the content of a page or section is being loaded.*

|   Status          | Done |
|   :----           |   :---- |
|   Current version |   1.1|
|   Category        |   Atom |
|   Owners          |   UX @David G, @Daniel P, FE @Pablo G  |

## Structure

A single image (GIF, SVG…) with looped animation over a recommended 60% semi-transparent background that covers the page or section being loaded. The color of the semi-transparent background, or even if there needs to be a background, can be defined for each vertical.

The image is horizontally and vertically centered inside its container.

![This spinner is just an example, any animation that meets the described criteria can be used.](https://d2mxuefqeaa7sj.cloudfront.net/s_95D2466C6A5B8477C106E425C9B49B7EFC2C65C6E4041483DD757B6186A1150E_1511855636042_spinner.gif)

## Behavior

When desired, after a user action (i.e., clicking a button), the component appears until the content is fully loaded or loading fails.

When the spinner is active, the user won’t be able to do anything on the loading page or section.

After the user’s action, the spinner has a 0.5-second delay before showing.

## Types

### A. Full page

The background fits the whole page container.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95D2466C6A5B8477C106E425C9B49B7EFC2C65C6E4041483DD757B6186A1150E_1511444356075_2-FullPage.png)

### B. Section

The background fits a specific section of the site

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95D2466C6A5B8477C106E425C9B49B7EFC2C65C6E4041483DD757B6186A1150E_1511444363453_3-Section.png)

## Contents

The spinner image does not contain text to simplify the element.

## Visual

The image that is used is adapted to each vertical brand.
The standard size of the image is 32x32px.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95D2466C6A5B8477C106E425C9B49B7EFC2C65C6E4041483DD757B6186A1150E_1511444997765_4-Visual.png)

## Responsive

No specific changes beyond adapting to screen surface.


## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

7. Interactive elements and images should be correctly labelled
15. Content should have enough contrast to its background 

While the spinner is onscreen, the alt warns users with visibility issues to wait until the content is loaded.
The spinner doesn’t have a focus.

## Links

- Zeplin: https://zpl.io/b6J0z8K

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/an1Oxzr
- Milanuncios
- Motor: https://zpl.io/aNo9Dx9

## Changelog

### Version 1.1

- Document creation
- Updated english translation
