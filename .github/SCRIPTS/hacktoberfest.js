module.exports = async function exportCoverageFromMarkdownShields(
  {github, context, core, exec},
  senderNames = []
) {
  const {
    workflow,
    eventName,
    actor,
    payload: {
      action,
      label: {name: labelName},
      sender: {login: sender},
      repository: {
        name: repositoryName,
        owner: {login: ownerName}
      }
    }
  } = context
  const orgName = core.getInput('org_name', {required: true})

  console.log({
    workflow,
    eventName,
    actor,
    action,
    labelName,
    sender,
    ownerName,
    repositoryName,
    orgName
  })

  if (senderNames.length === 0 || senderNames.includes(sender)) {
    const {data} = await github.rest.projects.listForOrg({
      owner: orgName,
      state: 'open'
      // repo: repositoryName
    })

    console.log(data)
    switch (action) {
      case 'unlabeled':
        break
      case 'labeled':
        break
      default:
        break
    }
  }
}
