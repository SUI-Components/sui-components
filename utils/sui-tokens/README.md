# sui-tokens
> Generates the semantic tokens styles file by a simple config file.

## Installation

```sh
$ npm install @s-ui/tokens --save-dev
```

## Configuration
The configuration files might follow the next structure:
[tokens.config.ts](https://github.com/SUI-Components/sui-components/blob/master/utils/sui-tokens/src/default.tokens.config.ts)

## Usage

By default, it generates the styles in native CSS format.

To see the resulting configuration, you can run the following command:
```sh
$ tokens -c <config.manifest.file.js>
```

To export the result on css format you can use the css script
```sh
$ tokens -c <config.manifest.file.js> -o <output.json>
```

```sh 

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
