# CardProfile

CardProfile serves a card with user information like avatar, name, rating bar and stats information.

## Installation

```sh
$ npm install @schibstedspain/sui-card-profile --save
```

## Usage
The CardProfile need a few properties to be setted up:

averageScore: Is the number of ratings that you have, if you have 5 of 10 possible ratings the component will paint 5 of 10 icons filled.
maxRatingValue: Is the number of maxRatings that you can have. The bigger this number is the more number of total icons that you will have on the rating
icon: The icon to be painted as your rating icon.
iconSize: Needed to make math calcs to fill our bar
userInfo: The user information, requires a name and a profile pic.
stats: The stats array is an array of 'stats' objects. Those objects require a number, a label and a link to be painted. Are dynamic, so, if you want to paint more stats on the menu you can.

```js
import CardProfile from '@schibstedspain/sui-card-profile'

return (<CardProfile
                            averageScore={4.5}
                            maxRatingValue={5}
                            icon={() => <svg viewBox="0 0 16 16">
                                              <path id="ic_star_small-a_1_"d="M8,12.5l-2.9,1.5l0,0c-0.5,0.3-1.1,0.1-1.4-0.4c-0.1-0.2-0.1-0.4-0.1-0.6l0.6-3.3
                                                L1.8,7.4l0,0C1.4,7,1.4,6.4,1.8,6c0.2-0.2,0.4-0.3,0.6-0.3l3.3-0.5l1.5-3l0,0c0.2-0.5,0.8-0.7,1.3-0.5c0.2,0.1,0.4,0.3,0.5,0.5
                                                l1.5,3l3.3,0.5l0,0c0.5,0.1,0.9,0.6,0.8,1.1c0,0.2-0.1,0.4-0.3,0.6l-2.4,2.3l0.6,3.3l0,0c0.1,0.5-0.3,1.1-0.8,1.2
                                                c-0.2,0-0.4,0-0.6-0.1L8,12.5z"/>
                                         </svg>}
                            iconSize={16}
                            userInfo={{
                                username: 'John Doe',
                                profilePic: 'https://upload.wikimedia.org/wikipedia/en/c/c6/NeoTheMatrix.jpg'
                            }}

                            stats={[
                            { number: 10, label: 'En venta', link: 'http://www.google.es' },
                            { number: 0, label: 'Seguidores', link: 'http://www.google.es' },
                            { number: 10, label: 'Valoraciones', link: 'http://www.google.es' }
                            ]}

/>)
```


> **Find full description and more examples in the [demo page](#).**