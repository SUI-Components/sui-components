# MoleculeStepper

> Description
> Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. It provides a wizard-like workflow.

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
