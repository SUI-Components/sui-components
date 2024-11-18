# AtomPanel

> Just a background for your component, can be a color or an image with background/overlay

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/atom/panel/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,atom,panel)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-atom-panel?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-atom-panel)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3Apanel&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3Apanel)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-atom-panel)](https://github.com/SUI-Components/sui-components/blob/main/components/atom/panel/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-atom-panel --save
```

## Usage

### Basic usage
```js
import AtomPanel, {
  atomPanelAlpha,
  atomPanelColors,
  atomPanelHorizontalAlign,
  atomPanelVerticalAlign
} from '@s-ui/react-atom-panel'

return (
  <div>
    <AtomPanel
      alpha={atomPanelAlpha.OVERLAY_D4}
      color={atomPanelColors.CONTRAST}
    >
      {content}
    </AtomPanel>
    <AtomPanel
      src={'https://picsum.photos/250/200'}
      horizontalAlign={atomPanelHorizontalAlign.LEFT}
      verticalAlign={atomPanelVerticalAlign.TOP}
    >
      {content}
    </AtomPanel>
  </div>
)
```


> **Find full description and more examples in the [demo page](https://sui-components.now.sh/workbench/atom/panel/demo).**
