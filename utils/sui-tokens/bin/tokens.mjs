#!/usr/bin/env node --import tsx

import {program} from 'commander'
import {createRequire} from 'node:module'
const require = createRequire(import.meta.url)

const {version} = require('../package.json')

program.version(version, '--version, -v')

program.command('scss', 'Generate scss theming variables')

program.parse(process.argv)
