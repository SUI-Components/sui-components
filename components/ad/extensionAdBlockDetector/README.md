# AdExtensionAdBlockDetector

> This component has only the logic of show content (i.e banner or message) through children when user has adblock. If you are using adblock just right now you should see a placeholder sentence like: <<"If you see this message you are using adblock extension">> in [demo page](/workbench/ad/extensionAdBlockDetector/demo). But if you are not using adblock or this extension is not enabled for this page, you won't see anything and this component won't render any kind of HTML layer, like div.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-ad-extensionAdBlockDetector --save
```

## Usage
This component will recive by children the content that have to show when adblock extenson is enable in browser. For example could be a banner message. But at the same time maybe bussines dept could be interested in show a diferent page when adblock is enable instead a banner.

## How it works technically?
This component render twice. The first time is for get the offsetHeight of div with class adsbox.
```html
<div class="adsbox">nbsp;</div> 
```
This class is the key because if offseight is equal to 0 is when adblock is enabled. Then we set the state through this condition, this causes a second rendering that will show our children content or anything depending if adblock is enabled.

### Basic usage

#### Display a simple message:
```js
import AdExtensionAdBlockDetector from '@schibstedspain/sui-ad-extensionAdBlockDetector'

return (<AdExtensionAdBlockerDetector> 
          <p>Simple message</p>
        </AdExtensionAdBlockerDetector>)
```

#### Display your custom component:
```js
import AdExtensionAdBlockDetector from '@schibstedspain/sui-ad-extensionAdBlockDetector'

return (<AdExtensionAdBlockerDetector> 
          <CustomComponent/>
        </AdExtensionAdBlockerDetector>)
```

> **Find full description and more examples in the [demo page](/workbench/ad/extensionAdBlockDetector/demo).**