# SUI - Cards
*A card is a flexible and extensible container, organized in a structure that is repeated more than once, that gives information about a product/client/article and serves as an entry point for more detailed* *information.*

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @Cristina P, @Joan M |

To be considered a Card Component, it must meet 3 conditions:

1. It has 1 or 2 areas max (see “structure”). 
2. To have a structure that is repeated more than once.
3. It has to explain and redirect to an specific page: product/client/article.

## Structure

The card is structured in two main areas: 

1. **Media content:** as an illustration, photograph or images slider. (optional)
2. **Info content** related to the product/client/article. (mandatory) 
    
If there is no media, info content area must have two elements. 
For instance: Title + short description, or short description + call to action button, etc. 

**To see all elements possibilities within the card please check out contents section below.**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2FC2FEDA4D8EE83C8E4AC235EE1D1602E4B2353E2B16015CAF86AA1E5799D07A_1517573560242_Captura+de+pantalla+2018-02-02+a+las+13.12.14.png)

## Examples of what is a card and what is not a card 

These are considered a card:

1. It has 1 or 2 areas max ✔
2. It is repeated more than once. ✔
3. It links to a specific product/client/article page. ✔

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2FC2FEDA4D8EE83C8E4AC235EE1D1602E4B2353E2B16015CAF86AA1E5799D07A_1506667674231_Captura+de+pantalla+2017-09-28+a+las+16.26.04.png)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_8995AEE7A2BC8A31A45AEB5B724EBBD1070DE7530248876FED4A66CB10DECC88_1508497030642_Captura+de+pantalla+2017-10-20+a+las+12.56.52.png)

These are **not** considered a card:

1. It contains 2 or more blocks of information ✔
2. It is repeated more than once. ✔
****3. **It DOES NOT links to a specific product/client/article** **page**. (In this case it redirects you to some general pages) ✗

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2FC2FEDA4D8EE83C8E4AC235EE1D1602E4B2353E2B16015CAF86AA1E5799D07A_1506684177658_Captura+de+pantalla+2017-09-29+a+las+13.22.15.png)

## Behavior

**A card will always expand to the 100% of its container or layout**. Hence the “horizontal” or the “vertical” view (see “responsive”):

![examples of cards for motor](https://d2mxuefqeaa7sj.cloudfront.net/s_54347A4FF5BCB4E706A3A95FE75E34EE59D4D0F58880644FC4F0E042CE21DE0E_1520588586185_Captura+de+pantalla+2018-03-09+a+les+10.42.50.png)

### Primary and secondary actions

It is possible to have a primary action and also some secondary actions.
The cards itself can work as a linkable area to the primary action. Primary and secondary actions will be established including other elements/components such as: buttons, links, clickable areas… This decision has to be defined by the product team when integrating the card.

### Focus

Standard focus provided by browser will be used in the card also. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2FC2FEDA4D8EE83C8E4AC235EE1D1602E4B2353E2B16015CAF86AA1E5799D07A_1516179405503_Captura+de+pantalla+2018-01-17+a+las+9.55.43.png)

Keyboard **“TAB”** should change focus to next focusable element.

The order of priorities of the focus, in the internal elements of the card, will be decided by the vertical when the card is built.

### Extra visibility

If a card needs to be more visible, a different background color will be added. **This highlight color will be defined by each vertical.**

![example of visibility in motor vertical using color yellow](https://d2mxuefqeaa7sj.cloudfront.net/s_54347A4FF5BCB4E706A3A95FE75E34EE59D4D0F58880644FC4F0E042CE21DE0E_1514385308798_Captura+de+pantalla+2017-12-27+a+les+15.34.47.png)

### Skeleton

As a card is a container of components, **the skeleton will be defined by its content** for the first version. For example, if the card has a media content, the image placeholder or media gallery will have the loading behavior described in their definition.
 
## Types

There is only one type of card that is so flexible in content that can be used to build any possible card needed.

The order of elements inside the card will keep the same in horizontal and vertical views of the card as we assume the importance of the element for the user is the same no matter the view.

## Visual

![](https://d2mxuefqeaa7sj.cloudfront.net/s_54347A4FF5BCB4E706A3A95FE75E34EE59D4D0F58880644FC4F0E042CE21DE0E_1520588996700_Captura+de+pantalla+2018-03-09+a+les+10.49.12.png)

## Responsive

**Each vertical will decide in which** [**breakpoint**](https://paper.dropbox.com/doc/SUI-Breakpoints--AOOfpSeDD3k2KUKs0LVz_75qAg-seYN3kSKY1ZNEOV527lnn) **the view will change from horizontal to vertical.**


### Horizontal view

In the horizontal view, “media content” (if needed) will be NEXT TO the “Info Content”. Media Content size will be defined by each vertical.
- **Media content width** will be defined by each vertical and it can be in px (fixed width) or in percentage (fluid width). 
- **Media content height** will be defined by the image aspect ratio.
- **Info content width** will be adapt to the remaining space.
- **Info content height** will be the same as media content height.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_54347A4FF5BCB4E706A3A95FE75E34EE59D4D0F58880644FC4F0E042CE21DE0E_1520587863181_Captura+de+pantalla+2018-03-09+a+les+10.30.36.png)

### Vertical view

In the vertical view, “media content” (if needed) will be BELOW the “Info Content”.
- **Media content width** will grow to be 100% width of its container.
- **Media content height** will be resized to fit image aspect ratio without cropping.
- **Info content width** will be the same as media content width
- **Info content height** will be defined by its inner content and inner components.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_54347A4FF5BCB4E706A3A95FE75E34EE59D4D0F58880644FC4F0E042CE21DE0E_1520589003956_Captura+de+pantalla+2018-03-09+a+les+10.49.22.png)

We recommend using the vertical view of the card for mobile devices and the horizontal view for wider screens, but it is not mandatory.

A card must maintain coherence of information in different resolutions but it is possible to make some adjustments to the elements in their mobile version: adding an ellipsis (…) to shorten a text element or masking an image.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
3. Focus should be visible
4. Heading structure should be consistent (important for voice over support tools)
15. Content should have enough contrast to its background

Extra: The use of microformats is highly recommended. E.g http://microformats.org/wiki/hcard

## Links

Include useful links here (Zeplin, Tokens, Other components, etc).

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
