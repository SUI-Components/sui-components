
# SUI - Buttons

_The buttons act as a guide for the user, focusing their attention to show them what they need to do at each moment. They contain information on what will happen when the user presses them. There is a button for each context. Here we explain how to use them correctly._

## Definition metadata

| Status of definition      | Complete                                          |
| ------------------------- | ------------------------------------------------- |
| Definition version number | 2.0                                               |
| Category                  | Atom                                              |
| Changelog last update     | 19/10/2018 (see details at the Changelog section) |
| Owners                    | UX @Nilo M , UI @Nilo M , FE @David A           |

# Structure

They may have:

* Container: it’s mandatory, although in some cases it may not be visible.
* Text content: it’s common but not always mandatory.
* Icon content: optional.

# Types

The button types are defined in a hierarchy of groups represented in the order below:
ATOM > BUTTONS > **SIZE > STYLE > COLOR > VARIATIONS > STATES**
 (ex.: Atoms / Buttons / **M / Solid / Primary / Icon_Right**

We can see the main collection of variations on the next image:




## Size

We can choose between large, medium and small.

 

| SIZES | USES  |
|--|--|
|  **Large** (Height= 48px) | The use of a larger button may be considered on landing pages where there are capture and marketing objectives. |
| **Medium** (Height= 40px) | This is the size that is used by default for all the actions, whether primary, secondary or tertiary. Its type will be decided based on the importance or hierarchy of the action (primary, secondary, etc.). |
| **Small** (Height= 32px) | This button should be used less often, as the default button size you should use is Regular. This button size does not comply with the accessibility recommendation, and it is therefore only used in exceptional situations in which a regular button size would have a negative impact on the user experience. |


 
 
## Style
Style button define a certain properties of the button based on 4 visual statements:

 - **Solid**, the background is 100% solid color (except white color)  
 - **Outline**, the main property is the combination of white background with a colored outline.
 - **Text**, same space as the rest of buttons, but no background nor outline visible.
 - **Ghost**, as its name suggests, it has outline but without background color.



 ### Solid
This marks the main, most relevant action to perform on each page, mostly because of its significant visual weight.



### Outline

This is an additional option to the primary action, or an optional exit for the user. You can use it by itself or with a primary or tertiary action. You can use it with other secondary options.



### Text

This option is similar to a link, but it behaves like a button. It is hierarchically superior to a link, and is differentiated from these by having capital letters. You should always use it with a primary or secondary action.
And remember, this option should be the last one you use in terms of buttons.

### Ghost
The ghost buttons is usually used above solid or gradient colors, or even images just to see the effect of transparency, is visually more attractive than other common buttons for that reason is recommended for landings, marketing layouts, stylish elements or to highlight specific features, elements or actions  



 ## Color
Not every style (Solid, Outline, Text, Ghost) have all the color applications, this simplify the correct used when we have to differentiate levels of importance between buttons, for example, we don't define an *outlined accent button* because we do already have a most significant one like a *solid primary button*.


 - **Primary** (mandatory). The main color in the brand manual.
 - **Secondary** (optional). The second color in the brand manual (if defined).
 - **Accent** (recommended). The accent color in the brand manual (if defined).
 - **Neutral** (recommended). Is based on the gray scale color definition
 - **Success, Warning, Error** (Optional) For a very specific use cases, ex: Delete account, etc. 


 #### Primary color
This marks the main, most relevant action to perform on each page. There is only one per page, unless you repeat a primary action on this page. You cannot use two primary actions on the same level; you have to prioritize.
If the action is for this purpose, you can choose a style different to the Primary if it is an action that requires an Accent color.

 #### Secondary color
If your Brand manual has secondary color you can use similar to the Primary color but bear in mind that this color is less important, use it in certain occasions just to complement maybe an excess of Primary color.

#### Accent color

In some cases, you will need to use a button with an accent colour that has a specific meaning, for example: purchase button, primary action of the page, etc.

The colour of this button will be defined in each brand’s Style Guide. You must never use more than 1 accent colour at the same time.

#### Neutral color
This gray buttons could be used in any vertical with no brand definition or for system messages like cookies, server messages, etc, in addition it could be use in your site with no problem if you want to make your design more neutral, less colorful, simpler and more minimalist.

#### Success, warning, error color
Sometimes we need to be more obvious or aggressive in ours messages/actions in that cases standard buttons could be not enough, with this color variations we can create the typical *Delete account* button in red or any other exceptional use case scenario. 

#### Negative color
In the case that we need to use certain types of buttons above a solid color most of the standard buttons won't be properly readable, in this case we can build the same button type but in a negative color to give contrast, most of the buttons has no sense making the negative version, try to use another defined button.

# Behaviour

The width of the button is normally dependent on the text it contains as well as the defined interior margins.

There are three statuses for the buttons: resting, hover/pressed and disabled.

Occasionally, you may use a full-width button whose width will be 100% of the container in which it is placed. For example, 3 of the 12 columns of our grid.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1507017551547_5.3-btn-behavior.png)

# Content

## Container
Container could be customized with rounded border from 0 to 100%, by default it will be 2px rounded.

## Icons

Icons on buttons highlight the meaning of the action and speed up recognition. You can add an icon to the button to highlight the action, but use them sparingly so as not to overload the page. When you do use them, bear in mind that the size of icon is related to the size of the button. (small, default and big).

The icons may be placed to the left or to the right of the copy, depending on each case.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5D52398E693A404AE1BAE29B23F4380B46436C5982DB618BD10C9760A2D5FC29_1509957704205_5.2-btn-sizes-icon.png)

## Text
Text style definition must be taken on each vertical from parent CSS font definition, except for the text size witch it will be overridden with 16px (medium/large sizes) and 14px (Small).


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

## Version 2.0

* Redefinition of the documentation based on applications problems and misunderstanding on some buttons.
* Implementation and differentiation between *Ghost* and *Secondary* button (now Outline).
* Better structure definition with hierarchy of groups (SIZE > STYLE > COLOR > VARIATIONS > STATES) and *Negative* variations defined in a better way.
* Visual:  Implementation of scalable sketch symbol full width button, with icon left and right and centered and text length customization.
* Visual: Added visual images of the new structure. 
* Some minor definitions addition.
