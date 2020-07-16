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
  tests: {
    [STATUS_STATES.KO]: 'Failed passing tests ❌',
    [STATUS_STATES.OK]: 'All tests passed successfully ✅',
    [STATUS_STATES.RUN]: 'Testing components...'
  },
  bundle: {
    [STATUS_STATES.KO]: 'Bundling failed ❌',
    [STATUS_STATES.OK]: 'Bundle completed 📦',
    [STATUS_STATES.RUN]: 'Creating bundle...👷‍♀️'
  },
  install: {
    [STATUS_STATES.KO]: 'Failed installing packages',
    [STATUS_STATES.OK]: 'All packages installed',
    [STATUS_STATES.RUN]: 'Installing packages... 📡'
  },
  deploy: {
    [STATUS_STATES.KO]: 'Deploy has failed',
    [STATUS_STATES.OK]: 'Deployment has completed 🚀',
    [STATUS_STATES.RUN]: 'Deploying your app... 🚀'
  }
}

const [, , stateKey = 'KO', targetUrl = buildUrl] = process.argv
const [owner, repo] = repoSlug.split('/')
const state = STATUS_STATES[stateKey]

const requestParams = {
  context: `${STATUS_CONTEXT} (${topic})`,
  description: STATUS_DESCRIPTION[topic][state],
  owner,
  repo,
  sha: commit,
  state,
  target_url: targetUrl
}

const octokit = new Octokit({auth})
octokit.request('POST /repos/{owner}/{repo}/statuses/{sha}', requestParams)
