# MoleculeAccordion

> The accordion is the component that contains collapsible components that allows the user to expand or collapse the content. We use this component to reduce the content of a page or section.

## Installation

```sh
$ npm install @s-ui/react-molecule-accordion --save
```

## Usage

```js
import MoleculeAccordion from '@s-ui/react-molecule-accordion'
```

### Basic usage
```js
<MoleculeAccordion 
    icon={svgIcon} 
    maxHeight={300}
    withAutoClose={false}
    withTransition={false}
>
    <div label='Place holder 1'>
        <p>Text...</p>
        <p>Text...</p>
    </div>
    <div label='Place holder 2'>
        <p>Text...</p>
        <p>Text...</p>
    </div>
</MoleculeAccordion>
```

### Properties
#### maxHeight
It sets the maximum height in pixels for the uncollapsed children. By default it is set to 100px.
```js
<MoleculeAccordion 
    maxHeight={100}
>
    ...
</MoleculeAccordion>
```

#### withTransition
It can be set True or False. It will activate or deactivate transition effect when toggle. By default it is True.
```js
<MoleculeAccordion 
    withTransition={true}
>
    ...
</MoleculeAccordion>
```

#### withAutoClose
It can be set True or False. It will activate or deactivate autoclose of siblings when toggle.
```js
<MoleculeAccordion 
    withAutoClose={true}
>
    ...
</MoleculeAccordion>
```

> **Find full description and more examples in the [demo page](#).**