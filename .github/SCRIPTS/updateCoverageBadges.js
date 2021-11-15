const fs = require('fs')
const path = require('path')

const regex = /!\[(?<alt>.*?)]\((?<filename>.*?)(?="|\))(?<optionalpart>".*")?\)/g

const THRESHOLDS = Object.freeze({
  0: '000000',
  30: '330000',
  40: '550000',
  50: 'AA0000',
  60: 'red',
  70: 'orange',
  75: 'yellow',
  80: 'yellowgreen',
  85: 'green',
  90: 'brightgreen'
})

const colorThresholds = {
  lines: Object.assign({}, THRESHOLDS),
  statements: Object.assign({}, THRESHOLDS),
  functions: Object.assign({}, THRESHOLDS),
  branches: Object.assign({}, THRESHOLDS)
}

const getShield = ({key, value}) => {
  const colorScale = colorThresholds[key]
  if (colorScale === undefined) {
    return ``
  }
  const color = Object.entries(colorScale).reduce(
    (accumulator, [currentKey, currentValue]) => {
      return parseInt(currentKey, 10) < value ? currentValue : accumulator
    },
    Object.entries(colorScale).sort(([aKey, aValue], [bKey, bValue]) => {
      return parseInt(aKey, 10) > parseInt(bKey, 10) ? 1 : -1
    })[0][1]
  )
  return `https://shields.io/badge/${encodeURIComponent(
    key
  )}-${encodeURIComponent(value)}%25-${color}`
}

const readReadmeContent = () => {
  const file = fs.readFileSync(path.join(__dirname, '..', 'README.md'), {
    flag: 'r',
    encoding: 'utf8'
  })
  return file
}

const saveReadmeContent = string =>
  fs.writeFileSync(path.join(__dirname, '..', 'README.md'), string, {
    encoding: 'utf8'
  })

/**
 * @param {{
 *  github: InstanceType<typeof import('@actions/github/lib/utils').GitHub>,
 *  context: import('@actions/github/lib/context').Context,
 *  core: import('@actions/core'),
 *  exec: import('@actions/exec')
 * }} param0
 * @param {string} markdownFilePath: MD coverage badge file
 * @param {{
 *  currentPCTStatements: {Number},
 *  currentPCTBranches: {Number},
 *  currentPCTFunctions: {Number},
 *  currentPCTLines: {Number}
 * }} param2
 */
module.exports = async function exportCoverageFromMarkdownShields(
  {github, context, core, exec},
  markdownFilePath,
  {
    currentPCTStatements = 0,
    currentPCTBranches = 0,
    currentPCTFunctions = 0,
    currentPCTLines = 0
  }
) {
  const currentCoverage = {
    statements: {pct: currentPCTStatements},
    branches: {pct: currentPCTBranches},
    functions: {pct: currentPCTFunctions},
    lines: {pct: currentPCTLines}
  }

  core.info('Loading markdown')
  let readmeContent = readReadmeContent()
  core.info('markdown loaded')

  core.info('Loading badges')
  const matches = readmeContent.matchAll(regex)
  matches.length && core.info('Badges loaded')

  for (const match of matches) {
    const {alt} = match?.groups
    if (currentCoverage[alt]) {
      const shield = getShield({key: alt, value: currentCoverage[alt].pct})
      readmeContent = readmeContent.replace(match[0], `![${alt}](${shield})`)
    }
  }

  core.info('Updating markdown badges')
  saveReadmeContent(readmeContent)
  core.info('Updated markdown badges')
}
