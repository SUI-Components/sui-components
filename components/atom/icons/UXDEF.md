# SUI - Icons
Icons System are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics.

SUI Icons is based on material by google, any vertical can custom with their external library, following the rules below.

|   Status          | Ready for Dev |
|   :----           |   :---- |
|   Current version |   2.0|
|   Category        |   Atom |
|   Owners          |   UX @xavier t, UI @xavier t ,FE @xavier t,UX @Nilo M |

## Structure

### Code

The base icon is square, 24px, no security areas (margin or paddings)

### Sketch

- Artboard (view-box): 24x24px with transparent background
- Icon: Black, always as a shape/path (never a stroke)

## Sizes

The icon will increase in size from the 24x24px base grid, being based on path (never as stroke), hence the width of the lines will also scale proportionally. 

Available sizes:

- **S**: 16x16px
- **M** **(Base)**: 24x24px
- **L**: 32x32px
- **XL**: 40x40px

*Note: We recommend using an illustration for icons bigger than 40px.*

## Exporting icons for SUI

All the components in SUI will require you to provide an icon for your brand. 

By default, and for the SUI Studio preview, the components will use “Google Material” icons. This means that you have to provide the correct icon of your brand for each of the components.

Please make sure you follow this rules:

- All sizes scale from the original 24*24px base icon. This means that you can’t have more than one icon “weight” version for the same component in different sizes. 
- You can’t use more than 1 color at the same time per icon. Icons are mono-color (any colour defined for icons)
- The SVG must be as *clean* as possible (no class name, no fill, etc)
- Export your icons from Sketch as SVG
- Extremely recommended: Open that SVG with [IconJar](https://geticonjar.com/) and export it again. We did many tests, and iconjar exports the cleanest version compared to Sketch and the Default iconography from Streamline. If you have a preferred way to clean your icons, you can still use it.
- Open the final SVG with your favourite code editor (Sublime for instance) and remove the “fill” in any.

## Design best practices

### Layout

We recommend to keep a security space of 1-2px around the design area, but is not mandatory.
The 24x24px grid will help us to align and balance visual weights during the icon design process.

<img src="https://paper-attachments.dropbox.com/s_49DFE4B28BDD16AC1574A8D7328B9262D32E8994B729BF91B771CBA295ABAAC2_1555421324271_Captura+de+pantalla+2019-04-16+a+las+15.28.32.png" alt="Icon layout" height="300" width="auto"/> <img src="https://paper-attachments.dropbox.com/s_49DFE4B28BDD16AC1574A8D7328B9262D32E8994B729BF91B771CBA295ABAAC2_1555421170663_Captura+de+pantalla+2019-04-16+a+las+15.26.01.png" alt="Safety Space" height="300" width="auto"/>

### Clarity (Pixel perfection)

If you want to create a new icon you should follow a certain rules to make it clear and optimum to render, draw vector nodes into absolute pixel coordinates (not decimal) as far as possible, 

<img src="https://paper-attachments.dropbox.com/s_117C35B508A4CECBE8010C58579E54098DAB9E14AA9DC7E246A01207C5147FB1_1526477199658_Captura+de+pantalla+2018-05-16+a+las+15.26.09.png" height="auto" width="300"/>

<img src="https://paper-attachments.dropbox.com/s_117C35B508A4CECBE8010C58579E54098DAB9E14AA9DC7E246A01207C5147FB1_1526477186576_Captura+de+pantalla+2018-05-16+a+las+15.25.51.png" height="auto" width="300"/>

As an exception you have to set or align the icon within the artboard in this kind of cases please use 0.25px movements.

<img src="https://paper-attachments.dropbox.com/s_49DFE4B28BDD16AC1574A8D7328B9262D32E8994B729BF91B771CBA295ABAAC2_1555585879963_Captura+de+pantalla+2019-04-18+a+las+13.11.09.png"/>

### Anatomy - Stroke & Fill

All icons are finally based on path vector form, it should be as optimized as possible with a unique final shape/path with no extra groups or shapes.
Take into account to use as minimum vector as possible to reduce complexity in the final exports.

**Attention to weight stroke styles**

**Light**: It must contain a path made from a 1px stroke width.

**Regular**: It must contain a path made from a 1,5px stroke width.

**Bold**: It must contain a path made from a 2px stroke width.

<img src="https://paper-attachments.dropbox.com/s_49DFE4B28BDD16AC1574A8D7328B9262D32E8994B729BF91B771CBA295ABAAC2_1555590622182_Captura+de+pantalla+2019-04-18+a+las+14.30.04.png"/>

**Note**

As you may notice design can be slightly different, between weights collections. If you design your icons in a 24x24 grid with 1px stroke weight, in 16px scale the stroke width changes to 0.75 and the icons will have a very light visualisation.

### Stroke terminals

Streamline icon set uses a rounded stroke style and the ends of the lines, but is not a mandatory rule is you override with another icon set.

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_117C35B508A4CECBE8010C58579E54098DAB9E14AA9DC7E246A01207C5147FB1_1526478338929_Captura+de+pantalla+2018-05-16+a+las+15.36.44.png" height="auto" width="300"/> <img src="https://d2mxuefqeaa7sj.cloudfront.net/s_117C35B508A4CECBE8010C58579E54098DAB9E14AA9DC7E246A01207C5147FB1_1526478324810_Captura+de+pantalla+2018-05-16+a+las+15.37.14.png" height="auto" width="300"/>

### Color

By default the icon color is black but you can choose from a defined color set based on your [color definition](https://paper.dropbox.com/doc/SUI-Colors--AbdC~qNyCCes14Fyapq9sg7FAQ-TcHoMYNiXsDTzwdwHFbYT).

**Note:** On the code side, the colour will be applied once per icon. Just one colour is possible.
If you don’t specify the colour, it will be overwritten from its parent container. By this approach most of the cases will be automatically match with the container text color, very convenient for buttons, notifications, etc.

## Links

Include useful links here (Zeplin, Tokens, Other components, etc).

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa: [Stramline Icon Set](https://www.streamlineicons.com/). This specific icon library doesn’t have a security space by default. Some icons need adjustment  within the 24px artboard.
- Habitaclia
- Inmofactory
- Infojobs
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Nothing here yet
