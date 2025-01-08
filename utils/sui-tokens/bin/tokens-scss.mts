#!/usr/bin/env -S npx tsx

import {Command} from 'commander'

import {runSCSS} from '../src/build'

const program = new Command()

program
  .description('building scss tokens file')
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .option('-s, --selector <selector>', 'css selector of tokens container', ':root')
  .option('-m, --mode <selector>', 'color schemes of the config')
  .option('-p, --primitives', 'include primitives in the output', false)
  .action(runSCSS)

program.parse(process.argv)
