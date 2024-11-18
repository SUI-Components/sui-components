# MoleculeTabs

> Basic component for tabs allowing versions with or without icons and classic or highlighted variants

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/tabs/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,tabs)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-tabs?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-tabs)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Atabs&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Atabs)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-tabs)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/tabs/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-tabs --save
```

## Usage

```js
import MoleculeTabs, {
  MoleculeTabs as StaticMoleculeTabs,
  MoleculeTab,
  moleculeTabsTypes,
  moleculeTabsVariants
} from '@s-ui/react-molecule-tabs'
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
