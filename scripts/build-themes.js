#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path')
const {promisify} = require('util')
const exec = promisify(require('child_process').exec)
const fse = require('fs-extra')
const fs = require('fs/promises')
const globby = require('globby')

const INSTALL_FLAGS = ['--silent', '--no-save', '--no-audit', '--no-fund', '--no-package-lock']

const THEMES_PACKAGES = [
  '@adv-ui/adv-theme',
  '@adv-ui/cf-theme',
  '@adv-ui/ep-theme',
  '@adv-ui/fc-theme',
  '@adv-ui/hab-theme',
  '@adv-ui/hb-theme-v2',
  '@adv-ui/ij-theme',
  '@adv-ui/ma-theme',
  '@adv-ui/mt-theme',
  '@adv-ui/adit-boros-tcf-ui-consent'
]

const cwd = process.cwd()
const {CI, NODE_AUTH_TOKEN} = process.env

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
  console.log('[sui-studio] Getting themes list...')
  const files = await fs.readdir(path.join(__dirname, '..', 'themes'))
  return files.filter(file => !file.startsWith('_')).map(file => file.split('.')[0])
}

const installThemesPkgs = () => {
  console.log('[sui-studio] Installing themes packages...')
  return exec(`npm i ${THEMES_PACKAGES.join(' ')} ${INSTALL_FLAGS.join(' ')}`, {
    cwd
  })
}

const writeThemesInDemoFolders = async themes => {
  console.log('[sui-studio] Writing themes files on demos...')
  await exec('rm -Rf components/**/**/demo/themes', {
    cwd
  })

  const paths = await globby([path.join(cwd, 'components', '**', '**', 'demo'), '!**/node_modules/**'], {
    onlyDirectories: true,
    cwd
  })

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
        console.log('Error:', e)
      }
    })
}

;(async () => {
  if (CI && !NODE_AUTH_TOKEN) {
    console.log('[sui-studio] Skipping themes installation as NODE_AUTH_TOKEN is not available')
    return
  }

  const themes = await getThemesList()
  await installThemesPkgs()
  await writeThemesInDemoFolders(themes)
})()
