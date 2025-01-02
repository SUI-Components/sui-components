#!/usr/bin/env node --import tsx

import {program} from 'commander'
import {createRequire} from 'node:module'
import {run} from '../src/build.js'
const require = createRequire(import.meta.url)

const {version} = require('../package.json')

program.version(version, '--version, -v')

program.command('scss', 'Generate scss theming variables')
program.command('json', 'Generate json theming variables')

program
  .option('-c, --configuration <config>', 'configuration file route')
  .option('-o, --output <output>', 'output file route')
  .option('-p, --primitive', 'include primitives in the output', false)
  .description('tokens result')
  .action(run)

program.parse(process.argv)
