const {writeFileSync} = require('fs-extra')
const path = require('path')
const glob = require('glob')

const content = `assets
demo
src
test
CHANGELOG.md`

glob('components/*/*/package.json', (_, files) => {
  files.forEach(file => {
    const ignoreFileName = file.replace('/package.json', '/.npmignore')
    const fullPath = path.join(process.cwd(), ignoreFileName)
    writeFileSync(fullPath, content)
  })
})
