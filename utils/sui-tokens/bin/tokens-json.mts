#!/usr/bin/env -S npx tsx

import {Command} from 'commander'

import {runJSON} from '../src/build'

const program = new Command()

program
  .description('building scss tokens file')
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .option('-p, --primitive', 'include primitives in the output', false)
  .action(runJSON)

program.parse(process.argv)
