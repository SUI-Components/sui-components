# Contributing to SUI Components

The following is a set of guidelines for contributing with developing new components.

## Getting started

### Environment

To develop new packages, you only need to install Node with NPM. Find below the default versions this repo was built with:
* Node: `v16+`
* NPM: `v7`

### Main commands

This repo is managed with [sui-studio](https://www.npmjs.com/package/@s-ui/studio) tool.

Some base commands (based on sui-studio) you should acknowledge :
* `npm run generate <category> <name>` to create a new component.
* `npm run co` to commit your changes with a wizard.
* `npm run release` publish all your changes for all packages (once your PR is merge).

## Commit Conventions
Any commit message given has to follow the pattern:
`[TYPE](components/[CATEGORY]/[COMPONENT]): [MESSAGE]`

valid `[TYPE]`:

| [TYPE]   | description                                                                                                              | action                           |
|----------|--------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| feat     | New features on existing components or even new components also.                                                         | CI updates the published version |
| fix      | Any kind of update which fixes and error or a bug.                                                                       | CI updates the published version |
| docs     | for documentation only changes                                                                                           |                                  |
| refactor | for necesary refactors that never change the behavior and does not affect to the published component results             |                                  |
| perf     | for necesary performance refactors that never change the behavior and does not affect to the published component results |                                  |
| test     | for adding tests                                                                                                         |                                  |
| chore    | for project structure changes                                                                                            |                                  |
| release  | do not use                                                                                                               |                                  |

Ex:

`feat(component/atom/button): this is a commit message example of a feature in Atom Button Component`

`fix(component/molecule/inputTags): this is a commit message example of a bug fix in Molecule InputTags Component`

When merging a PR with that message, the CI will publish a new minor version of AtomButton/InputTags Component in npm.

`docs(component/atom/image): this is a commit message example of a documentation improvement on Atom Image`

When merging a PR with that message, the CI will **NOT** publish a new minor version of AtomImage Component in npm. 

## NPM Conventions
We only use major and minor incremental versioning, and never use the patch.

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
