# SUI -Progress steps
This component displays progress through a sequence of logical and numbered steps. Displays the steps in order from left to right, or from to bottom and shows the direction of the movement. 

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @daniel.pardo, FE @Norbert G|

## Structure

1. **Progress bar:** Displays how far along the user is in completing the task, including the number of steps required to complete the task, the height of the bar  by default is 4px, but  it can scale in base 8
2. **Current step:** Indicates the current step that the user is working on.
3. **Unvisited:** Shows steps that user has not visited or completed yet. The step and label are more subtle to indicate this.
4. **Visited:** Steps that have already been visited include clickable links, so that users can navigate back to them.
5. **Step description:** Describes as a headline each the  progress steps.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_B02893AA86CE591E4A37E9E07BE08755CBE7653AAB5A94DC5744A835C7640AA9_1539678274988_1-progress+steps-+structure.png)

## Behavior

Progress step requires the user to complete previous steps before proceeding to marked and going to the next. 

In some cases we can go back to a previous step, but never interacting with the progress step itself, as is only indicative and non actionable.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_B02893AA86CE591E4A37E9E07BE08755CBE7653AAB5A94DC5744A835C7640AA9_1539602083792_2-progress+steps-behabiour.png)

## Types

- Horizontal
- Horizontal with icon
- Vertical
- Vertical with icon

![](https://d2mxuefqeaa7sj.cloudfront.net/s_B02893AA86CE591E4A37E9E07BE08755CBE7653AAB5A94DC5744A835C7640AA9_1539602127601_3-progress+steps-+types.png)

## Contents

The **Step description** must be as accurate and short as possible, allowing the user to understand where they are, where they come from and the path ahead in the simplest way.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_B02893AA86CE591E4A37E9E07BE08755CBE7653AAB5A94DC5744A835C7640AA9_1539686708579_6-progress+steps-+dodons.png)

## Visual
![](https://d2mxuefqeaa7sj.cloudfront.net/s_B02893AA86CE591E4A37E9E07BE08755CBE7653AAB5A94DC5744A835C7640AA9_1539602144726_4-progress+steps-+visual.png)

## Responsive

On mobile, only are shown the progress bars and the label of the step active.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_B02893AA86CE591E4A37E9E07BE08755CBE7653AAB5A94DC5744A835C7640AA9_1539602161962_5-progress+steps-responsive.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

3. Focus should be visible
6. Information should not be supported only by one sense
7. Interactive elements and images should be correctly labelled
8. Content should be written in common language
15. Content should have enough contrast to its background 
16. Text should always be displayed as text

## Links

- Zepin: http://zpl.io/a7EmKmK

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
