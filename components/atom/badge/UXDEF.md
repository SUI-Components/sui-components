# Badges

We use badges to give contextual emphasis to an element on the UI, highlighting information or clarifying a status.

It is important to bear in mind that if they are used in large numbers, they increase the visual noise.

|	Status          | Complete|
|	:----         	|	:---- |
|	Current version	|	1.1 |
|	Category	      |	Atom |
|	Owners        	|	UX @Julia C, @Daniel P, FE @Julian G|

## Structure

- Container: unlike tags, they have a rectangular format. They may be invisible.
- Icon: the icon may be included if it is a small size without a container or if it is a large size.
- Text content: this is obligatory.

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_211C0E1040EFC1A1564818BAAA0FA58066061D173DEB324CF5D68EB3429F4D17_1511353668528_3-badges-structure.png"/>

## Behaviour

- Badges only have 1 status. There is no variation and the user cannot interact with them; they are merely informative.
- They must be as brief as possible and never have multiple lines. Text is limited to 100 characters, with an average of 20 characters.
- If the maximum width is exceeded (240px desktop and mobile), omit part of the text at the end. Compensate the cut off text with the title.
- For mobile devices we do not have the title and there is no alternative for the user to see the complete type. However, the percentage of cut off tags is very low.


<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_A4545F0E8DFB582FD47C828586D36C2FCF6856FF86959E5796F2318E0E0EB511_1507199436754_4-badges-behavior.png"/>

## Types

There are 2 sizes of badges: Small and Large.
Besides, we classify badges in 2 types: With background and without background.

|       | Without background                                                                                               | With background                                                  |
| ----- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Small | line height = 14px<br>container height = 16px<br>side padding = 8px                                              | font size = 12px<br>line height = 14px<br>icons = yes, mandatory |
| Large | font size = 16px<br>line height = 20px<br>icons = yes, optional<br>container height = 24px<br>site padding = 8px | font size = 16px<br>line height = 20px<br>icons = yes, mandatory |

### With background

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_211C0E1040EFC1A1564818BAAA0FA58066061D173DEB324CF5D68EB3429F4D17_1513683877130_1-badges-types.png"/>



### Without background

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_211C0E1040EFC1A1564818BAAA0FA58066061D173DEB324CF5D68EB3429F4D17_1513683886129_2-badges-types.png"/>

## Content

- The text can be accompanied by an icon in some cases: small without background, large with and without background (see table at Types).
- If accepted, the icon can be placed either right side or left side, but not both sides at the same time.


## Visual

The colours that may be used are colours associated with a status: “positive – green”, “neutral – yellow” and “negative – red”. There is also another neutral grey default colour.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

- Content should be able to increase in size 
- Content should have enough contrast to its background

## Links

- Zeplin: https://zpl.io/bJEAJrr

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/brmY405
- Milanuncios
- Motor: https://zpl.io/V1lwQyB

## Changelog

### Version 1.1

*Deleted from de previous version:*

- Types: Without background + Small: font-size = 14px / line height = 16px.

*Added in this version:*

- Types: table of different types with details about text sizes and measurements.
    - We added the case “Without background + Large”. 
    - Text sizes changed. Without background + Small: font-size = 12px / line height = 14px
    - We included details about the use of icons.

- Content: icons are allowed both left and right side, never at the same time.

### Version 1.0

Document created