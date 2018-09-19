# MoleculeCollapsible

> The collapsible component allows the user to expand or collapse content. We use this component to lightweight the content of a page or section.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-molecule-collapsible --save
```

## Usage
Import the component like this:
```js
import MoleculeCollapsible from '@s-ui/react-molecule-collapsible'
```

### Basic usage
```js
<MoleculeThumbnail 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
>
    <p>Text or content to collapse</p>
</MoleculeThumbnail>

```

### Properties
#### Gradient
It can be set True or False. It will show a gradient over the content when set to True. By default it is True.
```js
<MoleculeThumbnail 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
    withGradient={true}
>
    <p>Text or content to collapse</p>
</MoleculeThumbnail>
```

#### Transition
It can be set True or False. It will activate or deactivate transition effect when toggle. By default it is True.
```js
<MoleculeThumbnail 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
    withTransition={true}
>
    <p>Text or content to collapse</p>
</MoleculeThumbnail>
```

#### Height
It sets the maximum height in pixels when the component is collapsed. By default it is set to 100px.
```js
<MoleculeThumbnail 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
    height={10}
>
    <p>Text or content to collapse</p>
</MoleculeThumbnail>
```

#### Icon
The icon in svg to show next to the text to collapse or expand. It will toggle between the original position and a rotation of 180 degrees when text is collapsed and expanded.

#### ShowText
The text to show in the button to uncollapse the content.

#### HideText
The text to show in the button to collapse the content.

> **Find full description and more examples in the [demo page](#).**