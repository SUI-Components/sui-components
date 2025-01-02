# sui-tokens
> A set of dependencies of all SUI components.

It provides:
* Unified dependencies versions across components
* Minified boilerplate

## Installation

```sh
$ npm install @s-ui/tokens --save-dev
```

## Usage

To see the resulting configuration, you can run the following command:
```sh
$ tokens -c <config.manifest.file.js>
```

To export the result on json format you can use the JSON script

```sh
$ tokens json -c <config.manifest.file.js> -o <output.json>
```

To export the result on SCSS format you can use the scss script

```sh
$ tokens scss -c <config.manifest.file.js> -o <output.scss>
```

To see other configurations you can use the -h flag

```sh
$ tokens -h
```

...or use it on each script

```sh
$ tokens json -h
```

```shell
$ tokens scss -h
```
