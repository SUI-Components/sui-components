# SUI - Back to Top
A simple way to return back to the top of a long content page.

|   Status          | WIP |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @Irene L, @Chris J |

## Structure

Back to Top consists in a floating element located on the bottom right corner of the page and with a [z-index](https://paper.dropbox.com/doc/z-index-WIP--AMqq1DAVVk5QOOeNOojmYuRrAg-4QvLsXUoWXeWNDiQSzCBc) position.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2B6461E0A5AACA052E49BE35E96B0E3C48FC369AADACF7054C77A66FA69B339E_1536830620353_1-+Back+to+Top+-+Structure.png)

## Behavior

Back to Top shows up when the user scrolls down beyond 50% of the visible part of the page and disappears when the user reaches that same limit.
When the user clicks or taps on the Back to Top, the page scrolls to the top of the page and the Back to Top disappears.


## Types

Back to Top has two **contrast variations** and three **content options** that can be combined as needed.

**Contrast variations** in order to keep an optimal recognition:

- For light background pages, use a a dark background Back to Top.
- For dark background pages, use a light background Back to Top.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2B6461E0A5AACA052E49BE35E96B0E3C48FC369AADACF7054C77A66FA69B339E_1536830638907_2.1-+Back+to+Top+-+Types+-+Contrast.png)

**Content options** in order to adapt to different needs and device contexts:

- Icon (up arrow) + text label.
- Only icon (up arrow).
- Only text label.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2B6461E0A5AACA052E49BE35E96B0E3C48FC369AADACF7054C77A66FA69B339E_1536830649012_2.2-+Back+to+Top+-+Types+-+Content.png)

## Contents

- The icon should always be an arrow pointing up.
- The text label should be short and brief, preferably one word (Top, Up, Subir, Ir arriba, etc.)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2B6461E0A5AACA052E49BE35E96B0E3C48FC369AADACF7054C77A66FA69B339E_1536847244254_3-+Back+to+Top+-+Content.png)

## Visual

Visuals should be custom on each vertical. This specs are for a SUi white label design:

FONT
font-size: #fs-m (font-size:16px & line-height:20px) 

ICON
size: #m 

COLORS DARK CONTRAST
background $bgc-gray-d2 
font $c-white 

COLORS LIGHT CONTRAST
background $c-white 
font $c-primary 

OPACITY
rest: 80 
hover/active: 100 

BORDER RADIUS
2px 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2B6461E0A5AACA052E49BE35E96B0E3C48FC369AADACF7054C77A66FA69B339E_1536831684577_4-+Back+to+Top+-+Visual+v2.png)

## Responsive

For the mobile breakpoint, it is recommended to use the only icon option.

## Motion

By default, Back to top appears with a delay (**Show - 250ms ease in)** and is hidden with a delay **Hide - 250ms ease out** and a **Fade of 250ms**
You can customize the delay and the fade from 0ms to the time you need.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2B6461E0A5AACA052E49BE35E96B0E3C48FC369AADACF7054C77A66FA69B339E_1536846307691_5-+Back+to+Top+-+Motion.gif)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible: Information should not be supported only by one sense
8. Content should be written in common language
9. Interactive elements should be differentiated from content
10. Clickable area should be sufficient
14. Content should be able to increase in size 
15. Content should have enough contrast to its background 
16. Text should always be displayed as text


## Links

- Zeplin: https://zpl.io/VqwNy3N

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

