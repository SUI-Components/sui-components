# ServiceMarkdown

Allows you to fetch an external markdown file and show it parsed in your React application. Keep in mind this functionality doesn't offer server-side rendering, so your Markdown content will be loaded only in the client.

For the sake of the performance, it asynchronously loads the needed dependencies in order to be optimized for your bundle.

If you wish to add styling to the parsed markdown, you should wrap this component with another element with a className that will allow you to style it pointing directly to the descendant HTML elements.

## Installation

```sh
$ npm install @s-ui/react-services-markdown --save
```

## Usage

### Basic usage
```js
import ServiceMarkdown from '@s-ui/react-services-markdown'

return (
  <article className='myMarkdownFile'>
    <ServiceMarkdown src="https://mycdn.com/myfile.md"/>
  </article>
)
```

```sass
@import '~@schibstedspain/sui-theme/lib/index';

.myMarkdownFile {
  padding: $p-l;

  p {
    color: $c-gray;
    font-size: $fz-m;
  }
}
```

> **Find full description and more examples in the [demo page](/workbench/services/markdown/demo).**
