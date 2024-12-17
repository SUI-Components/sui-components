#!/usr/bin/env node --import tsx

import {Command} from 'commander'

import {runSCSS} from '../src/build.ts'

const program = new Command()

program
  .description('building scss tokens file')
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .action(runSCSS)

program.parse(process.argv)