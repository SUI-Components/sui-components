# SUI - Thumbnails
*Thumbnails are images that appear on cards, highlights or detail pages. They can be shown in different sizes and appearances. There are basically two variants: logos for company logos and avatars for person images.*

|   Status          | Complete |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @María P, @Daniel P, FE @Adrià V|

## Structure

A thumbnail is composed by:

- An image (mandatory)
- A text that appears over a background below the image (optional).

The text is optional but it only applies when the image has a link, because it serves to clarify its destination. The link is applied to the whole area: both to the image and the text with its background. The text is not shown when the Small and Xsmall sizes are set.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1505387040547_1-Structure.png)

### Integrated in other components

This component can be integrated into cards and other components.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1504248063168_2-Integrated.png)

## Behavior

### Click / Tap

The image can contain a link.

### Upload & Publishing

The image on the marketplace can have a different proportion than the original. If the original is landscape or portrait and the published one has the same height and width the treatment will be the following:

- Scale 100% on the shortest side: 
- if it’s landscape, scale 100% vertically.
- if it’s portrait, scale 100% horizontally.
- Centered both in vertical and horizontal.
- The largest side will be cropped: 
- if it’s landscape, left and right sides will be cropped.
- if it’s portrait, top and bottom will be cropped.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1503476698338_4-upload.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1526294046466_1-behaviour.png)

### Empty

When a thumbnail has not been filled it should show a placeholder with an icon indicating the information that should appear in its place.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1505389870240_7-empty.png)

### Focus

When the component is focused, the focus should be clearly visible.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1504248091960_5-Focus.png)

### Loading

There are two different options that could be applied while the images are being loaded. Progressive loading is recommended over Skeleton.

**Progressive loading**
While the image is being loaded in order to ensure the legibility of the content inside of it we recommend to show a lower version of it, as it is done in Medium:
https://jmperezperez.com/medium-image-progressive-loading-placeholder/

**Skeleton**
If progressive loading is not possible, then a skeleton should be shown while the image is being loaded. The occupied space should be exactly the same to offer a preview of the content and avoid it to bump once it is loaded.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1504248116958_10-Skeleton.png)

### Error

When the images cannot be loaded we will show the alternative text of the image and an icon depicting a unavailable image. Depending on the size of the image we will display both or just one of them:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1508848248133_11-Error.png)

## Types

Thumbnails can appear in different formats.

### Shape

It can be squared or circled. It is recommended to use squared shape for logos and circled shapes for avatars.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1505389908895_8-shape.png)

### Proportions

It can have same height and width (1:1 aspect ratio) or it can be landscape (16:9 or 4:3 aspect ratio).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1504248213171_9-proportions.png)

### Attributes

Thumbnails can have different visual treatments:

- Padding: 3px.
- Border: 1px, color: gray_l3.
- Shadow: set to 0 by default.
## Sizes

Thumbnails are available in 4 different sizes. This sizes will be adapted depending on the screen resolution (more on Responsive).

- Xsmall
- Small
- Medium
- Large
## Text background

If a text is included a background color should appear as well. Enough contrast should be provided to ensure accessibility (more on Accessibility).

## Contents

It is recommended that the optional text is no longer than 1 line of text. 

You can't use a thumbnail as a image panel.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_A42B030072B307E69B102F02C10675853D70D308F4947D0E26EC258A1BBB8B5D_1520597661782_11.1-do-dont.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A42B030072B307E69B102F02C10675853D70D308F4947D0E26EC258A1BBB8B5D_1520597676387_11.2-do-dont.png)



## Responsive

The four different sizes are adapted depending on the screen resolution.

### 1:1 ratio
|        | < 768 pixels |        | ≥ 768 pixels |        |
| ------ | ------------ | ------ | ------------ | ------ |
|        | Width        | Height | Width        | Height |
| Xsmall | 32           | 32     | 40           | 40     |
| Small  | 40           | 40     | 48           | 48     |
| Medium | 72           | 72     | 72           | 72     |
| Large  | 96           | 96     | 144          | 144    |

### 4:3 ratio
|        | < 768 pixels |        | ≥ 768 pixels |        |
| ------ | ------------ | ------ | ------------ | ------ |
|        | Width        | Height | Width        | Height |
| Xsmall | 32           | 24     | 40           | 30     |
| Small  | 40           | 30     | 48           | 36     |
| Medium | 72           | 54     | 72           | 54     |
| Large  | 96           | 72     | 144          | 108    |

### 16:9 ratio
|        | < 768 pixels |        | ≥ 768 pixels |        |
| ------ | ------------ | ------ | ------------ | ------ |
|        | Width        | Height | Width        | Height |
| Xsmall | 32           | 18     | 40           | 23*    |
| Small  | 40           | 23*    | 48           | 27     |
| Medium | 72           | 41*    | 72           | 41*    |
| Large  | 96           | 54     | 144          | 81     |


In these cases height is rounded up.
![](https://d2mxuefqeaa7sj.cloudfront.net/s_688C4F4A8918EE8E02E1F171D09BE3FD300CB042124FE2E9A3000C6EFA62A2D1_1504248163786_6-Responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

7. Interactive elements and images should be correctly labelled

    The image should detail its content. 

14. Content should be able to increase in size 

    When the text is increased the optional text should not break the design of the component.

15. Content should have enough contrast to its background 

    Ensure enough contrast between the text and the image using a background with a proper contrast ratio.
    - Check WCAG 2.0 AA contrast ratios here: https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
    - Use this tool to check contrast ratios for given colors: http://dasplankton.de/ContrastA/

And, if the image contains a link it should follow these recommendations:
1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible
7. Interactive elements and images should be correctly labelled

## Links

- Componente Rubik: http://www.design.infojobs.net/rubik/html/content-media.html
- Demo del componente SUI: https://sui-components.surge.sh/workbench/thumbnail/basic/demo
- Benchmark en IJ: https://confluence.schibsted.io/pages/viewpage.action?pageId=55750576
- Zeplin: https://zpl.io/adRJyzl

## Specific notes per vertical

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/2vy1xMv
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Nothing here yet
