# ProfileRating

> Description

<!-- ![](./assets/preview.png) -->

## Installation

```sh
$ npm install @schibstedspain/sui-rating-icons --save
```

## Usage

The sui-rating-icons is made to work with any icon that we provide.
The profile rating will handle with the icon and our specifications and will build a rating menu to show up to our user their rating information

The ProfileRating accepts the following properties:

- *rating*: The rating of our user, if our user have 6/10 stars we should pass 6 you can pass it with decimals too. 6.5, 7, 7.5...
- *maxValue*: The max value that our rating have. For example if it have 10 max star we should put 10.
- *icon*: Our Icon to be used as a rating
- *iconSize*: Our icon size, this one is important to make width calcs on the mask
- *spacingBetween[OPTIONAL]*: A margin will be added to our we set this to a number(px),
- *fillColor[OPTIONAL]*: The color used for the *FILLED* mask. If you don't provide any color, it will fallback to our component scss variable $fill-profile-rating-filled
- *emptyColor[OPTIONAL]*: The color used for the *EMPTY* mask. If you don't provide any color, it will fallback to our component scss variable $fill-profile-rating-empty

```js
import ProfileRating from '@schibstedspain/sui-rating-icons'

return (<ProfileRating
                        rating={9}
                        maxValue={10}
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 8 8">
                                         <path d="M2 0c-.55 0-1.04.23-1.41.59-.36.36-.59.85-.59 1.41 0 .55.23 1.04.59 1.41l3.41 3.41 3.41-3.41c.36-.36.59-.85.59-1.41 0-.55-.23-1.04-.59-1.41-.36-.36-.85-.59-1.41-.59-.55 0-1.04.23-1.41.59-.36.36-.59.85-.59 1.41 0-.55-.23-1.04-.59-1.41-.36-.36-.85-.59-1.41-.59z"
                                         transform="translate(0 1)" />
                                       </svg>}
                        iconSize={28}
                        spacingBetween={5}
                        fillColor={'#ff0000'}
                        emptyColor={'#ffc1c1'}
/>)
```


> **Find full description and more examples in the [demo page](#).**