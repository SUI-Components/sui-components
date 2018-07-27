# AdExtensionAdBlockDetector

> This component has only the logic of show content (i.e banner or message) through children when user has adblock. If you are using adblock just right now you should see a placeholder sentence like: <<"If you see this message you are using adblock extension">> in [demo page](/workbench/ad/blockerExtensionDetector/demo). But if you are not using adblock or this extension is not enabled for this page, you won't see anything and this component won't render any kind of HTML layer, like div.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-ad-blocker-extension-detector --save
```

## Usage
This component will receive by children the content that have to show when adblock extension is enabled in browser. For example could be a banner message. But at the same time maybe business dept could be interested in show a diferent page when adblock is enabled instead a banner.

## How it works technically?
This component render twice. The first time is for get the offsetHeight of div with class adsbox.
```html
<div class="adsbox">nbsp;</div> 
```
This class is the key because if offseight is equal to 0 is when adblock is enabled. Then we set the state through this condition, this causes a second rendering that will show our children content or anything depending if adblock is enabled.

### Basic usage

#### Display a simple message:
```js
import AdBlockerExtensionDetector from '@schibstedspain/sui-ad-blocker-extension-detector'

return (<AdBlockerExtensionDetector> 
          <p>Simple message</p>
        </AdBlockerExtensionDetector>)
```

#### Display your custom component:
```js
import AdBlockerExtensionDetector from '@schibstedspain/sui-ad-blocker-extension-detector'

return (<AdBlockerExtensionDetector> 
          <CustomComponent/>
        </AdBlockerExtensionDetector>)
```

> **Find full description and more examples in the [demo page](/workbench/ad/blockerExtensionDetector/demo).**