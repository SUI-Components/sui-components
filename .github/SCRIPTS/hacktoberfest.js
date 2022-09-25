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

  console.log({
    workflow,
    eventName,
    actor,
    action,
    labelName,
    sender,
    ownerName,
    repositoryName,
  })

  if (senderNames.length === 0 || senderNames.includes(sender)) {
    const {data} = await github.rest.projects.listForOrg({
      org: ownerName,
      state: 'open'
      //owner: owner,
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
