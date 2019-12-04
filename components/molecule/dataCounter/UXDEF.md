# SUI - Data counter
*Data counter is an input type number controller we can use to increase (+1) or decrease (-1) the value of such input.* 

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @cristina.perez, FE @antonio.ruiz|

**Recommendations:**
Take in consideration the next recommendation when the user must select between different options inside a range:

- Use [Radio button](https://paper.dropbox.com/doc/SUI-Checkbox-Radio-button--AQqbY2r0t_MgG5RI3M9qGWLFAg-tmVSbtoe8nZTaZk9mkdsE) when there are 2 to 5 options
- Use **Data Counter** when there are 5 to 99 options ****(numbers)
- Use [Slider](https://paper.dropbox.com/doc/SUI-Slider--AQrmpIMeYmY2P1q1nQr~vOifAg-gPOtnVwgn8SUMDTjFTZ2q) when there is a big range of options. From 10 to 999 (like 10-20-30-50…)


## Structure

Data counter is formed by one [label](https://paper.dropbox.com/doc/SUI-Label--ANFTJOijgRQq2Cz51OLPiSbKAg-px3mcUaTHVqlGngk2JNPT), one [input field](https://paper.dropbox.com/doc/SUI-Input-field-WIP--ANHZA9Ohz_~G_P4qyATiXvCfAg-03mHJFkOCjviSZevsaTwm) and two [buttons](https://paper.dropbox.com/doc/SUI-Buttons--ANHN_5l7qgiE53lSHxlmFuqeAg-AvdtvjMAqbsFkTYSz3egT).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7F9E84510E7946C1626EF494D2BF564E124C5FFBAA13F03601E5C1A95BDDE3CD_1539184289392_Captura+de+pantalla+2018-10-10+a+las+17.11.15.png)

## Behavior

Data counter has two buttons with different actions: 

- The one on the left side of the input field **decreases its value by 1** (-1).
- The one on the right side of the input **increases its value by 1** (+1)

Input field value **can also be changed by the user using the keyboard** so Input field must receive focus as well as the buttons, but **only number values are allowed.** 

**Minimum and maximum values will be declared by each marketplace** but it has to be a **maximum two character value.** 

**Maximum value** should be communicate with an specific **Help text** that give feedback to the user. In the other hand, the **Increase button** must be disabled at same time.


### States

Data counter has **3 basic states**: **default, focused and disabled**. The style of the states will be determined in each component used in this molecule.


### Error notification

In case the user tries to **introduce an invalid value we will show him a** [**Help text**](https://paper.dropbox.com/doc/SUI-HelpText--ANo2OYbwMilwHLBRiOkgHIaEAg-RZpyYPWRNVPzdC9fVrCtc) **to communicate the error.** See [Help text documentation](https://paper.dropbox.com/doc/SUI-HelpText--ANo2OYbwMilwHLBRiOkgHIaEAg-RZpyYPWRNVPzdC9fVrCtc) for more info.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_4E055B006E2003E99EBFCAA4981C117DA2AF77BE27A0A6FFEEEF03B81D564C62_1540560770927_data-counter-behavior.png)

## Contents
- Label has to respect all label requirements ([see definition](https://paper.dropbox.com/doc/SUI-Label--ANFTJOijgRQq2Cz51OLPiSbKAg-px3mcUaTHVqlGngk2JNPT)).
- Input field is a **fixed input type**. The length it is calculated adding a fix margin to the left & right side of the content. The minimum and maximum value of the input will be decided by each vertical. **Both medium or small input sizes can be used.** Check [input field definition](https://paper.dropbox.com/doc/SUI-Input-field-WIP--ANHZA9Ohz_~G_P4qyATiXvCfAg-03mHJFkOCjviSZevsaTwm) for details.
- Buttons have to respect all button requirements ([see definition](https://paper.dropbox.com/doc/SUI-Buttons--ANHN_5l7qgiE53lSHxlmFuqeAg-AvdtvjMAqbsFkTYSz3egT)) and **any size can be used but its height always has to match the input’s height.**

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7F9E84510E7946C1626EF494D2BF564E124C5FFBAA13F03601E5C1A95BDDE3CD_1537286302299_Captura+de+pantalla+2018-09-18+a+las+17.58.02.png)

## Visual
![](https://d2mxuefqeaa7sj.cloudfront.net/s_7F9E84510E7946C1626EF494D2BF564E124C5FFBAA13F03601E5C1A95BDDE3CD_1539184111397_Captura+de+pantalla+2018-10-10+a+las+17.08.18.png)

## Responsive

This component does not change no matter the device resolution.

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

10. Clickable area should be sufficient
12. Controls should be correctly labelled

## Links

- Zeplin: https://zpl.io/bz1Lw77

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
