# SUI - Text Area field
T*ext Area is the text field that users fill in with free alphanumeric text. Usually it is used to write medium to long texts, such as answers, long explanations or letters.*

*It should also be noted that Text Area it is a molecule because always is combined with other atoms like Label, Placeholder or HelpText.*

|   Status          | Complete |
|   :----           |   :---- |
|   Current version |   2.0 |
|   Category        |   Molecule |
|   Owners          |   UX @David G , @Daniel P , FE @Julian G|

## Structure

- This component almost always it works with [Label](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT) & [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AK5EFuDlc~Bh5FlpHa9XLyQkAg-IqZya9lRXdMvFm0PkT1Vu) atoms and usually it is combined with other atoms like [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-Validation--ALVgLbb5nsUmflT9ZK8XqyiyAg-RZpyYPWRNVPzdC9fVrCtc) or [Buttons](https://paper.dropbox.com/doc/SUI-Buttons-AvdtvjMAqbsFkTYSz3egT).
- Text Area, by default, have a length that is auto-adjustable to the content written by the user (according to the page grid).
- As an optional feature it can have an “auto-expandable” function at the right bottom corner, to resize it manually. It is recommendable to use the browser’s native one.
- If the text written by the user is longer than the visible area (the box of the text area), then the scroll bar appears.

![Text Area field combined with Label, Placeholder and HelpText atoms.](https://d2mxuefqeaa7sj.cloudfront.net/s_F724CB4956B145AB86D741302E646D775625E0E414E4A1489D81F46EA20C169A_1508925361497_textarea-structure.png)

## Behavior

### States
- TextArea have the 3 basic states: default, focused and disabled.
    - Should be noted that [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AK5EFuDlc~Bh5FlpHa9XLyQkAg-IqZya9lRXdMvFm0PkT1Vu) atom disappear when the Input is on focus status. This behavior helps the user understand that the field is ready to write on it.
- For the first iteration, the focus will be the native browser focus.
![Text area states combined with Label and Placeholder atoms.](https://d2mxuefqeaa7sj.cloudfront.net/s_F724CB4956B145AB86D741302E646D775625E0E414E4A1489D81F46EA20C169A_1508924728145_textarea-behaviors.png)

### Scroll & resize
- There are 2 possibilities of default size. We will measure it by the number of text lines. 
    Options to choose:
    - Short: 5 text lines high
    - Long: 7 text lines high
- Once the user writes more text lines than the lines shown by default, the scroll function will start to work, including the right side scroll bar.
- On the other hand, as seen under Structure, an optional (and recommended) “auto-expandable” function can be added to let the user modify the text area size manually.
- The “auto-expand” can modify the height and length, but it is recommended only to modify the height (for the grid adjustment and to make it easier for the user).

![Here we can see the moment where the “auto-expand” and the scroll function are working.](https://d2mxuefqeaa7sj.cloudfront.net/s_F724CB4956B145AB86D741302E646D775625E0E414E4A1489D81F46EA20C169A_1508925423369_textarea-scroll.png)

## Content

We recommend to always use a [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--ALcBKGls8YGd6z2D3u_cnE8MAg-IqZya9lRXdMvFm0PkT1Vu) atom that indicates what users are being asked.
Remember, Text Area field can be combined with [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-Validation-RZpyYPWRNVPzdC9fVrCtc)

## Visual

Here it is showed only the Input measures. 
To see the margins between Input field and other atoms like [Label](https://paper.dropbox.com/doc/SUI-Label--AMZqSJ24S1u4zxxMfUb4GEpHAg-px3mcUaTHVqlGngk2JNPT), [Placeholder](https://paper.dropbox.com/doc/SUI-Form-placeholder--AMZT19S4CalH3esz_tCA1zpeAg-IqZya9lRXdMvFm0PkT1Vu) or [HelpText](https://paper.dropbox.com/doc/SUI-HelpText-RZpyYPWRNVPzdC9fVrCtc), please check those components.

Remember, the Scrollbar and Resize grabber will be the browser’s default one.

![Text area with Label, Placeholder and HelpText atoms.](https://d2mxuefqeaa7sj.cloudfront.net/s_F724CB4956B145AB86D741302E646D775625E0E414E4A1489D81F46EA20C169A_1518766108295_textarea-visual.png)

## Responsive

- The composition of different inputs can be displayed in a grid position when viewed on a desktop, but it must be displayed in a vertical position when it moves to small screens. 
- The screen size will determine when to change to vertical position display.

Check the [Label](https://paper.dropbox.com/doc/SUI-Label-px3mcUaTHVqlGngk2JNPT) definition to see how it behaves in responsive.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F724CB4956B145AB86D741302E646D775625E0E414E4A1489D81F46EA20C169A_1508926857863_textarea-responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

3. Focus should be visible
6. Information should not be supported only by one sense
8. Content should be written in common language
10. Clickable area should be sufficient
12. Controls should be correctly labelled
13. Errors should be prevented 
15. Content should be able to increase in size
16. Text should always be displayed as text

## Links

- Zeplin: http://zpl.io/a8Em4MX

## Specific notes per vertical

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/29l4Lke
- Milanuncios
- Motor

## Changelog

### Version 1.0

- 22/11/2017 Creation of the atom
- 23/08/2018 Iteration. Now is going more simple to work more freely with other components. (decompose) 
