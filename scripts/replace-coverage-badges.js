const fs = require('fs')
const path = require('path')

const regex = /!\[(?<alt>.*?)]\((?<filename>.*?)(?="|\))(?<optionalpart>".*")?\)/g

const colorThresholds = {
  lines: {
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
  },
  statements: {
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
  },
  functions: {
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
  },
  branches: {
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
  }
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

const getCoverageResults = () => {
  const files = fs.readFileSync(
    path.join(__dirname, '..', 'coverage', 'coverage.json'),
    {flag: 'r', encoding: 'utf8'}
  )

  const {
    total: {lines, statements, functions, branches}
  } = JSON.parse(files)
  return {lines, statements, functions, branches}
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

;(async () => {
  const coverageFileContent = getCoverageResults()
  let readmeContent = readReadmeContent()
  const matches = readmeContent.matchAll(regex)
  for (const match of matches) {
    const {alt} = match?.groups
    if (coverageFileContent[alt]) {
      const shield = getShield({key: alt, value: coverageFileContent[alt].pct})
      readmeContent = readmeContent.replace(match[0], `![${alt}](${shield})`)
    }
  }
  saveReadmeContent(readmeContent)
})()
