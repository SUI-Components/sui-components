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
import type {ColorPrimitives, ColorRamp, PrimitiveTheme, SettingsTheme, Theme} from './types'

const colorFn = (colorSpace: SettingsTheme['colorSpace']) => (v: string) => {
  switch (colorSpace) {
    case 'hex':
      return chroma(v).css()
    case 'rgb':
      return chroma(v).css()
  }
}

export function build(tokensConfig?: Theme) {
  const buildPrimitive = (primitive: PrimitiveTheme, settings: SettingsTheme) => {
    const colorSpace = settings?.colorSpace
    const colorTx = colorFn(colorSpace)
    return {
      color: Object.entries(primitive.color as ColorPrimitives).reduce(
        (acc: any, [key, value]: [string, ColorRamp | string]) => {
          if (typeof value === 'string' && colorParser.safeParse(value).success) {
            acc[key] = colorTx(value) as string
          } else if (colorRampParser.safeParse(value).success) {
            acc[key] = Object.entries(value).reduce((acc: ColorRamp, [rampKey, rampValue]) => {
              acc[rampKey] = colorTx(rampValue) as string
              return acc
            }, {})
          }
          return acc
        },
        {}
      ),
      opacity: primitive.opacity,
      fontFamily: primitive.fontFamily,
      size: primitive.size,
      elevation: primitive.elevation
    }
  }

  const protoSettings =
    tokensConfig?.settings != null
      ? deepmerge(defaultTokensConfig.settings, tokensConfig.settings)
      : defaultTokensConfig.settings

  const protoPrimitive =
    tokensConfig?.primitive != null
      ? deepmerge(defaultTokensConfig.primitive, tokensConfig.primitive)
      : defaultTokensConfig.primitive

  const primitive = buildPrimitive(protoPrimitive, protoSettings)
  const semantic =
    tokensConfig?.semantic != null
      ? deepmerge(
          defaultTokensConfig.semantic(
            buildPrimitive(defaultTokensConfig.primitive, defaultTokensConfig.settings),
            defaultTokensConfig.settings
          ),
          tokensConfig.semantic(primitive, protoSettings)
        )
      : defaultTokensConfig.semantic(primitive, protoSettings)

  return {
    settings: protoSettings,
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
    } catch (error: Error | any) {
      console.log(chalk.red(`💥 Error writing file: ${error.message as string}`))
      process.exit(1)
    }
  } else {
    console.log(data)
    process.exit(0)
  }
}

export const runSCSS = async ({
  configuration,
  output,
  selector,
  mode,
  primitive
}: {
  configuration?: string
  output?: string
  selector: string
  mode?: 'light' | 'dark'
  primitive: boolean
}) => {
  console.log(chalk.blue('Loading tokens configuration'))
  const tokensConfig = await loadTokensConfig(configuration)
  console.log(chalk.blue('Building tokens'))
  console.log(chalk.green(JSON.stringify(tokensConfig, null, 2)))
  const result = build(tokensConfig)
  console.log(chalk.blue('Writing tokens'))
  await writeTokensConfig(generate.scss(result, selector, mode), output)
  console.log(chalk.blue('Done!'))
}

export const runJSON = async ({
  configuration,
  output,
  primitive
}: {
  configuration?: string
  output?: string
  primitive: boolean
}) => {
  console.log(chalk.blue('Loading tokens configuration'))
  const tokensConfig = await loadTokensConfig(configuration)
  console.log(chalk.blue('Building tokens'))
  console.log(chalk.green(JSON.stringify(tokensConfig, null, 2)))
  const result = build(tokensConfig)
  console.log(chalk.blue('Writing tokens'))
  await writeTokensConfig(JSON.stringify(generate.json(result, {hasPrimitive: primitive}), null, 2), output)
  console.log(chalk.blue('Done!'))
}
