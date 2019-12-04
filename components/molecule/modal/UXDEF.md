# SUI - Modal Windows
*Modal windows* focus users' attention *to inform them about a specific interaction. They may* require users to make a decision *or warn them when an error may have very significant consequences.*

*As they open over the content, they block any action being performed on the content in order to focus the user’s attention on the message or task, therefore they can be intrusive and must be used in moderation.*

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.1 |
|   Category        |   Molecule |
|   Owners          |   UX @Daniel M , @Chris J , FE @Pablo G|

## Structure

This container can be made up of more components depending on the case that is needed. It is composed of the following structure:

Mandatory elements

- Modal window (container)
- Overlay (does not apply to fullscreen)
- Content (This is the space where content goes. It can be: texts, images, other components or a combination of them)

Optionals

- Header + Title
- Scroll (only if the content exceeded the height of the browser).
- Close icon (It can become mandatory if the component does not have a closure through call to action)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542021058319_1-+Modal+-+Structure.png)

## Behaviour

Modal windows maintain the user’s attention and context and are always superimposed over the main content, until the user interacts with them.

Modals has two behaviors: Open and Close.

### Opening

Modal windows open up in the center of the page (both vertically and horizontally) always after an action by the user: 

- Selecting an element.
- Tap on a link or button, etc, (never automatically). 
- It rarely opens automatically, since it is not a recommended behavior, but there may be exceptions (example: onboarding).

Entry effect overlay: FadeIn 250ms
Entry effect modal: FadeIn 250ms + slideUp 32px 250ms ease in

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542021722921_modal-motion-1.gif)

Mobile behaviour

- Apply same effect in fullscreen or responsive version of the modal

### Closing 

The user should always have one of these options to close the window, and it is recommended that all of them are available:

- Tap the close icon in the top right corner.
- Tap overlay area around the modal window.
- Tap an action of the modal.
- ESC button (this should never be used alone).

Out effect overlay: FadeOut 250ms
Out effect modal: FadeOut 250ms + slideDown 32px 250ms ease out (see example on opening image)

Mobile behaviour

- Apply same effect in fullscreen or responsive version of the modal

## Variants

1- Colour header (is recommended use a background with primary colour) 
2- White header (less highlighted header)
3- No header (all the space is used for content)

![Case with mandatory elements + optionals (color header)](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542021203858_3-+Modal+-+Variant2.png)

![Case with mandatory elements + optionals (white header)](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542021136490_2-+Modal+-+Variant1.png)

![Case with only with mandatory elements (+ optional close icon)](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542021450179_4-+Modal+-+Variant3.png)

## Content

Modal screens work as containers of different types of content, and sometimes they are composed of several components. Their design and behaviour change according to the tasks that the user must execute and the cognitive effort that the user needs to perform for that task.

Possible combinable components:

- Button.
- Cards.
- Forms.
- Image gallery.
- Badges.
- Tags.

Check some examples:

![In this example we use a card component inside](https://d2mxuefqeaa7sj.cloudfront.net/s_C4EAB7A20656FB1AFBC530D8494D0737994DBAF932C8D255C33281641A291B3C_1511526974745_example-cards.png)

**Modal with cards**
It is applied in cases that want to show content related to the action performed by a user.

## 
![In this example we use radio buttons options component inside](https://d2mxuefqeaa7sj.cloudfront.net/s_C4EAB7A20656FB1AFBC530D8494D0737994DBAF932C8D255C33281641A291B3C_1513768082428_options.png)

**Modal for selection of options**
Applied in cases where we need the user to make a decision before several scenarios and options.

![In this example we use a form inside a modal](https://d2mxuefqeaa7sj.cloudfront.net/s_C4EAB7A20656FB1AFBC530D8494D0737994DBAF932C8D255C33281641A291B3C_1511532114094_example-form.png)

**Modal with forms**
One of the most common cases is to include form elements such as: input text, list, check, etc.

![In this example we use a modal to display info about new features](https://d2mxuefqeaa7sj.cloudfront.net/s_C4EAB7A20656FB1AFBC530D8494D0737994DBAF932C8D255C33281641A291B3C_1511532363595_example-onboarding.png)

**On** ******boarding modal**
This application of the modal is designed to show a sequential information commonly used to tour for a first use of the web or new features that have been incorporated.

## Responsive

In the modal mobile version you can use a full screen version to take advantage of the screen space.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542031791889_6-+Modal+-+Responsive2.png)

## Visual

### Visual Desktop

The width of the component is conditioned by the content, the most common measures for desktop span a range of **400px** **width** up to **600px** **width.** The min-width of the modal is 288px (see visual responsive)
See the [attribute z-index](https://paper.dropbox.com/doc/z-index--AUE1Qg6jOw8nyUG3D6dfTHI1Ag-4QvLsXUoWXeWNDiQSzCBc) for the Modal.
****
![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542031494012_7-+Modal+-+Visual1.png)

If we need to show content that requires more than **600px** **width** on screens with a resolution greater than **1280x1024** there is a modal **maximum width limit of 1200px****.** This modal scales with a margin of 24px when the browser is less to 1200px and change to 16px in the breakpoint XS 480px (see image bellow in visual - mobile)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542108209399_10-+Modal+-+Visual4.png)

The height of the component will depend on the content or components that are within the modal. Apply scroll if the content exceeded the height of the browser.

Modal window can have an **optional** **shadow 0 2px 4px #00000024** to highlight the separation. (it can be customized by vertical)
Overlay panel is black with opacity 0.6 (it can be customized by vertical)

### Visual Mobile

Modal change to full screen version to take advantage of the screen space.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542031851760_9-+Modal+-+Visual3.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
2. Focus order should match visual order
3. Focus should be visible
4. Heading structure should be consistent
6. Information should not be supported only by one sense
7. Interactive elements and images should be correctly labelled
8. Content should be written in common language
9. Interactive elements should be differentiated from content
13. Errors should be prevented 
14. Content should be able to increase in size
15. Content should have enough contrast to its background 

The user must have all the existing alternatives to close the component, using both the keyboard and the mouse.

These accessibility recommendations are based on the modal component, we must remember that a modal can carry other components inside, so these components must comply with their specific accessibility recommendations.

## Links

- Zeplin: https://zpl.io/brrPqZO

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa
- Habitaclia
- Inmofactory
- Infojobs: https://zpl.io/blZzrEe
- Milanuncios
- Motor

## Changelog

### Version 1.2

- Queda pendiente aplicar Variable Responsive con Margins para una segunda iteración del componente.
- Responsive: It is left to the discretion of the designer whether to use an overlay (see behaviors section).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542031784120_5-+Modal+-+Responsive1.png)

- Visual responsive: In the overlay modal the padding are reduced to 16px in the breakpoint XS 480px to take advantage of the screen size. 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1542031840174_8-+Modal+-+Visual2.png)

- También queda pendiente para una segunda iteración la Variable **Modal No Header + Imagen.** Añado un visual nuevo de la modal en desktop donde se ve más claro 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_D4CF32D1CB6EBD9A9A8790674E4392BFB96C606A04762D291C2744A800530B7B_1548839906131_4.2-+Modal+-+Variant4.png)

### Version 1.1

- Definition & Visuals iteration

### Version 1.0

- First definition no closed