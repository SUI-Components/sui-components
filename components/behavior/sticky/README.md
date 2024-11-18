# BehaviorSticky

This component helps in the implementation of sticky components

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/behavior/sticky/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,behavior,sticky)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-behavior-sticky?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-behavior-sticky)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Asticky&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Asticky)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-behavior-sticky)](https://github.com/SUI-Components/sui-components/blob/main/components/behavior/sticky/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-behavior-sticky --save
```

## Usage

```js
import BehaviorSticky, {BehaviorStickyProvider} from '@s-ui/react-behavior-sticky'
```

### Basic usage (Fixed at top)

```js
<BehaviorStickyProvider>
  ...
  <BehaviorSticky>
    <HeaderFixed />
  </BehaviorSticky>
  ...
</BehaviorStickyProvider>
```

### Sticky state

```js
<BehaviorStickyProvider>
  ...
  <BehaviorSticky>{({isSticky}) => <HeaderFixed variant={isSticky ? 'sticky' : 'default'} />}</BehaviorSticky>
  ...
</BehaviorStickyProvider>
```

### Sticky per container

```js
<BehaviorStickyProvider>
  ...
  <div ref={container1}>
    <BehaviorSticky container={container1} defaultOffsetTop={45} animate>
      <HeaderWithButtons className={CLASS_DEMO_FIXED_BUTTONS} />
    </BehaviorSticky>
    <Content className={CLASS_DEMO_CONTENT} />
  </div>
  ...
</BehaviorStickyProvider>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/behavior/sticky/demo).**
