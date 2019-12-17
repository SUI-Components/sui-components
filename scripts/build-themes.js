#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path')
const fse = require('fs-extra')
const walker = require('walker')
const globby = require('globby')
const {getSpawnPromise} = require('@s-ui/helpers/cli')

const themesPkgs = [
  '@schibstedspain/cf-theme',
  '@schibstedspain/fc-theme',
  '@schibstedspain/ij-theme',
  '@schibstedspain/mt-theme',
  '@schibstedspain/nc-theme',
  '@schibstedspain/vb-theme',
  '@schibstedspain/ma-theme',
  '@schibstedspain/ep-theme',
  '@schibstedspain/hab-theme'
]

const writeFile = (path, body) => {
  return fse
    .outputFile(path, body)
    .then(() => {
      console.log(`Modified ${path}`)
    })
    .catch(err => {
      console.error(`Fail modifying ${path}`)
      throw err
    })
}

const createDir = path => {
  return fse
    .mkdirp(path)
    .then(() => {
      console.log(`Created ${path}`)
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

const INSTALL_WITH_NPM = [
  'npm',
  ['i', '--no-save', '--no-audit', '--no-package-lock']
]
const INSTALL_WITH_YARN = [
  'yarn',
  [
    'install',
    '--no-lockfile',
    '--non-interactive',
    '--registry=https://registry.npmjs.org'
  ]
]

const [installCommand, installArgs] = process.env.NPM_RC
  ? INSTALL_WITH_YARN
  : INSTALL_WITH_NPM

const installThemesPkgs = () =>
  getSpawnPromise(
    installCommand,
    themesPkgs.reduce((acc, pkg) => [...acc, pkg], installArgs),
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
        await Promise.all(
          themes.map(theme =>
            writeFile(
              `${demo}/themes/${theme}.scss`,
              `
@import '../../../../themes/${theme}';
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
