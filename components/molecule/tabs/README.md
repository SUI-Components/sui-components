# MoleculeTabs

> Basic component for tabs allowing versions with or without icons and classic or highlighted variants

## Installation

```sh
$ npm install @schibstedspain/sui-molecule-tabs --save
```

## Usage

```js
import MoleculeTabs, {
  MoleculeTabs as StaticMoleculeTabs,
  MoleculeTab,
  moleculeTabsTypes,
  moleculeTabsVariants
} from '@schibstedspain/sui-molecule-tabs'
```

### Basic usage (Classic & horizontal)

```js
<MoleculeTabs>
  <MoleculeTab
    numTab="1"
    label="Tab 1"
    active
  >
    <ContentTab1 />
  </MoleculeTab>
  <MoleculeTab numTab="2" label="Tab 2">
    <ContentTab2 />
  </MoleculeTab>
  <MoleculeTab
    numTab="3"
    label="Tab 3"
    disabled
  >
    <ContentTab3 />
  </MoleculeTab>
</MoleculeTabs>
```


### Full width Classic & Horizontal
```js
<MoleculeTabs type={moleculeTabsTypes.FULLWIDTH}>
  <MoleculeTab
    numTab="1"
    label="Tab 1"
    active
  >
    <ContentTab1 />
  </MoleculeTab>
  <MoleculeTab numTab="2" label="Tab 2">
    <ContentTab2 />
  </MoleculeTab>
  <MoleculeTab
    numTab="3"
    label="Tab 3"
    disabled
  >
    <ContentTab3 />
  </MoleculeTab>
</MoleculeTabs>
```

### Highlighted & Horizontal
```js
<MoleculeTabs variant={moleculeTabsVariants.HIGHLIGHTED}>
  <MoleculeTab
    numTab="1"
    label="Tab 1"
    active
  >
    <ContentTab1 />
  </MoleculeTab>
  <MoleculeTab numTab="2" label="Tab 2">
    <ContentTab2 />
  </MoleculeTab>
  <MoleculeTab
    numTab="3"
    label="Tab 3"
    disabled
  >
    <ContentTab3 />
  </MoleculeTab>
</MoleculeTabs>
```


### Highlighted & Vertical
```js
<MoleculeTabs variant={moleculeTabsVariants.HIGHLIGHTED} type={moleculeTabsTypes.VERTICAL}>
  <MoleculeTab
    numTab="1"
    label="Tab 1"
    active
  >
    <ContentTab1 />
  </MoleculeTab>
  <MoleculeTab numTab="2" label="Tab 2">
    <ContentTab2 />
  </MoleculeTab>
  <MoleculeTab
    numTab="3"
    label="Tab 3"
    disabled
  >
    <ContentTab3 />
  </MoleculeTab>
</MoleculeTabs>
```

### with Icons

```js
<MoleculeTabs>
  <MoleculeTab
    numTab="1"
    label="Tab 1"
    icon={<IconLineBackup />}
    active
  >
    <ContentTab1 />
  </MoleculeTab>
  <MoleculeTab numTab="2" label="Tab 2" icon={<IconLineDashboard />}>
    <ContentTab2 />
  </MoleculeTab>
  <MoleculeTab
    numTab="3"
    label="Tab 3"
    icon={<IconLineExtension />}
    disabled
  >
    <ContentTab3 />
  </MoleculeTab>
</MoleculeTabs>
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/tabs/demo).**
