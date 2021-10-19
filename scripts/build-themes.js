#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path')
const {promisify} = require('util')
const exec = promisify(require('child_process').exec)
const fse = require('fs-extra')
const fs = require('fs/promises')
const globby = require('globby')

const INSTALL_FLAGS = [
  '--silent',
  '--no-optional',
  '--no-save',
  '--no-audit',
  '--no-fund',
  '--no-package-lock'
]

const THEMES_PACKAGES = [
  '@adv-ui/adv-theme',
  '@adv-ui/cf-theme',
  '@adv-ui/ep-theme',
  '@adv-ui/fc-theme',
  '@adv-ui/hab-theme',
  '@adv-ui/ij-theme',
  '@adv-ui/ma-theme',
  '@adv-ui/mt-theme'
]

const cwd = process.cwd()
const {NPM_TOKEN} = process.env

const writeFile = (path, body) =>
  fse
    .outputFile(path, body)
    .then(() => {
      console.log(`Modified ${path}`)
    })
    .catch(err => {
      console.error(`Fail modifying ${path}`)
      throw err
    })

const checkFileExists = path => fse.pathExists(path)

const getThemesList = async () => {
  const files = await fs.readdir(path.join(__dirname, '..', 'themes'))
  return files
    .filter(file => !file.startsWith('_'))
    .map(file => file.split('.')[0])
}

const installThemesPkgs = () =>
  exec(`npm i ${THEMES_PACKAGES.join(' ')} ${INSTALL_FLAGS.join(' ')}`, {
    cwd
  })

const writeThemesInDemoFolders = async themes => {
  await exec('rm -Rf components/**/**/demo/themes', {
    cwd
  })

  const paths = await globby(
    [path.join(cwd, 'components', '**', '**', 'demo'), '!**/node_modules/**'],
    {onlyDirectories: true, cwd}
  )

  paths
    .filter(p => p.match(/\/components\/\w+\/\w+\/demo$/))
    .forEach(async demoPath => {
      try {
        const [, component, category] = demoPath.split('/').reverse()
        const hasDemoStyles = await checkFileExists(`${demoPath}/index.scss`)
        await Promise.all(
          themes.map(theme =>
            writeFile(
              `${demoPath}/themes/${theme}.scss`,
              `@import 'themes/${theme}';
${hasDemoStyles ? `@import '../index.scss';` : ''}
@import 'components/${category}/${component}/src/index.scss';
`
            )
          )
        )
      } catch (e) {
        console.log('Err:', e)
      }
    })
}

;(async () => {
  if (!NPM_TOKEN) return

  const themes = await getThemesList()
  await installThemesPkgs()
  await writeThemesInDemoFolders(themes)
})()
