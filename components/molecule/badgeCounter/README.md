# MoleculeBadgeCounter

`MoleculeBadgeCounter` is a component used for warning the user about new content or updates

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/badgeCounter/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,badgeCounter)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-badge-counter?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-badge-counter)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AbadgeCounter&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AbadgeCounter)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-badge-counter)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/badgeCounter/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-badge-counter --save
```

## Usage

```js
import MoleculeBadgeCounter, {
  moleculeBadgeCounterVariants,
  moleculeBadgeCounterSizes
} from '@s-ui/react-molecule-badge-counter'
```

### Basic (Small)

```js
<MoleculeBadgeCounter />
```

### Dot Variant

```js
<MoleculeBadgeCounter variant={moleculeBadgeCounterVariants.DOT} />
```

### With Text

```js
<MoleculeBadgeCounter>Text</MoleculeBadgeCounter>
```

### With Icon

```js
<MoleculeBadgeCounter>
  <Icon />
</MoleculeBadgeCounter>
```

### Medium Size

```js
<MoleculeBadgeCounter size="medium" />
```

### Exclamation Variant

```js
<MoleculeBadgeCounter
  variant={moleculeBadgeCounterVariants.EXCLAMATION}
  size={moleculeBadgeCounterSizes.MEDIUM}
/>
```

### Extended Variant

```js
<MoleculeBadgeCounter
  variant={moleculeBadgeCounterVariants.EXTENDED}
  size={moleculeBadgeCounterSizes.MEDIUM}
/>
```

### Labels

```js
<MoleculeBadgeCounter label="4" />
<MoleculeBadgeCounter label="42" />
<MoleculeBadgeCounter label="142" />
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/badgeCounter).**
