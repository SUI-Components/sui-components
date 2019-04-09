# MoleculeBadgeCounter

`MoleculeBadgeCounter` is a component used for warning the user about new content or updates

## Installation

```sh
$ npm install @s-ui/react-molecule-badge-counter --save
```

## Usage

```js
import MoleculeBadgeCounter, {
  moleculeBadgeCounterVariants,
  moleculeBadgeCounterSizes
} from "@s-ui/react-molecule-badge-counter"
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

### Labels

```js
<MoleculeBadgeCounter label="4" />
<MoleculeBadgeCounter label="42" />
<MoleculeBadgeCounter label="142" />
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/badgeCounter).**
