# MoleculeCollapsible

> The collapsible component allows the user to expand or collapse content. We use this component to lightweight the content of a page or section.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/collapsible/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,collapsible)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-collapsible?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-collapsible)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Acollapsible&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Acollapsible)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-collapsible)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/collapsible/LICENSE.md)

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