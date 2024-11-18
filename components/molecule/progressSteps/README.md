# MoleculeProgressSteps

`MoleculeProgressSteps` is a component that displays a range of steps and the completion status

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/progressSteps/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,progressSteps)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-progress-steps?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-progress-steps)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AprogressSteps&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AprogressSteps)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-progress-steps)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/progressSteps/LICENSE.md)

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
