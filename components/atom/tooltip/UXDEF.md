# SUI - Tooltip
A popup is used to explain a function or add more information of an element. Tooltip is displayed when users hover over, focus on or click an element. 

Tooltip can be used instead of the html title attribute. It does support also complex text, buttons, images or actions, but we recommend always to simplify as much as possible. 

|   Status          | Done |
|   :----           |   :---- |
|   Current version |   1.1|
|   Category        |   Atom |
|   Owners          |   UX @Chris J, FE @Julian G |

## Structure

Tooltip consists of a basic container plus an inside content; optional arrow pointing to the element that we want to focus on.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_9FEA695FE4C37276D15841F1E9F673D6BF140BD14842459C287AFBB3351D57F6_1547663070653_1.1-Tooltip-+Structure.png)

## Behavior

Tooltip has 12 possible positions. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1529316527965_2.1-Tooltip-+Behavior.png)

The position is flexible and will change depending on how close the element is to the edge of the screen.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1529316541073_2.2-Tooltip-Behavior.png)

The arrow always point to the center of the element.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1529316604316_2.3-Tooltip-Behavior.png)

There are 3 visualization options: Visible, Click and Hover,
In addition the tooltip can become active if we stay hover over it or not, by default it will depend on the mouse event, but it can be custom.

- **Click**: by default it will remain shown over it.
- **Hover**: by default it will disappear when leave the element.
- **Visible:** by default is visible, optionally can show a close button/icon.
# Types

The Tooltip can be used without arrow. (Be consistent with your brand guideline).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1529316633784_3.2-Tooltip-+Types+-+Variants.png)

The size of the container can be defined for each vertical depend on the page position it will appears or the amount of content it will get.

There are also two color versions, Normal/Negative (more details in Visual section)

## Contents

It can contain any text, icons, links, buttons, images and “X” icon, however try to brief or use a modal windows for more complex compositions.

## Visual

FONT
font-size: default theme definition, #fs-m could be custom.

COLORS
Tooltip can be on version positive o negative:

PADDINGS
Tooltip can get padding between the content (text, image, buttons…) and the container limits.
There are 2 options:
S:8px
M:16px

ARROW
None: no arrow.
Yes: (peak)Height: 4px /(base)Witdh: 8px

**Normal**(positive):
border: background $gray-l2, 1px
background: $c-white
font: black (default theme definition)

**Negative**:
border: none 
background: $gray-d4
font: $c-white

LIMITATION
We can put any max-width and max-height to fit with the content or image we want to show.
Optionally can truncate text if exceed


![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1536219795304_5.1-Tooltip+-+Visual.png)

## Responsive

The tooltip is displayed through:

- tapping an element and hidden tapping the rest of the screen or when the tooltip is outside the screen or on the X/close button.

Tooltips used to identity an action in mobile (like an icon button) it will be displayed through long press 1 second.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1529316672469_6.1-Tooltip+-+Responsive.png)

## Motion

By default: Tooltip appears without delay (**Show - 0ms**) and is hidden with a short delay (**Hide - 250ms**).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_EAA14B8EE8902AAD93068512758CA7056293B6288F390E399C677CE92D5C6125_1529664849373_7.1-Tooltip-+Animation.gif)

You can customize the Show & Hide delay from 0ms to the time you need.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

6. Information should not be supported only by one sense
14. Content should be able to increase in size 
15. Content should have enough contrast to its background 
16. Text should always be displayed as text

## Links

- Zeplin: https://zpl.io/2GQQojm

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

### Version 1.1

- Adding a positive version (normal) light background / dark font. 
- Removed the max-width and max-height limitations.
- Adding the visualization behavior “on Click” and “Visible” (to show it before any mouse events.)
- Adding any type of elements, text, image, links, icons, images, X buttons, etc…
- Adding 2 options for padding

