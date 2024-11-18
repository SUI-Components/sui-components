# MoleculeStepper

> Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. It provides a wizard-like workflow.

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/stepper/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,stepper)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-stepper?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-stepper)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Astepper&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Astepper)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-stepper)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/stepper/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-stepper
```

## Usage

### Basic usage

#### Import package and use the component

##### Basic usage:

```js
import MoleculeStepper from 'sui-molecule-stepper'

return (
  <MoleculeStepper
    steps={3}
    step={1}
    icon={<Icon />}
    labels={['step-1', 'step-2', 'step-3']}
    onChange={(event, {step}) => {
      console.log(step)
    }}
  />
)
```

##### Compound usage:

```js
import MoleculeStepper, {Step} from 'sui-molecule-stepper'

return (
  <MoleculeStepper steps={3} step={1}>
    {new Array(steps).fill().map((i, index) => (
      <Step
        key={index}
        label={`step-${index}`}
        step={index + 1}
        visited={index < step}
        current={step === index}
        onClick={(event, {step}) => {
          console.log(step)
        }}
      >
        <CustomStep />
      </Step>
    ))}
  </MoleculeStepper>
)
```

When using the compound usage, the `<CustomStep/>` child will inherit `alignment, design, label, step, steps, current, visited, icon, visitedIcon, currentIcon` props to let teh children customize its own behavior.

#### Import the styles (Sass)

```css
@import '~@s-ui/theme/lib/index';
/* @import 'your theme'; */
@import '~@s-ui/react-molecule-stepper/lib/index';
```

> **Find full description and more examples in the [demo page](https://sui-components.vercel.app/workbench/molecule/stepper/demo).**
