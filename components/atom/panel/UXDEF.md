# SUI - Panel
*A panel is a container* *with an image or a color* *on its background.* 

|   Status          | WIP |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @María P, @Chris J ,FE @Pablo G  |

## Structure

The panel is composed by 3 layers, from bottom to top:

### 1. Background color

It’s mandatory. When using an image panel, to ensure contrast between contents placed inside the container and the background in case the image cannot be loaded. When using a color panel, this is the only layer that will be used. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_3278AA889EB6EF3761C658DB4D18B642A4C9A005CDF1166112DC6843BA667950_1520595038801_1.1-ColorPanel+-+Structure-color.png)


In case of using an image panel, we recommend to use only the background colors: dark (gray_d2) and default (gray_l4) to ensure contrast between the background and the contents in case the image is not loaded.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_3278AA889EB6EF3761C658DB4D18B642A4C9A005CDF1166112DC6843BA667950_1520595047345_1.4-ColorPanel+-+Structure-BackgroundColor.png)

### 2. Background image

It’s optional.

### 3. Color overlay

It’s optional and it’s recommended in case of using an image panel. The opacity can be set to 15%, 25%, 50%, 75% or 100%. The color belongs to the theme, and it will use corporate color, accent color, white or black. In case of placing text inside the container, contrast should be ensured (see chapter Accessibility).


![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1513241452529_1.2-ColorPanel+-+Structure-Alpha.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1506518829769_1-Structure.png)

As a container it can also include other components such as a card (optional). If the color of the text of the card is light, then the background color should be gray dark, and if the color of the text is dark, then the background color should be gray light.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1506519014574_7-Background+colors.png)

### Image panel types

In case of using a background image there are three formats that can be used. Format cropped and format resized can be combined: 

#### A. Cropped

On smaller resolutions the image gets cropped.

#### B. Resized

On smaller resolutions the image gets resized to the size of the container.

#### C. Switched

On smaller resolutions another version of the image, adapted to the size, is used.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1506518836889_2-Types.png)

## Image panel behavior
### Alignment

Images can be aligned both in larger resolution and smaller resolution horizontally and vertically.

Horizontally:

- aligned to the left
- centered
- aligned to the right

Vertically:

- top
- center
- bottom

![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1506518845177_3-Behavior.png)

### Error

When the image cannot be loaded the color of the background will be seen. 


![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1513242168575_5-Error.png)

## Responsive

The image panel as a container adapts to the different breakpoints. 

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

3. Focus should be visible

In case of using an interactive element over a panel, once the focus enters in the element, we should make sure that the focus is visible.

15. Content should have enough contrast to its background

In case of using text over the panel, the contrast should be ensured as shown in the following image.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_ACAC7218EF95D85F5ED6F16B5FB1A99ACDED0A7C1B7F76CDFA1D1CEB7512D7A0_1513242829885_6-Accessibility.png)


## Links

- Benchmark Image Panel: https://confluence.schibsted.io/display/ST/Benchmark+Image+Panel
- Benchmark Color Panel: https://confluence.schibsted.io/display/ST/Benchmark+Color+Panel
- Zeplin: https://zpl.io/aM4AmdR

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/andXYWQ
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Component definition
