# SUI - Progress bar
A Progress bar is a visual representation of a specified wait time or the current status of a process.

|   Status          | WIP |
|   :----           |   :---- |
|   Current version |   1.1|
|   Category        |   Atom |
|   Owners          |   UX @cristina.perez, FE @david.martin |

## Structure
1. Indicator text (optional)
2. Indicator bar (mandatory)
3. Track bar (mandatory)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_75ACD73C2BE04D16173A5B12A2F9F8D963B684E04335FED176B6DD10087B5024_1532589887378_Captura+de+pantalla+2018-07-26+a+las+9.24.26.png)

## Behavior

### When the progress bar is used as a loader (see type loading)

The indicator bar will animate along the length of the track bar until it reaches the same width (100%).
The indicator text will progressively change to reveal the current state

![](https://d2mxuefqeaa7sj.cloudfront.net/s_75ACD73C2BE04D16173A5B12A2F9F8D963B684E04335FED176B6DD10087B5024_1532604143744_animation100_gif.gif)

### When the progress bar is static (see type static progress status)

The indicator bar will stay still at the point of the track bar to be represented. **This can be achieved using an animation or not** (directly loaded as the final range)

*For example: if we need to represent that a progress is on the 75 of 100, the indicator bar will grow until it reaches the 75% of the track bar width*.

![Animation in this case is optional](https://d2mxuefqeaa7sj.cloudfront.net/s_75ACD73C2BE04D16173A5B12A2F9F8D963B684E04335FED176B6DD10087B5024_1532601817599_animation75_gif.gif)

## Types

### Type loading

Use it to represent a specified wait time of an automatic process. 
**The indicator bar will continue to grow until it reaches 100%**
Animation is mandatory in this type.

*For example: the loading of an image or a page*.

### Type static progress status

Use it to represent the current status of a process that is not automatic.
**The indicator will stop when it reaches a certain percentage.**
Animation is optional in this type.

*For example: to represent the number of products a user/professional has already spent from the total contracted*.

### Type circular

**Size M** It has the label at the center-center of the circle. It can be used to highlight a progress.
**Size S** It has the label on the right side of the circle and it is used like a Badge. 
The circular progress bar can be Dynamic or Static.  

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7574AA0EFD3BD2C5BB44AACCD0DB8CCBD8C60A1C8DB5962E06516CBCB6978CB5_1552385023533_1-progress+bar-+circular.png)

**States**
Loading: Start from “0 circle” and add the [motion bellow](https://paper.dropbox.com/doc/SUI-Progress-bar--AZI5~1kdLiIt3AyZk9JgSOt_Ag-hY8y6hoM93YTA69ZMG95t#:h2=Circular-Motion-(optional)) to show the % (motion optional)
100%: Indicative success state (for “completed process” you can use instead the Success state)
Success: Completed process state (for “indicative state” you can use instead the 100%) For next iteration. [See bellow](https://paper.dropbox.com/doc/SUI-Progress-bar--AZMN1X7fXxpBuesy1t~wXWkCAg-hY8y6hoM93YTA69ZMG95t#:h2=State-Success)
Error: Fail Badge. Opctional. You can hide the circular process bar also if you don’t want to show the error state.   e.g: for indicative circular process bar

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7574AA0EFD3BD2C5BB44AACCD0DB8CCBD8C60A1C8DB5962E06516CBCB6978CB5_1552488635698_4-progress+bar-+circular+-+status.png)

**Circular Motion (optional)**
By default, Circular Progress Bar appears with a **Fade of 250ms** and **the circle fill animation & label counter lasts 1250ms to 100%**
You can customize the fade and the duration from 0ms to the time you need.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7574AA0EFD3BD2C5BB44AACCD0DB8CCBD8C60A1C8DB5962E06516CBCB6978CB5_1552314146791_1-progress+bar-+circular-motion.gif)

## Contents

A progress bar is made using a track bar, an indicator bar and an optional numeric indicator text. **The indicator text can be placed above or below the track bar an can be presented in two ways** **+**
   
![](https://d2mxuefqeaa7sj.cloudfront.net/s_75ACD73C2BE04D16173A5B12A2F9F8D963B684E04335FED176B6DD10087B5024_1535362432734_Captura+de+pantalla+2018-08-27+a+las+11.33.33.png)

## Visual
![](https://d2mxuefqeaa7sj.cloudfront.net/s_75ACD73C2BE04D16173A5B12A2F9F8D963B684E04335FED176B6DD10087B5024_1532603607016_Captura+de+pantalla+2018-07-26+a+las+13.13.07.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7574AA0EFD3BD2C5BB44AACCD0DB8CCBD8C60A1C8DB5962E06516CBCB6978CB5_1552385036781_2-progress+bar-+circular-visual.png)

## Responsive

The bar will adjust to the 100% of the container column in all devices.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

15. Content should have enough contrast to its background
16. Text should always be displayed as text

## Links

- Zeplin lineal: https://zpl.io/aX4X4zP
- Zeplin circular: https://zpl.io/V0qQXlw

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

### Next-up

- **State Success**: Completed process state (for “indicative state” you can use instead the 100%)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_7574AA0EFD3BD2C5BB44AACCD0DB8CCBD8C60A1C8DB5962E06516CBCB6978CB5_1552488648977_4.2-progress+bar-+circular+-+status.png)

### Version 1.2
- Type Circular added

### Version 1.1
- Component definition
