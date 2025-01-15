#!/usr/bin/env -S npx tsx

import {Command, Option} from 'commander'

import {runSCSS} from '../src/build'

const program = new Command()

program
  .description('building scss tokens file')
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .option('-s, --selector <selector>', 'css selector of tokens container', ':root')
  .option('-m, --mode <selector>', 'color schemes of the config')
  .addOption(new Option('-p, --primitives', 'include primitives in the output').default(false).hideHelp())
  .action(runSCSS)

program.parse(process.argv)
