const fs = require('fs')

const regex = {
  shield: /!\[(?<alt>.*?)]\((?<filename>.*?)(?="|\))(?<optionalPart>".*")?\)/g,
  pct: /(?<=\/shields.io\/badge\/)(?<pct>.*?)(?=%25\-)/g
}

/**
 * @param {{
 *  github: InstanceType<typeof import('@actions/github/lib/utils').GitHub>,
 *  context: import('@actions/github/lib/context').Context,
 *  core: import('@actions/core'),
 *  exec: import('@actions/exec')
 * }} param0
 * @param {string} markdownFilePath: MD coverage badge file
 */
module.exports = async function exportCoverageFromMarkdown(
  {github, context, core, exec},
  markdownFilePath
) {
  core.debug('Loading markdown coverage badges')
  let markdownContent
  try {
    markdownContent = fs.readFileSync(markdownFilePath, {
      flag: 'r',
      encoding: 'utf8'
    })
  } catch (error) {
    core.error(
      `Error ${error}, ${markdownFilePath} markdown file does not exist`
    )
  }

  const matches = markdownContent.matchAll(regex.shield)

  for (const match of matches) {
    const {alt, filename, optionalPart} = match?.groups
    const [type, pct] = (filename.match(regex.pct) || [''])[0].split('-')
    if (type) {
      core.exportVariable(`coverage_${type}_master`, parseFloat(pct))
    }
  }
}
