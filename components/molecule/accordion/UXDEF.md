# SUI - Accordion
The accordion is the component that contains collapsible components that allows the user to expand or collapse the content. We use this component to reduce the content of a page or section.

|   Status          | Work in progress |
|   :----           |   :---- |
|   Current version |   1.0 |
|   Category        |   Molecule |
|   Owners          |   UX @Joan M, FE @Adrià V |

## Structure

The Accordion component is made up of several collapsible behaviour components

![](https://d2mxuefqeaa7sj.cloudfront.net/s_91DBCC348A22E670E700A5D0FB3B399567A3F30B6E91D1B7D726464196437C3E_1533889772714_Structure.jpg)

## Behavior

When the user clicks on title section or action icon in the component, shows a content or hidden a content.

- SHOW
When its content is hidden, the action icon points down and the user to click and view more information.

- HIDE
When its content is fully shown, the arrow icon points up and the user to click and hide some information.
![](https://d2mxuefqeaa7sj.cloudfront.net/s_91DBCC348A22E670E700A5D0FB3B399567A3F30B6E91D1B7D726464196437C3E_1533889827211_Behavior-Accordion.jpg)

When the user clicks on one the collapsible component when it’s in its “Hide” state, the information previously shown will hide again.

Its default position is the “Hide” state.

### Height

A maximum height for the hidden area can be specified if needed. In that case, hidden area will have its own scroll when shown.

## Types

The accordion is a container of content and this makes the type as flexible as we want to give the component


![](https://d2mxuefqeaa7sj.cloudfront.net/s_91DBCC348A22E670E700A5D0FB3B399567A3F30B6E91D1B7D726464196437C3E_1534751656779_1content-accordion.jpg)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_91DBCC348A22E670E700A5D0FB3B399567A3F30B6E91D1B7D726464196437C3E_1535545523838_Visual-accordion.jpg)

## Contents

The content is detailed by the [Collapsible](https://paper.dropbox.com/doc/SUI-Accordion--ANNtg33I3d7GV2nTMJAOMDKCAg-Un8fw5L4pMEZCB4N3J81j) component and would have to contemplate different casuistics like.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_91DBCC348A22E670E700A5D0FB3B399567A3F30B6E91D1B7D726464196437C3E_1533895911860_Contents-Accordion.jpg)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

1. Every interactive element should be focusable
6. Information should not be supported only by one sense
10. Clickable area should be sufficient: The active/clickable area has been defined as 24 px (only when it is for text+icon)s

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
- Motor

## Changelog

### Version 1.0

- Nothing here yet

