#!/usr/bin/env -S npx tsx

import {Option, program} from 'commander'
import {createRequire} from 'node:module'

import {runNative} from '../src/build'

const require = createRequire(import.meta.url)

const {version} = require('../package.json')

program.version(version, '--version, -v')

program.command('scss', 'Generate scss theming variables')
program
  .command('native', {isDefault: true})
  .description('Generate native theming variables')
  .description('building native css tokens file')
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .option('-s, --selector <selector>', 'css selector of tokens container', ':root')
  .option('-m, --mode <selector>', 'color schemes of the config')
  .addOption(new Option('-p, --primitives', 'include primitives in the output').default(false).hideHelp())
  .action(runNative)

program.command('json', 'Generate json theming variables')

program.parse(process.argv)
