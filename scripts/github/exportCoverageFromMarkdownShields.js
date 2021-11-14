const fs = require('fs')

const regex = {
  shield: /!\[(?<alt>.*?)]\((?<filename>.*?)(?="|\))(?<optionalPart>".*")?\)/g,
  pct: /(?<=\/shields.io\/badge\/)(?<pct>.*?)(?=%25-)/g
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
module.exports = async function exportCoverageFromMarkdownShields(
  {github, context, core, exec},
  markdownFilePath
) {
  core.info('Loading markdown coverage badges')
  let markdownContent
  try {
    markdownContent = fs.readFileSync(markdownFilePath, {
      flag: 'r',
      encoding: 'utf8'
    })
    core.info('Markdown loaded')
  } catch (error) {
    core.error(
      `Error ${error}, ${markdownFilePath} markdown file does not exist`
    )
  }

  core.info('Loading badges')
  const matches = markdownContent.matchAll(regex.shield)

  matches.length && core.info('Badges loaded')
  for (const match of matches) {
    const {
      // alt,
      filename
      // optionalPart
    } = match.groups
    const [type, pct] = (filename.match(regex.pct) || [''])[0].split('-')
    if (type) {
      core.info(`Output: coverage_${type}_pct_master: ${parseFloat(pct)}`)
      core.setOutput(`coverage_${type}_pct_master`, parseFloat(pct))
    }
  }
}
