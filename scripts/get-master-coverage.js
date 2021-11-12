const fs = require('fs')
const path = require('path')

const result = {statements: 0, branches: 0, functions: 0, lines: 0}

const regex = {
  shield: /!\[(?<alt>.*?)]\((?<filename>.*?)(?="|\))(?<optionalPart>".*")?\)/g,
  pct: /(?<=\/shields.io\/badge\/)(?<pct>.*?)(?=%25\-)/g
}

const readReadmeContent = () => {
  let file = ''
  try {
    file = fs.readFileSync(path.join(__dirname, '..', 'README.md'), {
      flag: 'r',
      encoding: 'utf8'
    })
  } catch (e) {}
  return file
}

;(function main() {
  const content = readReadmeContent()
  const matches = content.matchAll(regex.shield)
  for (const match of matches) {
    const {alt, filename, optionalPart} = match?.groups
    const [type, pct] = (filename.match(regex.pct) || [''])[0].split('-')
    if (type) {
      result[type] = parseFloat(pct)
    }
  }
  console.log(JSON.stringify(result))
})()
