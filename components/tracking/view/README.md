# TrackingView

Tracking view is a component which purpose is to load our desired tracking library if wasn't loaded before and call the method of our tracking library that have the responsibility of do a pageView. For example:
`utag.view`

### Who defines the method to call?

The component will not be responsible to call the tracking library, it just will implement the track method that was defined in our props.

### Must I define the properties on each component instantiation?

You must, in order to load the library. What we recomend to do is to wrap this component in another one that holds that variables and was the one coupled to your desired library avoiding to pass it in the future, for example.

```javascript
<TealiumTrackingView>

// The render of the tealium tracking view will be the one to hold the src and maybe also the useCase (is up to you)
render(){
 return <TrackingView
        src='url'
        track={() =>domain.get('usecase').execute(trackingDataObject)}
        isAsync={false}
        verifier={() => window && window.utag}
        />
}

// So you can use TealiumTrackingView abstracted from URL, verifier and even usecase
```

## Installation

```sh
$ npm install @schibstedspain/sui-tracking-view --save
```

## Usage

### Basic usage

```js
import TrackingView from "@schibstedspain/sui-tracking-view";

return (
  <TrackingView
    src="http://tags.tiqcdn.com/utag/tealium/main/prod/utag.js"
    isAsync={false}
    verifier={() => window && window.utag}
    track={() =>
      domain.get("my_tracking_usecase").execute({
        data_blabla: "test"
      })
    }
  />
);
```

> **Find full description and more examples in the [demo page](#).**
