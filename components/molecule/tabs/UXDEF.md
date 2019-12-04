# SUI - Tabs
*Tabs are used to quickly navigate between views or contents within the same context.*

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @David G, @Chris J, FE @Pablo G|

## Structure

The component Tab consists of a group of clickable areas that are arranged in a row (horizontal tabs) or column (vertical tabs).

Tab labels can be text and text + icon, but never an icon without text. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512469689489_1-Tabs-+Structure.png)

## Behaviour
- There are four statuses for the tabs: resting, hover, active/highlighted and disabled.
- All the horizontal tabs of the tab group share the same height. 
- All the vertical tabs of the tab group share the same width and height. 
- Truncate the text to avoid a second line.
- Highlight the tab corresponding to the visible content.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512469700463_2-Tabs-+Behavior.png)

## Types

### Variants

For the different types of tabs, we contemplate two variants that only change visually the Active tab of the group: 

- **Highlighted:** Apply a underline to the Active tab.
- **Classic:**  Apply a border to the Active tab.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512472837703_3.0-Tabs-+Types+-+Variants.png)


### 5 types of tab groups:

- **Text:** it takes its width from the tabs included. It aligns to the left.
- **Text + Icon:** it also takes its width from the tabs included. It aligns to the left and the icon is entered to the tab width.
- **Text + Icon Full Width:** each contained tab stretches itself in proportion, fitting into the container.
- **Text + Icon Vertical:** it takes its height from the tabs included and have a fixed width. It aligns to the top of the container.
- **Text + number (counter):** The text inherits the maximum width of the tab and can never go to two lines. If necessary, ellipsis would be used to cut the text. Text and number align to the center of the container.

![](https://paper-attachments.dropbox.com/s_55512ECECE08F3FA75184681867B7DD460E93456F81ABF30B0CBA386CF3409DC_1555588949594_3.2-Tabs-+Types.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512470394318_3.1-Tabs-+Types.png)

## Contents

Tab labels should be clear enough to allow the user to identify its content.
Text labels must use short titles.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512989192185_4-Tabs-+Content.png)

## Visual

In responsive the max-width of the tabs are 160px (approx. 15 characters).
In desktop we don't limit the width but we recommend the same width (160px. - approx. 15 characters).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512470946643_6-Tabs-+Visual.png)

## Responsive

A responsive Tab group may have the same width as on the desktop version, adapt its width to that of the container in which it is placed, or be placed as a sticky full-width tab group at the bottom or top of the screen.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512471001447_5.1-Tabs-responsive.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512471006807_5.2-Tabs-responsive.png)

Another possibility is when the Tab width exceeds the screen width, it keep the original tab group width, adding a horizontal scroll.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1512471013828_5.3-Tabs-responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible
![](https://d2mxuefqeaa7sj.cloudfront.net/s_FA49C59704D22EF7244507B568CF179BC47B1B7FAC69FECD4724B479A2DDFFC6_1518181622684_7-Tabs-+focus.png)

7. Interactive elements and images should be correctly labelled
9. Interactive elements should be differentiated from content
10. Clickable area should be sufficient
15. Content should have enough contrast to its background 

## Links

- Zeplin: https://zpl.io/aggE7rN

## Specific notes per vertical

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/an1OxGJ
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Nothing here yet
