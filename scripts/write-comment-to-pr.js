#!/usr/bin/env node

const {Octokit} = require('@octokit/core')
const {
  GH_TOKEN: auth,
  SUI_TOPIC: topic,
  TRAVIS_BUILD_WEB_URL: buildUrl,
  TRAVIS_REPO_SLUG: repoSlug,
  TRAVIS_PULL_REQUEST_SHA: commit
} = process.env

const STATUS_CONTEXT = '@s-ui/ci'
const STATUS_STATES = {
  KO: 'error',
  RUN: 'pending',
  OK: 'success'
}
const STATUS_DESCRIPTION = {
  bundle: {
    [STATUS_STATES.KO]: 'Bundling failed',
    [STATUS_STATES.RUN]: 'Creating bundle...'
  },
  deploy: {
    [STATUS_STATES.KO]: 'Deploy failed',
    [STATUS_STATES.OK]: 'Deployment has completed',
    [STATUS_STATES.RUN]: 'Deploying your app...'
  },
  install: {
    [STATUS_STATES.KO]: 'Failed installing packages',
    [STATUS_STATES.RUN]: 'Installing packages'
  },
  tests: {
    [STATUS_STATES.KO]: 'Failed passing tests',
    [STATUS_STATES.RUN]: 'Testing components...'
  }
}

const [, , state = STATUS_STATES.KO] = process.argv
const [owner, repo] = repoSlug.split('/')

const octokit = new Octokit({auth})

;(async () => {
  await octokit.request('POST /repos/{owner}/{repo}/statuses/{sha}', {
    context: STATUS_CONTEXT,
    description: STATUS_DESCRIPTION[topic][state],
    owner,
    repo,
    sha: commit,
    state,
    target_url: buildUrl
  })
})()
