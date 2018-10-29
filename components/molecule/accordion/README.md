# AtomAccordion

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @s-ui/react-atom-accordion --save
```

## Usage

```js
import AtomAccordion from '@s-ui/react-atom-accordion'
```

### Basic usage
```js
<AtomAccordion 
    icon={svgIcon} 
    showText='Show' 
    hideText='Hide'
>
    <MoleculeCollapsible 
        icon={svgIcon} 
        showText='Placeholder text' 
        hideText='Placeholder text'
    >
        <p>Text or content to collapse</p>
    </MoleculeCollapsible>
    <MoleculeCollapsible 
        icon={svgIcon} 
        showText='Placeholder text' 
        hideText='Placeholder text'
    >
        <p>Text or content to collapse</p>
    </MoleculeCollapsible>
</AtomAccordion>
```

### Properties
#### maxHeight
It sets the maximum height in pixels for the uncollapsed children. By default it is set to 100px.
```js
<AtomAccordion 
    maxHeight={100}
>
    ...
</AtomAccordion>
```

#### withTransition
It can be set True or False. It will activate or deactivate transition effect when toggle. By default it is True.
```js
<AtomAccordion 
    withTransition={true}
>
    ...
</AtomAccordion>
```

#### withAutoClose
It can be set True or False. It will activate or deactivate autoclose of siblings when toggle.
```js
<AtomAccordion 
    withAutoClose={true}
>
    ...
</AtomAccordion>
```

> **Find full description and more examples in the [demo page](#).**