# SUI - Slider
Sliders are often the UI control of choice for letting users select a value or range from a fixed set of options.

Since* sliders are difficult to manipulate, especially on touch interfaces, we recommend using another type of control when a more precise interaction is needed.

|   Status          | Done |
|   :----           |   :---- |
|   Current version |   1.1|
|   Category        |   Atom |
|   Owners          |   UX @Daniel P  |

**Recomendations:**

- Use a slider only when the precise value won’t matter to the user, but rather only the approximate range. 
- When an exact value it is needed, consider a different UI element that allows users to tap or even type to specify their choice rather than relying on press-and-drag gestures.
- Take in consideration the next recommendation when the user must select between different options inside a range:
    - Use [Radio button](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--AQqbY2r0t_MgG5RI3M9qGWLFAg-tmVSbtoe8nZTaZk9mkdsE) when there are 2 to 5 options
    - Use [Data Counter](https://paper.dropbox.com/doc/SUI-Data-counter--AQoAk39iIIJh2YPkZHAMA0OoAg-TqR9qBw4WRr5l5gNMvvEE) when there are 5 to 99 options (numbers)
    - Use **Slider** when there is a big range of options. From 10 to 999 (like 10-20-30-50…)


## Structure

The component Slider consists of a label, a series of values (text and formatted numbers), one or two controllers and a bar that reflects the value or values selected by the user.

![Slider component working with Label component](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513162700624_1-Structure.png)

## Behavior

When you move the control, it automatically adjusts to the closest value in the range.
While sliding, the numerical value is detailed.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513162710610_2-Behavior.png)

## Types

### Segmented slider

Single controller, segmented sliders allow users to select a specific value between a range. We recommend this type for long numeric values.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513162725131_3-TypeSegmented.png)

### Rank slider

Two controllers, to choose between two ranges of values. One of the controllers is used to define the minimum value, and the other defines the maximum value.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513162734689_4-TypeRank.png)

## Content

Sliders are made using a bar, one or two controllers and a variety of labels, one that describes the function of the slider to the user and a numeric scale. When using it, the slider controllers also show the selected value above or beside the controller.

## Visual
![](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513162743009_6-Visual.png)

## Responsive

When in mobile devices, the slider adjust to the 100% of the container column.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513162756119_5-Responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

6. Information should not be supported only by one sense
12. Controls should be correctly labelled
13. Errors should be prevented 

## Keyboard And Focus

When the user tabulate focus to the slider controller. Arrow keys should operate as follows:

| KEY                   | ACTION                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| Right and Up arrows   | Increase the selected value                                                                      |
| Left and Down arrows  | Decrease the selected value                                                                      |
| Page Up and Page Down | Optionally increase and decrease the value by a set amount (e.g. by 25 on a range from 0 to 100) |

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A415CC54364440916A2F6D72AE018E85A252A57882BF1BF782DEAE063AD7C274_1513605167340_4-Focus.png)

## Links

- Zeplin: https://zpl.io/bPrOrQl

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/2Gp7Jpd
- Milanuncios
- Motor: https://zpl.io/aNo9Dx9 

## Changelog

### Version 1.0

- Nothing here yet