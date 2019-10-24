# SUI - Checkbox & Radio button
*Checkboxes are used when there are lists of options and the user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes* ~~*in*~~*on* *the list, so checking one box doesn't uncheck the others.*
*A stand-alone checkbox is used for a single option that the user can turn on or off.*
*Each vertical can determine whether or not a stand-alone checkbox will be selected by default*


*Radio buttons are used when there is a list of options that mutually exclude each other. In other words, only one option can be selected, automatically deselecting the other preselected options.*

|   Status          | Complete |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @David G, @Chris J, FE |

**Recommendations:**

- Take in consideration the next recommendation when the user must select between different options inside a range:
- Use **Radio button** when there are 2 to 5 options
- Use [Data Counter](https://paper.dropbox.com/doc/SUI-Data-counter--AQoAk39iIIJh2YPkZHAMA0OoAg-TqR9qBw4WRr5l5gNMvvEE) when there are 5 to 99 options (numbers)
- Use [Slider](https://paper.dropbox.com/doc/SUI-Slider--AQrmpIMeYmY2P1q1nQr~vOifAg-gPOtnVwgn8SUMDTjFTZ2q) when there is a big range of options. From 10 to 999 (like 10-20-30-50…)
- If possible, use Radio buttons instead of Select field (drop-down menus). Radio buttons have a lower cognitive load because they make all of the options permanently visible so that users can easily compare them.
- Use checkboxes and radio buttons only to change settings, not as action buttons that make something happen.

## Structure

- Checkbox & Radio button are a combination of 2 elements: Icon + Other element (on which makes the action)*. 
*Examples of other elements: Label, card, image, table’s row…
- Check the [Label definition](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT).
- At least 2 options must be selected for the radio button. If there is only one, then a Checkbox must be used.
- It is extremely important to present all the selection options that go together as group and to clearly separate them from the other groups on the same page.

By default, a group of checkboxes or radio buttons are displayed vertically stacked as a list.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1513244295686_1-+Checks++Radios+-+Structure.png)

However, a group of checkboxes or radio buttons may also be displayed in a horizontal line.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1508756136492_3.2-+Checks++Radios+-+Inline.png)

Remember to check the [Label d](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT)[z](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT)[efinition](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT).

## Behavior

### State

- The Checkbox & Radio buttons have 5 statuses, because the “selected” status is also included, plus this new one when it is “focused”.
- For the first iteration, the focus will be the native Browser focus.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_93C20F5C4F821D493D97CF4844B0A35AACB52F92F3DF8EF54B5B096DF7826CA3_1521029713670_2-+Checks++Radios+-+Behavior.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1508747391991_6-+Checks++Radios+-+Accessibility-Focus.png)

## Content

Preselected options aren’t recommended, especially in Radio Buttons. 
Pre-selection can be used as an exception only in some cases where the information to select isn’t too important or when the system has complementary information to pre-select one option (for example, geolocalization). 

If a checkbox or radio button with an important decision is preselected and the user misses it, the user may move forward with the form with crucial information answered incorrectly.

## Types

### Ad hoc variations

**INFOJOBS**
Sometimes, checkboxes and radio buttons are used that look different. Boxes that need to be selected are missing and they look more like buttons, but the underlying logic corresponds to these elements.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1508922211401_7-+Checks++Radios+-+Custom-Border.png)

**F****OTOCASA** ******&** ******COCHES**
Sometimes, checkboxes and radio buttons are used that look different. The checkbox or radio-button is hidden, and there is an illustration/image instead above its label.

**Coches.net** 
In coches, the status is represented by its opacity.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D3B5B5C5D57AE1F7044D61CC0DB2D581BF776FA3B95F167BA65CBA9A9C1FEB5E_1511524629373_coches_custom_check.png)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_D3B5B5C5D57AE1F7044D61CC0DB2D581BF776FA3B95F167BA65CBA9A9C1FEB5E_1511524629378_coches_custom_check2.png)

**Fotocasa**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1509358615443_Screen+Shot+2017-10-30+at+11.16.34.png)

## Visual

Checkbox & Radio buttons have their height defined by the label’s line-height and they are aligned from the center to the icon.
The margin between each individual Check/Radio~~,~~ displayed vertically, is 16px.

Use standard visual representations. A Checkbox should be a small square that has a checkmark or an X when selected. A Radio button should be a small circle that has a solid circle inside it when selected.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1513244390294_4-+Checks++Radios+-+Visual.png)

## Responsive

Checkbox & Radio buttons can be aligned from horizontal to vertical grids, but the Label position must always be kept on the right side of the icon.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1513244399026_5.1-+Checks++Radios+-+Responsive.png)

If a list label ~~was~~is very extensive, it will be a double line in responsive.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1513244411307_5.2-+Checks++Radios+-+Responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible
6. Information should not be supported only by one sense
7. Interactive elements and images should be correctly labelled
8. Content should be written in common language
10. Clickable area should be sufficient

The active/clickable area has been defined as 24 px (only when it is for text+icon)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_AB52B2C6C0DB1D57A02698635F0FB019833A40B9117403475BB00A35DB916634_1513244425583_6-+Checks++Radios+-+Accessibility-Active+area.png)

12. Controls should be correctly labeled
13. Errors should be prevented 
16. Text should always be displayed as text

## Links

- Benchmark: https://confluence.schibsted.io/display/ST/Benchmark+Form+Elements#
- Form Elements: https://confluence.schibsted.io/display/ST/Benchmark+Form+Elements#
- Zeplin: https://zpl.io/bo0eq9Z

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/2Gp7JGJ
- Milanuncios
- Motor: https://zpl.io/brElMlr

## Changelog

### Version 1.0

- Component creation
