# SUI - Tags
*We use tags to visually emphasise features of the UI and make recognition and interaction easier. Their label shape shows users how to interact with them when they search, classify or use a field with multiple selection options.*

*It is important to bear in mind that if they are used in large numbers, they increase the visual noise.*

|   Status          | WIP |
|   :----           |   :---- |
|   Current version |   1.2|
|   Category        |   Atom |
|   Owners          |   UX @Fátima Y, @Daniel P, FE @Julian G  |

## Structure

- Tags consist of text plus a container.
- Tags can include an action icon (generally a close icon). This icon will always be located to the right of content.
- The last tag must not use a new line when there is enough space.
- Tags structure can have 3 main sizes: Small, Medium and Large. Small size has height of 24px, Medium a height of 32px and Large with 40px.

![](https://paper-attachments.dropbox.com/s_A65CA743FD595FCDBF3700E32CFD31368FDF7064ABCB8F79050596FF300FF03F_1554902469155_4-tags-typologies.png)

## Behaviour

- They must be as brief as possible and never have multiple lines. Text is limited to 100 characters, with an average of 20 characters.
- If the maximum width is exceeded (240px desktop and mobile), omit part of the text at the end. Compensate the cut off text with the title.
- For mobile devices we do not have the title and there is no alternative for the user to see the complete type. However, the percentage of cut off tags is very low.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_82CF4A27A42BCF56B20D3E366B94429611DCF03940DE788272CFBA4915B02E18_1507198067008_2-tags-behavior.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_82CF4A27A42BCF56B20D3E366B94429611DCF03940DE788272CFBA4915B02E18_1507198075100_3-tags-behavior.png)

## Types

### Standard Tag

Neutral colour, non-actionable. Only the close icon is clickable, and it has hover status.

**Recommendations:**

- The clickable area of the close icon should be more than **40px**, specially for mobile. (See accesibility content for more information)
- Using Large size tag in mobile is recommended for a better usability.
![](https://paper-attachments.dropbox.com/s_A65CA743FD595FCDBF3700E32CFD31368FDF7064ABCB8F79050596FF300FF03F_1554902452608_4-tags-typologies.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_82CF4A27A42BCF56B20D3E366B94429611DCF03940DE788272CFBA4915B02E18_1502269231530_3.2-tag-behavior-animation.gif)

### Actionable tag

With colour; when you click on it, it takes you to a search result. It must not have a close icon.
It has 2 visual statuses: normal and hover/active.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E1ED28032A9CE66866870BE375B44F69B63620DB655A608979431F109E476943_1511435876745_tags-navigation-types.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_82CF4A27A42BCF56B20D3E366B94429611DCF03940DE788272CFBA4915B02E18_1507198093683_6-tags-navigation.png)

## Content

- Apart from the close icon, the text can be accompanied by an icon.
- The icon can be place either right side or left side, but not both sides at the same time.
- The standard tag with close icon does not accept another icon at the right side.

## Visual

![](https://paper-attachments.dropbox.com/s_A65CA743FD595FCDBF3700E32CFD31368FDF7064ABCB8F79050596FF300FF03F_1554902436315_1-tags-structure.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

- Content should be able to increase in size 
- Content should have enough contrast to its background 
- Every interactive element should be focusable
- Focus order should match visual order
- Focus should be visible
- Interactive elements and images should be correctly labelled
- Interactive elements should be differentiated from content
- Clickable area should be sufficient

## Links

- Zeplin: https://zpl.io/bew0EQm

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/VD7GdNW
- Milanuncios
- Motor: https://zpl.io/2vWN0Bv

## Changelog

### Version 1.2

- Including the **Large** size.
- 40 px clickable area of close icon.

### Version 1.1

- Types: Navigation tags with icon both right and left side.
