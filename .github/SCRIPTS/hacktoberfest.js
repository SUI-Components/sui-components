

module.exports = async function exportCoverageFromMarkdownShields({github, context, core, exec}, senderNames = []) {
  const {
    workflow,
    eventName,
    actor,
    payload: {
      action,
      label: {
        name: labelName
      },
      sender: {
        login: sender
      },
      repository: {
        owner
      }
    }
  } = context

  console.log(context, {workflow, eventName, actor, action, labelName, sender, owner})

  if(senderNames.length === 0 || senderNames.includes(sender)) {
    // const { data } = await github.rest.projects.listForRepo({ ...repo });
    switch (action) {
      case 'unlabeled':
        break;
      case 'labeled':
        break;
      default:
        break;
    }
  }
}