const getCommentBody = ({currentCoverage, masterCoverage}) => {
  const coverageDiff = {statements: '', branches: '', functions: '', lines: ''}
  const SYMBOL = {1: '↑', 0: '＝', [-0]: '＝', [-1]: '↓'}
  Object.entries(masterCoverage).forEach(([key, value]) => {
    coverageDiff[key].pct =
      value.pct === 0
        ? ''
        : ` **≍ ${Math.round(
            Math.abs(value.pct - currentCoverage[key].pct) * 100
          ) / 100}${SYMBOL[Math.sign(value.pct - currentCoverage[key].pct)]}**`
  })
  return `
|       |                              STATEMENTS                               |                            BRANCHES                                   |                                   FUNCTIONS                             |                                LINES                             |
|------:|:---------------------------------------------------------------------:|:---------------------------------------------------------------------:|:-----------------------------------------------------------------------:|:----------------------------------------------------------------:|
|   ≍   |                      ${coverageDiff.statements}                       |                  ${coverageDiff.branches}                             |                           ${coverageDiff.functions}                     |                      ${coverageDiff.functions}                   |
|   %   |                   ${currentCoverage.branches.pct}                     |              ${currentCoverage.branches.pct}                          |                       ${currentCoverage.functions.pct}                  |                    ${currentCoverage.lines.pct}                  |
|  ABS  | ${currentCoverage.branches.covered}/${currentCoverage.branches.total} | ${currentCoverage.branches.covered}/${currentCoverage.branches.total} | ${currentCoverage.functions.covered}/${currentCoverage.functions.total} | ${currentCoverage.lines.covered}/${currentCoverage.lines.total}  |
`
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
  {
    masterPCTStatements = 0,
    masterPCTBranches = 0,
    masterPCTFunctions = 0,
    masterPCTLines = 0
  },
  {
    currentPCTStatements = 0,
    currentPCTBranches = 0,
    currentPCTFunctions = 0,
    currentPCTLines = 0,
    currentTotalStatements = 0,
    currentTotalBranches = 0,
    currentTotalFunctions = 0,
    currentTotalLines = 0,
    currentCoveredStatements = 0,
    currentCoveredBranches = 0,
    currentCoveredFunctions = 0,
    currentCoveredLines = 0
  }
) {
  const currentCoverage = {
    statements: {
      pct: parseFloat(currentPCTStatements),
      total: parseFloat(currentTotalStatements),
      covered: parseFloat(currentCoveredStatements)
    },
    branches: {
      pct: parseFloat(currentPCTBranches),
      total: parseFloat(currentTotalBranches),
      covered: parseFloat(currentCoveredBranches)
    },
    functions: {
      pct: parseFloat(currentPCTFunctions),
      total: parseFloat(currentTotalFunctions),
      covered: parseFloat(currentCoveredFunctions)
    },
    lines: {
      pct: parseFloat(currentPCTLines),
      total: parseFloat(currentTotalLines),
      covered: parseFloat(currentCoveredLines)
    }
  }
  const masterCoverage = {
    statements: {
      pct: parseFloat(masterPCTStatements)
    },
    branches: {
      pct: parseFloat(masterPCTBranches)
    },
    functions: {
      pct: parseFloat(masterPCTFunctions)
    },
    lines: {
      pct: parseFloat(masterPCTLines)
    }
  }
  await github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: getCommentBody({currentCoverage, masterCoverage})
  })
  core.notice('Coverage Commented on PR')
}
