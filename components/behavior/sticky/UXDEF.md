# SUI - Sticky
Sticky is a component that describes a non scrolling behavior that can be assigned to atoms, molecules or organisms.

|   Status          | WIP |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Behavior |
|   Owners          |   UX @daniel g, @María A, @Chris J, FE @Pablo G |

Sticky does not have a visual structure. It is a behavior that can be applied to a component or group of components making them not affected by the scroll.

## Types
### A) Position
- Top
- Bottom
The element could have space around it, in this case it will appear like floating on the screen.

![Image on the left: sticky element on top and another on the bottom. Image on the right: sticky element on the bottom with space around it.](https://d2mxuefqeaa7sj.cloudfront.net/s_6F3D481BC5DD773DB4C5B4380B80B6FA6A01D8D3A28455075D6877239380F8AA_1538565366358_Sticky+Type+1.gif)

### B) Lifecycle

Starting point: 

- The element is sticky from the beginning.
- It becomes sticky when it reaches the top -or another element that is already stuck on the top.

Ending point:

- The element doesn’t cease being sticky.
- The sticky element has an ending point: when it reaches another element, e.g. the footer.                         

In case the element is stuck to the bottom of the page it is recommended to keep the element sticky all the time.

![In this image there are two elements that behave as sticky since the beginning. A third one gets stuck at a certain point.](https://d2mxuefqeaa7sj.cloudfront.net/s_6F3D481BC5DD773DB4C5B4380B80B6FA6A01D8D3A28455075D6877239380F8AA_1538565384311_Sticky+Type+2.gif)

### C) Parent element

The element can be:

- Stuck to the screen or 
- Stuck to the content container. 

![Navigation on top is stuck on top of the content container while the buttons are stuck at the bottom of the page.](https://d2mxuefqeaa7sj.cloudfront.net/s_6F3D481BC5DD773DB4C5B4380B80B6FA6A01D8D3A28455075D6877239380F8AA_1538565408954_Sticky+Type+3.gif)

## Behavior

When this sticky behavior is applied to a component, we should inform how it behaves in the following circumstances.

### Different resolutions

Is the behavior applied equally at all resolutions or is there any difference? 
It is possible to make a component sticky for mobile and leave it scrollable for desktop.
See information about breakpoints in [Basic Styles](https://paper.dropbox.com/doc/Basic-Styles--AMLCp5gOYAz3ydT6sg3YeSWqAg-0ko2wfsTt1JOQHV6G8cwo).

### Various sticky components

Do we have several components being sticked to top or bottom at the same time?
We should then indicate the order for each of them. Take into account that sticky elements behave as stacked, this means than when one disappears, the following will take its place.

## Motion

By default, sticky elements with transitions, appears with a position transition (**Show - 1s ease in)** and is hidden with a position transition (**Hide - 1s ease out).**
You can customize the transition and the fade from 0ms to the time you need.

## Contents

Being a behavior applied to components it can be contained by icons, images, text, etc.

## Responsive

Nothing applies here

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable: make sure that if there is any interactive element in the sticky area it can still receive focus.
10. Clickable area should be sufficient: make sure tappable area size is still adequate when using sticky behavior.
13. Errors should be prevented: avoid overlapping tappable areas while an interactive element on a sticky component appears over another interactive element on the back providing enough whitespace around them. This can be done placing the interactive elements in a container.
14. Content should be able to increase in size: check that the sticky element does not break when resized on the browser.
15. Content should have enough contrast to its background: make sure the sticky element is easily interpreted as another layer when it appears over the page, otherwise users could have problems to perceive the contents and the interaction.

Apart from the accessibility principles we would recommend the following best practices:

- Avoid jumpy sticky elements using transitions and well constructed behaviors.
- Make sure the element is always available and findable for the user.
- Avoid several scrolls working at the same time, because it makes more difficult the interaction.

## Links

- Zeplin: https://zpl.io/aw1BzPM

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
