const readdirSync = require('fs').readdirSync
const statSync = require('fs').statSync
const path = require('path')
const BASE_DIR = process.cwd() + '/components'

const onlyFolders = (filePath) => statSync(filePath).isDirectory()
const flatten = (x, y) => x.concat(y)

var packageScopes = readdirSync(BASE_DIR)
  .map(file => path.join(BASE_DIR, file))
  .filter(onlyFolders)
  .map(folder => readdirSync(folder)
    .map(file => path.join(folder, file))
    .filter(onlyFolders)
  ).reduce(flatten, [])
  .map(folder => {
    const [component, category] = folder.split('/').reverse()
    return category + '/' + component
  })

var otherScopes = [
  'META',
  'examples'
]

module.exports = {
  types: [
    {value: 'feat', name: 'feat: Add a new feature'},
    {value: 'fix', name: 'fix: Submit a bug fix'},
    {value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature. Includes code style changes.'},
    {value: 'test', name: 'test: Add tests only'},
    {value: 'docs', name: 'docs: Documentation only changes'},
    {value: 'release', name: 'release: Publish a new version of a package.'},
    {value: 'chore', name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation. META only.'},
    {value: 'perf', name: 'perf: A code change that improves performance'}
  ],

  scopes: packageScopes.concat(otherScopes)
    .sort()
    .map(name => ({name})),

  scopeOverrides: {
    chore: [
      {name: 'META'}
    ],
    feat: packageScopes,
    fix: packageScopes,
    release: packageScopes,
    test: packageScopes
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix']
}
