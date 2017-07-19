# react-ab-testing-optimizely-x
> Shows variation according to OptimizelyX's decision.

```html
<OptimizelyExperiment experimentId={100}>
  <button variationId={1001} defaultVariation>Original</button>
  <button variationId={1002}>Variation #1</button>
  <button variationId={1003}>Variation #2</button>
</OptimizelyExperiment>
```

## Installation

```sh
npm install @schibstedspain/react-ab-testing-optimizely-x --save
```

## Usage

### 1. Get experiment's id and its variation ids from OptimizelyX

Navigate to: https://app.optimizely.com/v2/ **>** Edit Experiment **>** API Names

![](.assets/optimizely-ids.png)

### 2. Create your variations and assign its respective ids as below

```javascript
import OptimizelyXExperiment from '@schibstedspain/react-ab-testing-optimizely-x'
```
```html
<OptimizelyXExperiment experimentId={8470306415}>
  <button variationId={8463707014} defaultVariation>Original</button>
  <button variationId={8480321136}>Variation #1</button>
  <button variationId={8462843355}>Variation #2</button>
  <button variationId={8468413552}>Variation #3</button>
</OptimizelyXExperiment>
```

Component will obtain OptimizelyX's decision for given `experimentId` and display chosen variation.

If no variation is provided or OptimizelyX API is unavailable, `defaultVariation` will be displayed.
