# SUI - Buttons

The buttons usually act as the main call to action for the users, focusing their attention on what they need to do at each moment.

| Status          | Complete                                                  |
| :-------------- | :-------------------------------------------------------- |
| Current version | 2.0                                                       |
| Category        | Atom                                                      |
| Owners          | @turolopezsanabria, UX @Julia C, UI @Chris J, FE @David A |

## Structure

- **Container:** it’s mandatory, although in some cases it may not be visible (transparent background)
- **Copy/Text:** it’s common but not always mandatory.
- **Icon:** optional.

## Types

- **Solid:** Solid colour no shadow nor border in SUI by default
- **Outline:** White background, \$bdw-s border and border color in SUI by default
- **Flat:** Transparent background, no border in SUI by default

## Style

- **Primary:** Primary colour in SUI by default
- **Secondary:** Secondary colour in SUI by default
- **Tertiary:** Tertiary colour in SUI by default
- **Accent:** Accent colour in SUI by default
- **Neutral:** Grey colour in SUI by default
- **Semantics** Use the semantic colours
  - Success (also known as "Green", or "Positive")
  - Error (also known as "Red", or "Negative")
  - Warning (also known as "Alert")
- **Social-media** Use social media colours by default (new values to add in Tokens)
  - Facebook (also known as "FB")
  - Whatsapp
  - Youtube
  - Twitter
  - Instagram

## Contrast variations

All buttons will be available in negative version as well (to be displayed over dark backgrounds)

## Sizes

- Small: 32px tall (also known as "s", or "sm")
- Medium: 40px tall (also known as "m", or "md")
- Large: 40px tall (also known as "l", or "lg")

## Button widths

The widths of the buttons depend on the text they contain, as well as the defined paddings.

Occasionally, you may use a “full-width" or “wider” button whose width will be 100% of the container in which it is placed, as seen on the examples below

## Content

### Shapes

The buttons will be available in 3 shapes:

- Square
- Rounded (br 4px by default in SUI)
- Circle (br 50%)

Each brand should be able to customise the border-radius per each of the 3 types.

### Icons

Icons on buttons highlight the meaning of the action and speed up recognition.

You can add an icon to the button to highlight the action, but use them sparingly so as not to overload the page.

The icons may be placed either without any text (icon buttons), to the left, or to the right of the text/copy.

### Text

Each vertical should be able to customise the text-styles of their buttons.

## Visuals

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible
4. Interactive elements and images should be correctly labelled
5. Interactive elements should be differentiated from content
6. Clickable area should be sufficient
7. Content should have enough contrast to its background

## Links

- Zeplin:

## Customisable variables

For all the buttons, any vertical should be able to change the following variables:

- Border-radius for the rounded version (square always to 0, rounded always to 50%)
- Box-shadow
- Font-size
- Font-color for all the states (default, active, hover, disabled, etc)
- Background colour for all the states (default, active, hover, disabled, etc)
- Border colour for all the states (default, active, hover, disabled, etc)
- Border-size for all the states (default, active, hover, disabled, etc)
- Lateral paddings: $p-m for small buttons, and $p-l for medium and large buttons by default in SUI

## Specific notes per vertical

### Default values in SUI:

- Border-radius for the rounded version: 4px (it should also be the value of \$bdrs-m in Tokens)
- Box shadow: none for all the styles
- Lateral paddings: $p-m for small buttons, and $p-l for medium and large buttons
- Font-sizes:

  - Small button: \$fz-s (16px)
  - Medium button: \$fz-m (16px)
  - Large button: \$fz-m (16px)

- **Positive buttons**

  - Border size: \$bdw-s
  - Background colours: ("Pure Color" is the colour without changes of lighness or darkness)
    - Solid:
      - Default: Pure Color
      - Active and Hover: Color-L1
      - Disabled: Color-L5
    - Outline:
      - Default: White
      - Active and Hover: Color-L5
      - Disabled: White
    - Flat:
      - Default: Transparent
      - Active and Hover: Color-L5
      - Disabled: Transparent
  - Border colours:

    - Solid:
      - Default: Transparent
      - Active and Hover: Transparent
      - Disabled: Transparent
    - Outline:
      - Default: Pure Color
      - Active and Hover: Pure Color
      - Disabled: Color-L5
    - Flat:
      - Default: Transparent
      - Active and Hover: Transparent
      - Disabled: Transparent

  - Font-colours:

    - Solid:
      - Default: White
      - Active and Hover: White
      - Disabled: White
    - Outline:
      - Default: Pure Color
      - Active and Hover: Color-D1
      - Disabled: Color-D5
    - Flat:
      - Default: Pure Color
      - Active and Hover: Color-D1
      - Disabled: Color-D5

  - Colours for SociaMedia:
    - Facebook: #3b5998
    - Whatsapp: #25D366
    - Youtube: #FF0000
    - Twitter: #1DA1F2
    - Instagram: #833AB4

- **Negative buttons**

  - Background colours: ("Pure Color" is the colour without changes of lighness or darkness)
    - Solid:
      - Default: White
      - Active and Hover: White
      - Disabled: White
    - Outline:
      - Default: Transparent
      - Active and Hover: Transparent
      - Disabled: Transparent
    - Flat:
      - Default: Transparent
      - Active and Hover: Transparent
      - Disabled: Transparent
  - Border colours:

    - Solid:
      - Default: Transparent
      - Active and Hover: Transparent
      - Disabled: Transparent
    - Outline: **Change border size to 2px for hover**
      - Default: White
      - Active and Hover: White
      - Disabled: White
    - Flat:
      - Default: Transparent
      - Active and Hover: Transparent
      - Disabled: Transparent

  - Font-colours:

    - Solid:
      - Default: Pure Color
      - Active and Hover: Color-L1
      - Disabled: Color-D1
    - Outline:
      - Default: White
      - Active and Hover: White
      - Disabled: White
    - Flat:
      - Default: Pure Color
      - Active and Hover: Color-D1
      - Disabled: Color-D5

  - Colours for SociaMedia:
    - Facebook: #3b5998
    - Whatsapp: #25D366
    - Youtube: #FF0000
    - Twitter: #1DA1F2
    - Instagram: #833AB4

### Values for each of the themes:

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

### Version 2.0

Iterated by @turolopezsanabria

- Complete re-definition of buttons
- Split between Shape, Type and Style. From now on, it will be possible to have outline buttons for any Style (primary, secondary, etc)
- Including more Styles: Social, Neutral and Tertiary

### Version 1.3

- Text: customizable text button definition, per vertical and per button size.

### Version 1.2

- Types: Added button icon right, button only with icon, button only with one letter.
- Visual: Small Button change horizontal paddings to 8px.
- Visual: Added visual of the disabled buttons state.
