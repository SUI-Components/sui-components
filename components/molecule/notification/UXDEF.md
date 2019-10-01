# SUI - Notifications
*Notifications offer users information on the system. The content may confirm that an action has been performed correctly, warn the user of an error or simply give information on certain circumstances.*

|   Status          | Complete |
|   :----           |   :---- |
|   Current version |   2.1 |
|   Category        |   Molecule |
|   Owners          |   UX @Nuria I, FE @Daniel M|

## Structure

Notification is made up for a container, icon, text message and interactive items (close button, action buttons, links… ).

## Types

There are five types of notifications differentiated based on the messages meaning: 

- Success
- Alert/Warning
- Informative
- System
- Error

![](https://d2mxuefqeaa7sj.cloudfront.net/s_76D5D77B27591CD365518045E2DF76F037A8B6216C9919175CFE04E322413E6D_1522073082042_Captura+de+pantalla+2018-03-26+a+las+16.04.23.png)

### Success

Whenever the user has performed an action and requires positive feedback.

### Alert/Warning

These give the user notifications about things that are non-blocking but which they should know.

### Error

These warn users that it has not been possible to perform an action, i.e. that there is something blocking the action.
They should always offer a recommendation and/or action to resolve the block.

## Info

These give the user notifications about things that are non-blocking but which they should know, The message is regarding to the vertical and its background color is primary/corporate.

### System

Messages with secondary information that do not have a major impact on the user experience, default color is dark gray.

## Behaviour

Notifications can appear on three different positions depending on the definition case:

- Top (page or container)
- Relative (between content)
- Bottom (page or container)

**To****p:** 
- Top page: Appear in the upper part of the screen, superimposed over the heading and the navigation bar. This keeps the focus on the content and avoids pushing it further down. Even if the user scrolls up or down, the toast must stay in the same place in the upper part of the screen.  
- Top container: Appears at the top of any container, scroll up/down affects on its position as any other content.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_76D5D77B27591CD365518045E2DF76F037A8B6216C9919175CFE04E322413E6D_1522073187852_Captura+de+pantalla+2018-03-26+a+las+16.06.16.png)

**Relative:** Could appears in any position, at the top, between or at the bottom of any container, **is not fixed** so it will always follow the [box model](https://www.w3schools.com/css/css_boxmodel.asp) and it will be affected by any margin, padding or height of any previous/next content, just for that reason **is used just to notify some message related to the next or previous content** or even the whole container.  

![](https://d2mxuefqeaa7sj.cloudfront.net/s_76D5D77B27591CD365518045E2DF76F037A8B6216C9919175CFE04E322413E6D_1522073196802_Captura+de+pantalla+2018-03-26+a+las+16.05.19.png)

**Bottom:** 

- Bottom page: Appear in a fixed position in the bottom part of the screen, superimposed over the content.
- Bottom container: Appears at the bottom of any container (in this case the user maybe should scroll down to see the message.)      

The use of messages within modals is not contemplated.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_76D5D77B27591CD365518045E2DF76F037A8B6216C9919175CFE04E322413E6D_1522073220456_Captura+de+pantalla+2018-03-26+a+las+16.05.27.png)

### Type of close:

The **close button is optional** in all types of notifications and could be closed automatically o manual depending on use case.

**Automatic:** 

- The notification disappears after a minimum of 3 seconds.
- The duration can be defined depending on the length of the content, which the UX will determine when implementing based on:
    - Short = 3 seconds.
    - Medium = 6 seconds.
    - Long = 9 seconds.
- In case of “X” icon appears, it will always be visible to close the notification in case the user wants to close it before the automatic close.

**Manual close:** 

- The “X” icon will always be visible to close the notification.
-  If there is a call to action “X” button will also close the notification but this action won’t be saved, so the message will keep be shown for the next visit or reload.

### Behaviour of the transition:

Notification messages **could have or not** a transitional animation as an optional prop, by default is  with animation.
The type of animation is based on the position.
Bear in mind that relative position messages with transition will pull the content down and will increase the high of its container when pops up:

- Top:
    - Entry: SlideDown: Transition 0.5s ease-out
    - Exit:  SlideUp: Transition 0.3s ease-in
- Relative
    - Entry: FadeIn: Transition 0.5s ease-out
    - Exit:  FadeOut: Transition 0.3s ease-in
- Bottom:
    - Entry: SlideUP: Transition 0.5s ease-out
    - Exit:  SlideDown: Transition 0.3s ease-in

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8772120B34E0CB7B174A0EEA386772318CAF9D1A92F3091FED38E365CE95C47C_1498577182904_toast-alerta-mobile.gif)


## Content
- Remember to always be concise and try not to exceed the text limit (110 characters).
- It may include icons, text, links and buttons (3 buttons as maximum)
- We always include an icon in the notifications to help the user recognize the type of information they contain. Only at the mobile version this icon will disappear.
- The phrases must always end with a full stop, unless they end in a question mark or exclamation mark.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_76D5D77B27591CD365518045E2DF76F037A8B6216C9919175CFE04E322413E6D_1522073307195_Captura+de+pantalla+2018-03-26+a+las+16.07.56.png)

## Visual

![](https://d2mxuefqeaa7sj.cloudfront.net/s_8772120B34E0CB7B174A0EEA386772318CAF9D1A92F3091FED38E365CE95C47C_1507200463973_3.1-Notification-Metrics.png)

The component should have two versions (positive and negative). The color of the positive one should be the L4.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E092CE3EB611E387327F26BBC63239DAFC64F84BCDF8D5C533DE374AA594FD10_1542105969752_05-Content+NotificacionesSUI.jpg)

## Responsive

This behaves in the same way, adapting to the screen width, breaking the text content into several lines.
On the mobile version, it loses the icon to optimize space.
To enhance accessibility, we recommend that the first phrase in the notification gives an idea of the type of notification (e.g. Error > The message could not be sent due to a connection error…).
This format can also be used in other contexts, maintaining the same design, for example in the company CV chat on the desktop version.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_76D5D77B27591CD365518045E2DF76F037A8B6216C9919175CFE04E322413E6D_1522073368886_Captura+de+pantalla+2018-03-26+a+las+16.09.14.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

- Content should have enough contrast to its background 
- Every interactive element should be focusable
- Focus order should match visual order
- Focus should be visible
- Interactive elements and images should be correctly labelled
- Clickable area should be sufficient

Also, pay attention to the following tips:

- Use ARIA role="alert" to inform the assistance technologies regarding an important, non-interactive message. If the message is interactive, use alertdialog.
- Never leave a notification hidden in the code in order to call it when you need it, as users with assistive technologies will be able to see it.

## Links

- Zeplin: https://zpl.io/aR0vyz2

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/bAAjJnx
- Milanuncios
- Motor

## Changelog

### Version 2.0

- Colors: We decided to change color in a negative just to give more contrast between main content and notification messages.
- Behaviour : We did some changes based on the development just to make it much simpler to develop and make the react props as simple as possible.
- Types: We removed the 2 types of notifications Alerts and Toasts and we’ve simplified in a general and unified “notification” type.
    We add a new “info” style notification in prymate/corporate color to incorporate brand notifications approaches. 
- Icons: We did a research on the icons on notification messages and we change the icons to standardize to the most common used.
- Some other minor changes.

### Version 1.0

- Colors: Add positive version.
