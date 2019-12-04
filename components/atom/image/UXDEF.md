# SUI - Image

SUI Image is a container that loads an image inside, but not as a background (in that case is considered a panel with a background image.

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @Cristina P, @Joan M, FE @Julian G |

## Differences between a SUI Image and a panel with a background image

Images and panels with images can be a bit similar in terms of design, but they are very different in terms of use.

To be considered an image:

1. Image should not be used as a background ✔
2. Image should have semantic meaning as an img
3. Image should have an alt description and be correctly labeled and focusable  (see “Accesibility”)✔

If you are using an image as a background for a container with only decorative intentions, please consider using a [*panel with a background image*](https://paper.dropbox.com/doc/SUI-Panel-6xfWMxmr46z47azCEtw37) instead.

## Structure

SUI Image is composed by a container (that loads the image) with a background color, a loading layer, and the final image fully loaded . The image will adapt to its container width and height.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523357550678_Structure.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523357735660_Background.png)

![The loading layer might be a skeleton or a progressive loading depending on the behavior we choose (see Behavior)](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523357615592_Loading+Layer.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523357573273_Content+Layer.png)

## Behavior

There are 3 possibilities for the image loading process:

### A. Progressive loading with background color

The container has a background-color and, while the image is loading, we show a lower quality version of the same image. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523357781959_Progressive+loading+with+background+color.png)


### B. Alternative image while loading / skeleton

While the image is loading, we show a predefined image/skeleton. That means every image with this behavior will have the same loading image. 
Skeleton while loading example: https://dribbble.com/shots/3876346-Skeleton-Loading 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523357807602_skeleton.png)

### C. Background color and spinner while loading

SUI Image has a background color and a spinner while the image is loading. This background color has to be in the subtle grey spectrum, but the exact color will be decided by every vertical.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1523362300298_skeleton+2.png)

### In case of error

When the image cannot be loaded because of an error we show an icon and a label aligned vertically and horizontally to its container. That icon and copy will be decided by each vertical. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_95F23EDD56C476A42622C417D421F10A7B0D29397D7E80CA0AB0048319A85D3B_1524120342420_Case+of+error.png)

## Responsive

The SUI Image as a container adapts to the different breakpoints.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

- Focus should be visible
- Interactive elements and images should be correctly labelled
- Content should have enough contrast to its background

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
- Motor: https://zpl.io/adkPXep

## Changelog

### Version 1.0

- https://drive.google.com/open?id=1OU9uwEvOoxcp54qYVL86weRB_YWFXEaT
