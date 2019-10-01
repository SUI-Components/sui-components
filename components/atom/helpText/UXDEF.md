# SUI - HelpText
*Help Text is a feedback that the system gives users to make them clearly understand which information is required or to notify them (after validation) of any errors in the entered data or of whether they were successful.*
*We will use the same type of feedback for the 2 types of system validations: “inline” or "after submission".* 

|   Status          | Complete |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Atom |
|   Owners          |   UX @David G, @Daniel P ,FE @Julian G |

## Structure

This component is based on an informative text that is combined with other atoms such as Input, Text Area, Checkbox and Radio buttons.
It has different typologies according to whether it is Helptext (informative) or Validation. See the typologies below.

## Types

**Information HelpText**
This is used for reporting general information, limits or causes.
It can be a fixed text just to remember some information to the user or it can be a “dynamic” text according to the data entered in the field. 

For example a dynamic characters counter

The color of the Information Feedback must be similar to the regular text on the page. Black or gray scale. It can’t be any other color to don’t be confused with the validation HelpText.

**Validation HelpText**
This is used for indicating whether the entered data is correct. It is provided by using the "Help Text" with a color depending on the validation:

- **Error** = red color
- **Success** = green color

![](https://d2mxuefqeaa7sj.cloudfront.net/s_5CD1E4AFF52E7BBEDCD6B64C9AECFAA81EE0DBEF2B22CAB1AD4E67F81F0B68A2_1521105966678_validation.png)

## Behavior

If the Informative and Validation feedback are combined, the informative one will be kept, and validation will be added as a new row next to the input field (between the input field and the informative help text).

When the Error or Succes feedback is used, the same color is given to the Label ant the  

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2C2D91B22DA0B9C75B2C1B2A02CEE24250D0DA9CA7C42765FC0C6A8FF6E1AB73_1509625437161_inputs-validation2.png)

## Content

The Help Texts & Validation, especially Errors & Successes, must be completely clear to make the user understand what’s wrong or right.

The text must be clear, concise and **short**. 

## Visual

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2C2D91B22DA0B9C75B2C1B2A02CEE24250D0DA9CA7C42765FC0C6A8FF6E1AB73_1509363515793_+helptext-visual.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

16. Text should always be displayed as text

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
- Motor: https://zpl.io/bzn16A3

## Changelog

### Version 1.0

- Creation of the atom 21/11/2017
- Small revisions, improvements and simplifications (David Giménez) 10/09/2018

