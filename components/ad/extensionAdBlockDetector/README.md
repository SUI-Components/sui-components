# AdExtensionAdBlockDetector

> This component has only the logic of show a banner or message when user has adblock. If you are using adblock just right now you should see a placeholder sentence like: <<"If you see this message you are using adblock extension">> in demo page. But if you are not using adblock or this extension is not enabled for this page, you won't see anything and this component won't render any kind of HTML layer, like div.

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-ad-extensionAdBlockDetector --save
```

## Usage
This component will recive by children the content that have to show when adblock extenson is enable in browser. For example could be a banner message. But at the same time maybe bussines could be interested in show a diferent page when adblock is enable instead a banner.

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

          

> **Find full description and more examples in the [demo page](#).**