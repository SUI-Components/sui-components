#!/usr/bin/env node

const path = require('path')
const fse = require('fs-extra')
const walker = require('walker')
const globby = require('globby')
const {getSpawnPromise} = require('@s-ui/helpers/cli')

const themesPkgs = {
  '@schibstedspain/cf-theme': '1',
  '@schibstedspain/fc-theme': '10',
  '@schibstedspain/ij-theme': '1',
  '@schibstedspain/mt-theme': '4',
  '@schibstedspain/nc-theme': '1',
  '@schibstedspain/vb-theme': '1',
  '@schibstedspain/ma-theme': '1',
  '@schibstedspain/ep-theme': '1'
}

const writeFile = (path, body) => {
  return new Promise((resolve, reject) => {
    fse.outputFile(path, body, err => {
      if (err) {
        console.error(`Fail modifying ${path}`) // eslint-disable-line
        reject(err)
      } else {
        console.log(`Modified ${path}`) // eslint-disable-line
        resolve()
      }
    })
  })
}

const createDir = path => {
  return new Promise((resolve, reject) => {
    fse.mkdirp(path, err => {
      if (err) {
        console.error(`Fail creating ${path}`) // eslint-disable-line
        reject(err)
      } else {
        console.log(`Created ${path}`) // eslint-disable-line
        resolve()
      }
    })
  })
}

const getThemesList = () => {
  const themes = []
  return new Promise((resolve, reject) => {
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
    Object.keys(themesPkgs).reduce((acc, pkg) => [...acc, pkg], [
      'i',
      '--no-save'
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
  paths.filter(p => p.match(/\/demo\/\w+\/\w+$/)).forEach(async demo => {
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
      console.log('Err:', e) // eslint-disable-line
    }
  })
}
;(async () => {
  const themes = await getThemesList()
  await installThemesPkgs()
  await writeThemesInDemoFolders(themes)
})()
