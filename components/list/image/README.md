### ListImage

Displays a list of images (where each item corresponds to a ```sui-image-lazy-load``` component).

It will be displayed as a continuous grid (the image grid items per line are adjustable to the container's width),
allowing to set a limit of the total number of images to show.

Each image may have a custom callback to be called when its onClick event is triggered.

Additionally, if there a more image items than the defined ```maxItems``` prop, and the prop ```showMoreItemsBox``` is provided,

it will show an extra cover (black background, 65% opacity) over the last` image, allowing as well the definition of a
custom callback to be called when this last item is clicked.

By default, the sizes for all image items in the list are set as follows:
- Each item is 196px width for desktop and tablet screens. The cell gutter is 16px, except in the case of tablet screen
  where only horizontal gutter is expanded to 30px.
- Each item is 50% width for mobile screens (cell gutter of 16px).
