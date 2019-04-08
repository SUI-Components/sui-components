# MoleculeProgressSteps

`MoleculeProgressSteps` is a component that displays a range of steps and the completion status

## Installation

```sh
$ npm install @s-ui/react-molecule-progress-steps --save
```

## Usage

```js
import MoleculeProgressSteps, {
  MoleculeProgressStep,
  STATUSES
} from '@s-ui/react-molecule-progress-steps'

import {FillCheckIcon, PointerMapIcon, PaperPlaneIcon, ChatIcon, StarIcon} from './Icons'
```

### Basic usage

```js
<MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>

  <MoleculeProgressStep
    label="Step 1"
    status={STATUSES.VISITED}
  >
    <p>Step 1 Content</p> 
  </MoleculeProgressStep>

  <MoleculeProgressStep
    label="Step 2"
    status={STATUSES.ACTIVE}
  >
    <p>Step 2 Content</p> 
  </MoleculeProgressStep>

  <MoleculeProgressStep
    label="Step 3"
    status={STATUSES.NORMAL}
  >
    <p>Step 3 Content</p> 
  </MoleculeProgressStep>

</MoleculeProgressSteps>
```

### w/ Icons

```js
<MoleculeProgressSteps iconStepDone={<FillCheckIcon />}>

  <MoleculeProgressStep
    label="Step 1"
    icon={<PointerMapIcon />}
    status={STATUSES.VISITED}
  >
    <p>Step 1 Content</p> 
  </MoleculeProgressStep>

  <MoleculeProgressStep
    label="Step 2"
    icon={<PaperPlaneIcon />}
    status={STATUSES.ACTIVE}
  >
    <p>Step 2 Content</p> 
  </MoleculeProgressStep>

  <MoleculeProgressStep
    label="Step 3"
    icon={<ChatIcon />}
    status={STATUSES.NORMAL}
  >
    <p>Step 3 Content</p> 
  </MoleculeProgressStep>

</MoleculeProgressSteps>
```

### Vertical mode

```js
<MoleculeProgressSteps iconStepDone={<FillCheckIcon />} vertical>

  <MoleculeProgressStep
    label="Step 1"
    status={STATUSES.VISITED}
  >
    <p>Step 1 Content</p> 
  </MoleculeProgressStep>

  <MoleculeProgressStep
    label="Step 2"
    status={STATUSES.ACTIVE}
  >
    <p>Step 2 Content</p> 
  </MoleculeProgressStep>

</MoleculeProgressSteps>
```

### Compressed mode (mobile)

```js
<MoleculeProgressSteps iconStepDone={<FillCheckIcon />} compressed>

  <MoleculeProgressStep
    label="Step 1"
    status={STATUSES.VISITED}
  >
    <p>Step 1 Content</p> 
  </MoleculeProgressStep>

  <MoleculeProgressStep
    label="Step 2"
    status={STATUSES.ACTIVE}
  >
    <p>Step 2 Content</p> 
  </MoleculeProgressStep>

</MoleculeProgressSteps>
```

> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/molecule/progressSteps/demo).**
