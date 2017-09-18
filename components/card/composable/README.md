### CardComposable

The CardComposable component features a placeholder to portray a custom primary and a secondary content. So you can set an image, slider or any media component in one and some other content in the other.

## Usage

The **SUI-CardComposable** allows to pass custom content in the primary placeholder and also provides a `sui-CardComposable-primary` class as a wrapper. This primary content **is required**.

Secondary content might be passed or not to SuiCardComposable component. If content is provided will be rendered inside a generic *div* `sui-CardComposable-secondary` wrapper.
If no content is provided this contained will not be rendered at all.

Check out this example below
```javascript

ReactDom.render(
    <SuiCardComposable className={'myCustom-class'}
      primary={
        <a href={images[0].link}><img src={images[0].src} /></a>
      }
      secondary={[
        <div>
            <h2>
              This is the Card Title
            </h2>
            <p>
              This is the description
            </p>
        </div>
      }
    />,
  document.getElementById('main')
);
```

### Setting a custom className

The `div` Card wrapper has a default `sui-CardComposable` class.
You can override it defining a custom class by setting the `proptype` `className` as follows:

```javascript
ReactDom.render(
    <SuiCardComposable className={'myCustom-class'}
      primary={
        <a href={images[0].link}><img src={images[0].src} /></a>
      }
      secondary={[
        <div>
            <h2>
            This is the Card Title
            </h2>
            <p>
                This is the description
            </p>
        </div>
      }
    />,
  document.getElementById('main')
);
```

### Card layout Orientation

The default *Card* orientation is **portrait mode**.  Use the `landscapeLayout={true}` parameter to set it landscape where the `primary` placeholder aligns to the left and the `secondary` to the right:

```javascript

ReactDom.render(
    <SuiCardComposable landscapeLayout
      primary={
        <a href={images[0].link}><img src={images[0].src} /></a>
      }
      secondary={[
        <div>
            <h2>
                This is the Card Title
            </h2>
            <p>
                This is the description
            </p>
        </div>
      }
    />,
  document.getElementById('main')
);

```

### Content First Property

When `landscapeLayout={true}` you can also set secondary content placeholder rendered  before primary by setting `contentFirst={}` to `true`:

```javascript

ReactDom.render(
    <SuiCardComposable landscapeLayout contentFirst
      primary={
        <a href={images[0].link}><img src={images[0].src} /></a>
      }
      secondary={[
        <div>
          <h2>
          This is the Card Title
          </h2>
          <p>
          This is the description
          </p>
        </div>
      }
    />,
  document.getElementById('main')
);
```

## Data model used in this example

Use an array of objects:

```javascript
const images = [{
  src: 'https://scontent-mad1-1.cdninstagram.com/t51.2885-15/e15/11199623_633712610062793_1285693904_n.jpg',
  type: 'image',
  alt: 'Test',
  link: 'https://www.instagram.com/p/TNUdPKpMgM/?taken-by=davecarter'
}];
```
