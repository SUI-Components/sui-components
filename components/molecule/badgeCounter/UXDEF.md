# SUI - Badge Counter

*We use badges* *counters* *to* *warn the user of a new content or a status change that needs to be checked.*


|   Status          | Badge counter |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @David G, UI @cristina P, FE @Pablo G |

## Structure

- Container: Bright color circle that contains the text
- Content: In contrast color, may be a number or a symbol (exclamation mark, dot…)

![Visuals 1](https://d2mxuefqeaa7sj.cloudfront.net/s_C78B25A4AC7E859E004A06AA7652AF9E7A1382E5FC00EF614AA594EC3ED01FA4_1539093067100_TYPE+SMALL.png)

![Visuals 2](https://d2mxuefqeaa7sj.cloudfront.net/s_C78B25A4AC7E859E004A06AA7652AF9E7A1382E5FC00EF614AA594EC3ED01FA4_1539093078752_TYPE+MEDIUM.png)

## Behavior

- The Badge Counter appears as long as there are new items to check. It disappears when meeting two different conditions:
- All the new items in the destiny page have been read.
- The destiny page have been visited.
- We recommend choosing the first option when implementing.*
- Badges Counter only have 1 status. There is no variation and the user cannot interact with them; they are merely informative.
- Text is limited to 2 characters. If 3 or more characters are needed, then “+99” should be displayed, and the badge counter radius grows to fit all the characters.
- Badge Counter can also appear with a symbol (like “!” or “·”), to catch the attention of the user on a new content on a specific page.
- Badge Counter can also be empty, with no text or symbol.

## Types

Badge counter is an independent component but generally it will join text or icons.

## A. Text Badge Counter

- Badge Counter accompanies a section menu title, a tab title or a button.
- It’s aligned to the right of the text, horizontally and vertically centered. (see Visuals 1&2)
- Circle grows to the right.


## B. Icon Badge Counter

- Badge Counter accompanies an icon (burger menu, tab…).
- It’s aligned to the top right of the icon (see Visuals 1&2)
- Circle grows to the right.

| Small  | Font size = xxSmall<br> Diametre = 6px |
| ------ | -------------------------------------- |
| Medium | Font size = xxSmall<br>Diametre = 8px  |

## Contents

Badge Counter only admits numbers or symbols, if you need to ad some text, check the [Badge component](https://paper.dropbox.com/doc/SUI-Badges-vG0S7yu1RwJgwYkgT2uKl).


## Visual

![](https://d2mxuefqeaa7sj.cloudfront.net/s_C78B25A4AC7E859E004A06AA7652AF9E7A1382E5FC00EF614AA594EC3ED01FA4_1539091230789_badge+counter.png)

The main color must catch the user’s attention, so red is recommended, as its the most common color used for this component anywhere. The inside text color must have enough contrast.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

14. Content should be able to increase in size 
15. Content should have enough contrast to its background 

## Links

- Zeplin: https://zpl.io/VD4vkWq

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
