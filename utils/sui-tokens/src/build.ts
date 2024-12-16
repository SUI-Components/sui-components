// eslint-disable-file no-console  @typescript-eslint/strict-boolean-expressions

import {existsSync, mkdirSync, writeFileSync} from 'fs'
import path from 'path'

import chalk from 'chalk'
import chroma from 'chroma-js'
import {deepmerge} from 'deepmerge-ts'
import process from 'node:process'

import {colorParser, colorRampParser} from './checker'
import defaultTokensConfig from './default.tokens.config'
import {generate} from './generate'
import type {Theme, ThemePrimitive} from './types'

const colorFn = (colorSpace: ThemePrimitive['colorSpace']) => (v: string) => {
  switch (colorSpace) {
    case 'hex':
      return chroma(v).css()
    case 'rgb':
      return chroma(v).css('rgb')
  }
}

export function build(tokensConfig?: Theme) {
  const buildPrimitive = (primitive: ThemePrimitive) => {
    const colorSpace = primitive?.colorSpace
    const colorTx = colorFn(colorSpace)
    return {
      prefix: primitive.prefix,
      color: Object.entries(primitive.color).reduce((acc, [key, value]) => {
        if (typeof value === 'string' && colorParser.safeParse(value).success) {
          acc[key] = colorTx(value)
        } else if (colorRampParser.safeParse(value).success) {
          acc[key] = Object.entries(value).reduce((acc, [rampKey, rampValue]) => {
            acc[rampKey] = colorTx(rampValue)
            return acc
          }, {})
        }
        return acc
      }, {}),
      colorSpace: primitive.colorSpace,
      opacity: primitive.opacity,
      fontSize: primitive.fontSize,
      fontFamily: primitive.fontFamily,
      size: primitive.size,
      elevation: primitive.elevation
    }
  }

  const protoPrimitive =
    tokensConfig?.primitive != null
      ? deepmerge(defaultTokensConfig.primitive, tokensConfig.primitive)
      : defaultTokensConfig.primitive

  const primitive = buildPrimitive(protoPrimitive)
  const semantic =
    tokensConfig?.semantic != null
      ? deepmerge(
          defaultTokensConfig.semantic(buildPrimitive(defaultTokensConfig.primitive)),
          tokensConfig.semantic(primitive)
        )
      : defaultTokensConfig.semantic(primitive)

  return {
    primitive,
    semantic
  }
}

export async function loadTokensConfig(tokensConfigPath: string = '') {
  try {
    const configFileRoute = path.join(process.cwd(), tokensConfigPath)

    if (existsSync(configFileRoute)) {
      const {default: config} = await import(configFileRoute)
      return config
    } else {
      console.log(chalk.blue('No configuration file found, using default configuration'))
      return {}
    }
  } catch (error) {
    chalk.red('💥 Something went wrong loading the custom configuration file', error)
  }
}

export async function writeTokensConfig(data: string, outputPath?: string) {
  if (outputPath !== undefined) {
    try {
      const {dir} = path.parse(path.join(process.cwd(), outputPath))
      if (!existsSync(dir)) {
        mkdirSync(dir, {recursive: true})
      }
      writeFileSync(`${path.join(process.cwd(), outputPath)}`, data)
    } catch (error) {
      console.log(chalk.red(`💥 Error writing file: ${error.message as string}`))
      process.exit(1)
    }
  } else {
    console.log(data)
    process.exit(0)
  }
}

export const runSCSS = async ({configuration, output}: {configuration?: string; output?: string}) => {
  console.log(chalk.blue('Loading tokens configuration'))
  const tokensConfig = await loadTokensConfig(configuration)
  console.log(chalk.blue('Building tokens'))
  console.log(chalk.green(JSON.stringify(tokensConfig, null, 2)))
  const result = build(tokensConfig)
  console.log(chalk.blue('Writing tokens'))
  await writeTokensConfig(generate.scss(result), output)
  console.log(chalk.blue('Done!'))
}

export const runJSON = async ({configuration, output}: {configuration?: string; output?: string}) => {
  console.log(chalk.blue('Loading tokens configuration'))
  const tokensConfig = await loadTokensConfig(configuration)
  console.log(chalk.blue('Building tokens'))
  console.log(chalk.green(JSON.stringify(tokensConfig, null, 2)))
  const result = build(tokensConfig)
  console.log(chalk.blue('Writing tokens'))
  await writeTokensConfig(generate.json(result), output)
  console.log(chalk.blue('Done!'))
}
