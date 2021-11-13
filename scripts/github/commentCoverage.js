const getCommentBody = ({currentCoverage, masterCoverage}) => {
  const coverageDiff = {statements: '', branches: '', functions: '', lines: ''}
  const SYMBOL = {1: '↑', 0: '＝', [-0]: '＝', [-1]: '↓'}
  Object.entries(masterCoverage).forEach(([key, value]) => {
    coverageDiff[key] =
      value === 0
        ? ''
        : ` **≍ ${Math.round(Math.abs(value - currentCoverage[key].pct) * 100) /
            100}${SYMBOL[Math.sign(value - currentCoverage[key].pct)]}**`
  })
  return `
|            |                               %                             |              COVERED                 |                 TOTAL              |
|-----------:|:------------------------------------------------------------:|:------------------------------------:|:----------------------------------:|
| STATEMENTS | ${currentCoverage.statements.pct}%${coverageDiff.statements} | ${currentCoverage.statements.covered} | ${currentCoverage.statements.total} |
|   BRANCHES |  ${currentCoverage.branches.pct}%${coverageDiff.branches}    |  ${currentCoverage.branches.covered}  |  ${currentCoverage.branches.total}  |
|  FUNCTIONS | ${currentCoverage.functions.pct}%${coverageDiff.functions}   |  ${currentCoverage.functions.covered} |  ${currentCoverage.functions.total} |
|      LINES |    ${currentCoverage.lines.pct}%${coverageDiff.lines}        |    ${currentCoverage.lines.covered}   |    ${currentCoverage.lines.total}   |`
}

/**
 * @param {{
 *  github: InstanceType<typeof import('@actions/github/lib/utils').GitHub>,
 *  context: import('@actions/github/lib/context').Context,
 *  core: import('@actions/core'),
 *  exec: import('@actions/exec')
 * }} param0
 * @param {string} readmeFilePath: MD coverage badge file
 */
module.exports = async function commentCoverage(
  {github, context, core, exec},
  currentCoverage = {statements: 0, branches: 0, functions: 0, lines: 0},
  masterCoverage = {statements: 0, branches: 0, functions: 0, lines: 0}
) {
  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: getCommentBody({currentCoverage, masterCoverage})
  })
  core.notice('Coverage Commented on PR')
}
