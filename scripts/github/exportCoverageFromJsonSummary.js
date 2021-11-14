const fs = require('fs')

/**
 * @param {{
 *  github: InstanceType<typeof import('@actions/github/lib/utils').GitHub>,
 *  context: import('@actions/github/lib/context').Context,
 *  core: import('@actions/core'),
 *  exec: import('@actions/exec')
 * }} param0
 * @param {string} JSONSummaryFilePath: JSON summary report coverage file
 */
module.exports = async function exportCoverageFromJsonSummary(
  {github, context, core, exec},
  JSONSummaryFilePath
) {
  core.info('Loading JSON summary coverage')
  let coverageContent
  try {
    coverageContent = fs.readFileSync(JSONSummaryFilePath, {
      flag: 'r',
      encoding: 'utf8'
    })
    core.info('JSON summary loaded')
  } catch (error) {
    core.error(
      `Error ${error}, ${JSONSummaryFilePath} JSON summary file does not exist`
    )
  }

  // statements
  // branches
  // functions
  // lines

  core.info('Loading current coverages')
  Object.entries(coverageContent.total).forEach(([type]) => {
    Object.entries(coverageContent.total[type]).forEach(([key, value]) => {
      core.info(`Output: coverage_${type}_${key}_current: ${parseFloat(value)}`)
      core.setOutput(`coverage_${type}_${key}_current`, parseFloat(value))
    })
  })
  core.info('Current coverages loaded')
}
