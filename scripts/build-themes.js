#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path')
const fse = require('fs-extra')
const walker = require('walker')
const globby = require('globby')
const {getSpawnPromise} = require('@s-ui/helpers/cli')

const IS_DEPLOYMENT = Boolean(process.env.NPM_RC)

const themesPkgs = [
  '@adv-ui/adv-theme',
  '@adv-ui/cf-theme',
  '@adv-ui/fc-theme',
  '@adv-ui/ij-theme',
  '@adv-ui/mt-theme',
  '@adv-ui/nc-theme',
  '@schibstedspain/vb-theme',
  '@adv-ui/ma-theme',
  '@adv-ui/ep-theme',
  '@adv-ui/hab-theme'
]

const writeFile = (path, body) => {
  return fse
    .outputFile(path, body)
    .then(() => {
      !IS_DEPLOYMENT && console.log(`Modified ${path}`)
    })
    .catch(err => {
      console.error(`Fail modifying ${path}`)
      throw err
    })
}

const checkFileExists = path => fse.pathExists(path)

const createDir = path => {
  return fse
    .mkdirp(path)
    .then(() => {
      !IS_DEPLOYMENT && console.log(`Created ${path}`)
    })
    .catch(err => {
      console.error(`Fail creating ${path}`)
      throw err
    })
}

const getThemesList = () => {
  const themes = []
  return new Promise(resolve => {
    walker(path.join(__dirname, '..', 'themes'))
      .on('file', theme => themes.push(theme))
      .on('end', () => {
        resolve(
          themes
            .map(theme => path.parse(theme).name)
            .filter(name => !name.match(/^_/))
        )
      })
  })
}

const installThemesPkgs = () =>
  getSpawnPromise(
    'npm',
    themesPkgs.reduce((acc, pkg) => [...acc, pkg], [
      'i',
      '--no-optional',
      '--no-save',
      '--no-audit',
      '--no-fund',
      '--no-package-lock'
    ]),
    {cwd: process.cwd()}
  )

const writeThemesInDemoFolders = async themes => {
  await getSpawnPromise('rm', ['-Rf', './demo/**/**/themes'], {
    cwd: process.cwd()
  })
  const paths = await globby(
    [path.join(process.cwd(), 'demo', '**', '**'), '!**/node_modules/**'],
    {onlyDirectories: true, cwd: process.cwd()}
  )
  paths
    .filter(p => p.match(/\/demo\/\w+\/\w+$/))
    .forEach(async demo => {
      try {
        const [, component] = demo.split('/demo/')
        await createDir(`${demo}/themes`)
        const hasDemoStyles = await checkFileExists(`${demo}/demo/index.scss`)
        await Promise.all(
          themes.map(theme =>
            writeFile(
              `${demo}/themes/${theme}.scss`,
              `
@import '../../../../themes/${theme}';
${hasDemoStyles ? `@import '../demo/index.scss';` : ''}
@import '../../../../components/${component}/src/index.scss';
        `.trim()
            )
          )
        )
      } catch (e) {
        console.log('Err:', e)
      }
    })
}

;(async () => {
  const themes = await getThemesList()
  await installThemesPkgs()
  await writeThemesInDemoFolders(themes)
})()
