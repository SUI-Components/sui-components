# BehaviorSticky

This component helps in the implementation of sticky components

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
