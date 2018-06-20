# SUI - Buttons

_The buttons act as a guide for the user, focusing their attention to show them what they need to do at each moment. They contain information on what will happen when the user presses them. There is a button for each context. Here we explain how to use them correctly._

## Definition metadata

| Status of definition      | Complete                                          |
| ------------------------- | ------------------------------------------------- |
| Definition version number | 1.2                                               |
| Category                  | Atom                                              |
| Changelog last update     | 07/10/2017 (see details at the Changelog section) |
| Owners                    | UX @Julia C , UI @Chris J , FE @David A           |

# Structure

They may have:

* Container: it’s mandatory, although in some cases it may not be visible.
* Text content: it’s common but not always mandatory.
* Icon content: optional.

# Types

The buttons have been built based on 3 styles. Through them, you can build more casuistic as the "accent button" in this guide we represent it as a primary button, or through the secondary button that can be built with fill background or ghost (transparent bg).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957597560_0.1-all-buttons-medium.png)

## Primary

This marks the main, most relevant action to perform on each page. There is only one per page, unless you repeat a primary action on this page. You cannot use two primary actions on the same level; you have to prioritise.
If the action is for this purpose, you can choose a style different to the Primary if it is an action that requires an Accent colour.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957621490_1-btn-primary.png)

## Secondary

This is an additional option to the primary action, or an optional exit for the user. You can use it by itself or with a primary or tertiary action. You can use it with other secondary options.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957631336_2-btn-secondary.png)

## Tertiary

This option is similar to a link, but it behaves like a button. It is hierarchically superior to a link, and is differentiated from these by having capital letters. You should always use it with a primary or secondary action.
And remember, this option should be the last one you use in terms of buttons.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957641956_3.1-btn-terciary.png)

## Accent color

In some cases, you will need to use a button with an accent colour that has a specific meaning, for example: purchase button, primary action of the page, etc.

The colour of this button will be defined in each brand’s Style Guide. You must never use more than 1 accent colour at the same time.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957651867_4.1-btn-accent.png)

# Sizes

On InfoJobs we have three sizes of button to show the hierarchy of each action. Although the size is not important, you do have to know how to use the buttons correctly.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957693879_5.1-btn-sizes.png)

## Small

This button should be used less often, as the default button size you should use is Regular.
This button size does not comply with the accessibility recommendation, and it is therefore only used in exceptional situations in which a regular button size would have a negative impact on the user experience.

## Medium (default)

This is the size that is used by default for all the actions, whether primary, secondary or tertiary. Its type will be decided based on the importance or hierarchy of the action (primary, secondary, etc.).

## Large

The use of a larger button may be considered on landing pages where there are capture and marketing objectives.

# Behaviour

The width of the button is normally dependent on the text it contains as well as the defined interior margins.

There are three statuses for the buttons: resting, hover/active and deactivated.

Occasionally, you may use a full-width button whose width will be 100% of the container in which it is placed. For example, 3 of the 12 columns of our grid.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1507017551547_5.3-btn-behavior.png)

# Content

## Icons

Icons on buttons highlight the meaning of the action and speed up recognition. You can add an icon to the button to highlight the action, but use them sparingly so as not to overload the page. When you do use them, bear in mind that the size of icon is related to the size of the button. (small, default and big).

The icons may be placed to the left or to the right of the copy, depending on each case.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957704205_5.2-btn-sizes-icon.png)

## Copy

We recommend including reduced and simple to understand copy that includes the action to be performed. Because the button width (padding) adapts to the content, if the content is long and the button is too large, we recommend reviewing the content and reworking it.

# Visual

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1510071120113_7.1-btn-visual-sizes.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1510059048852_7.2-btn-visual-touchable.png)

All disabled buttons are the "Normal" state with an opacity 0.3

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1510059062011_7.3-btn-visual-disabled.png)

# Responsive

Depending on the type of action, a responsive button may have the same width as on the desktop version, adapt its width to that of the container in which it is placed, or be placed as a sticky full-width button at the bottom of the screen.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957913594_6.1-btn-responsive.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1507017593773_6.2-btn-responsive-full-width.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1507017600251_6.3-btn-responsive-sticky.png)

# Accessibility

This component should support all the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://confluence.schibsted.io/pages/viewpage.action?pageId=51259903).

For buttons it is recommended to pay special attention to the following recommendations:

## Every interactive element should be focusable

To facilitate interaction through keyboard it is necessary to ensure that every control is focusable, responds to the interaction just been made and focus does not get caught.
Following this recommendation will benefit users accessing through keyboard or pushbuttons

## Focus order should match visual order

The focus that must be able to receive all the interactive elements, should follow whenever possible, the same order as in the visual presentation.
If an individual prefers using the keyboard to interact with a website should be provided with a coherent interaction to what is displayed on screen.

## Focus should be visible

When an element receives focus it is necessary to highlight its difference using a standard display, as a blue border, to make it easy to be recognised.
A keyboard user needs to detect where the focus is in order to interact with the page.

## Interactive elements and images should be correctly labelled

A button, besides indicating that is a button, must indicate the function is going to execute. An image, when not decorative, must detail its content.
A person using a screen reader might not interact correctly with the site or application without those indicators.

## Interactive elements should be differentiated from content

For the interaction to be intuitive it is necessary to reduce the effort needed to detect interactive elements. Its presentation should not be based on color and be displayed only on hover state.
A cognitive disabled person would have less interaction difficulties if links and actions are differentiated.

## Clickable area should be sufficient

A minimum 40 x 40 pixels area is recommended to ensure a comfortable interaction no matter the device.
Users in motion or those with motor disabilities will benefit from an easier way of reaching an interactive element.

## Content should have enough contrast to its background

For the information to be read easily, it is important to respect the necessary contrast. It is recommended to follow the WCAG AA guidelines which indicate the sufficient level of contrast.
Following this recommendation will allow visually impaired users to consume the information.

# Links

## SUI

https://zpl.io/bee5AYb

## InfoJobs

https://zpl.io/bJO5e0x

## Fotocasa:

Paste link here.

## Coches:

Paste link here.

# Changelog

Here we will detail the changes, improvements or additions that we include in this documentation in future versions.

## Version 1.2

* Types: Added button icon right, button only with icon, button only with one letter.
* Visual: Small Button change horizontal paddings to 8px.
* Visual: Added visual of the disabled buttons state.
