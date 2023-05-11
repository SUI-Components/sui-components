# MoleculeCollapsible

> The collapsible component allows the user to expand or collapse content. We use this component to lightweight the content of a page or section.

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
<MoleculeCollapsible 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
>
    <p>Text or content to collapse</p>
</MoleculeCollapsible>
```

### Properties

#### height

It sets the maximum height in pixels when the component is collapsed. By default it is set to 100px.

```js
<MoleculeCollapsible 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
    height={10}
>
    <p>Text or content to collapse</p>
</MoleculeCollapsible>
```

#### icon

The icon in svg to show next to the text to collapse or expand. It will toggle between the original position and a rotation of 180 degrees when text is collapsed and expanded.

#### showText

The text to show in the button to uncollapse the content.

#### hideText

The text to show in the button to collapse the content.

#### isCollapsible

When set to `false`, it hides the button to collapse the content when expanded. True by default.
```js
<MoleculeCollapsible 
    hideText='Hide'
    isCollapsible={false}
    showText='Show' 
>
    <p>Text or content that's no longer collapsible</p>
</MoleculeCollapsible>
```


#### withGradient

It can be set True or False. It will show a gradient over the content when set to True. By default it is True.

```js
<MoleculeCollapsible 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
    withGradient={true}
>
    <p>Text or content to collapse</p>
</MoleculeCollapsible>
```

#### withTransition

It can be set True or False. It will activate or deactivate transition effect when toggle. By default it is True.

```js
<MoleculeCollapsible 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
    withTransition={true}
>
    <p>Text or content to collapse</p>
</MoleculeCollapsible>
```

> **Find full description and more examples in the [demo page](#).**