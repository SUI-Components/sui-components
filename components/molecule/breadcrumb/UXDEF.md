# SUI - Breadcrumbs
*Breadcrumbs are a graphical control element used as a navigation aid in user interfaces. They allow users to keep track of their locations within the website, showing a hierarchy of the current page in relation to the website structure.*

|   Status          | Done |
|   :----           |   :---- |
|   Current version |   1.0|
|   Category        |   Molecule |
|   Owners          |   UX @Cristina P, @Nilo M , FE @Joan C |

## Structure

A breadcrumb is a trail of links placed horizontally one next to the other and divided by an icon or symbol “ >” which separates them as you will see in the content section.

Home page > Section page > Subsection page

Their width is 100% of their container and they may be contained by a box in which they are centred vertically.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_CDB64B3B4D578D7DA31E8737FEA2E11C6D20F0D56514905FDA3B8179A49BEFB5_1508764990657_Breadcrumb_definition.png)

## Types

### Location

These breadcrumbs are static and show where the page is located in the website hierarchy.

Home page > Section page > Subsection page

### Attribute

Attribute breadcrumbs give information that categorises the current page. In the case of search results, these attributes will be placed in a logical hierarchy in accordance with the search parameters selected by the user.

Type of search > keyword > filter 1 > filter 2 > zone...

## Behaviour

The links within the component will respond to hovering by changing colour, in accordance with the style specifications for the links of each website:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2C599327DAD68BCC28F347777C380811E9FE3508D82A7445CC555E7ACC267EEA_1497258395009_Breadcrumb2.png)

On the desktop version, the full breadcrumb will be shown, even if it takes up two lines.

On the mobile version the first few links will be compacted into a single link of ellipsis marks (…) which will take the user to the URL of the link prior to the last one shown.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_CDB64B3B4D578D7DA31E8737FEA2E11C6D20F0D56514905FDA3B8179A49BEFB5_1508764335072_Breadcrumb_definition.png)

## Contents

Each breadcrumb should be short, descriptive and consist of nouns or adverbs, never verbs or actions.

The links must not be smaller than 7px and must comply with the style specifications for the links of each website.

Each breadcrumb must be separated with the following 7x12px icon:

![Breadcrumb icon size definition](https://d2mxuefqeaa7sj.cloudfront.net/s_CDB64B3B4D578D7DA31E8737FEA2E11C6D20F0D56514905FDA3B8179A49BEFB5_1508765802590_icon_size.png)

There must be a margin of 4px between the icon and the adjacent elements and 8px from the top and bottom:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_CDB64B3B4D578D7DA31E8737FEA2E11C6D20F0D56514905FDA3B8179A49BEFB5_1508765399260_Slice.png)

## Responsive

If a breadcrumb exceeds the width of its container, in the mobile version, the first few links will be compacted into a single link of ellipsis marks (…) which will take the user to the URL of the link prior to the last one shown.

![Breadcrumb responsive (mobile)](https://d2mxuefqeaa7sj.cloudfront.net/s_CDB64B3B4D578D7DA31E8737FEA2E11C6D20F0D56514905FDA3B8179A49BEFB5_1508765491983_Breadcrumb_definition.png)

## Accessibility

This component should support the recommendations that appear on the [Accessibility & Inclusion Guidelines](https://github.com/SUI-Components/UX-Definitions/blob/master/Accessibility%20and%20Inclusion%20Guidelines.md).

For this component it is recommended to pay special attention to the following recommendations:

- Use horizontal breadcrumbs.
- Use aria-label="Breadcrumbs"
- Breadcrumb navigation is an important navigational aid and must be clearly visible to be of use.
- Place it at the top of the page, just below the main navigation bar or just above the headline of the current page.
- Include the title of the page in the breadcrumb.
- Do not include text such as “ You are here”.
- Do not link to the current page.
- It should be obvious which parts of the breadcrumb are clickable and which are unclickable.
- The same link style should be used as on the rest of the page.

[https://www.baekdal.com/insights/breadcrumbguidelines](https://www.baekdal.com/insights/breadcrumbguidelines)

## Links

- Zeplin: https://zpl.io/VkYD3eK

## Specific notes per vertical

If relevant, include more details for each of the themes

- Vibbo
- CarFactory
- ePreselec
- Fotocasa Sketch: https://schibsted.box.com/v/components-sui-breadcrumb
- Fotocasa Zeplin: https://zpl.io/boYxqgM
- Habitaclia
- Inmofactory
- Infojobs zeplin: https://zpl.io/2EyqLzy
- Milanuncios
- Motor

## Changelog

### Version 1.0

- Nothing here yet
