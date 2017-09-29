# Contributing to SUI Components

The following is a set of guidelines for contributing with developing new components.

## Getting started

### Environment

To develop new packages, you only need to install Node with NPM. Find below the default versions this repo was built with:
* Node: `v6+`
* NPM: `v3`

### Main commands

This repo is managed with [sui-studio](https://www.npmjs.com/package/@s-ui/studio) tool.

Some base commands (based on sui-studio) you should acknowledge :
* `npm run generate <category> <name>` to create a new component.
* `npm run co` to commit your changes with a wizard.
* `npm run release` publish all your changes for all packages (once your PR is merge).

## Naming Conventions

### Event Handlers

Many presentational components give feedback from user interaction calling provided callbacks.

#### `on{Event}`

```html
<MyButton
  onClick={onClickHandler}
  onHover={onHoverHandler}
/>
<MyTextArea
  onScroll={onScrollHandler}
  onChange={onChangeHandler}
/>
```

#### `on{SubContext}{Event}`
For compound component, we may need to provide several callbacks.

```html
<MyDialogModal
  onClick={onClickHandler}
  onCancelClick={onCancelClickHandler}
/>
<MyFilters
  onChange={onChangeHandler}
  onFilterChange={onFilterChangeHandler}
  onResetClick={onResetClickHandler}
/>
```
