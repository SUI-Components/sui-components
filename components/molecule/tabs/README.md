# MoleculeTabs

> Basic component for tabs allowing versions with or without icons and classic or highlighted variants

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-molecule-tabs --save
```

## Usage

### Basic usage (Classic & horizontal)
```js
import MoleculeTabs from '@schibstedspain/sui-molecule-tabs'

return (
    <MoleculeTabs
        items={items}
        handleChange={handleChange}
    />
)
```


### Full width Classic & Horizontal
```js
import MoleculeTabs from '@schibstedspain/sui-molecule-tabs'

return (
    <MoleculeTabs
        items={items}
        handleChange={handleChange}
        type={moleculeTabsTypes.FULLWIDTH}
    />
)
```

### Highlighted & Horizontal
```js
import MoleculeTabs from '@schibstedspain/sui-molecule-tabs'

return (
    <MoleculeTabs
        items={items}
        handleChange={handleChange}
        variant={moleculeTabsVariants.HIGHLIGHTED}
    />
)
```


### Highlighted & Vertical
```js
import MoleculeTabs from '@schibstedspain/sui-molecule-tabs'

return (
    <MoleculeTabs
        items={items}
        handleChange={handleChange}
        type={moleculeTabsTypes.VERTICAL}
        variant={moleculeTabsVariants.HIGHLIGHTED}
    />
)
```

> **Find full description and more examples in the [demo page](#).**
