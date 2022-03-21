import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/action';

async function run() {

  if (github.context.eventName !== 'pull_request') {
    core.setFailed('emoji validation should only run on pull requests');
    return;
  }

  const pullRequest = github.context.payload.pull_request || { title: '', user: {}, number: 0 }
  const pullRequestTitle = pullRequest.title
  const pullRequestUser = pullRequest.user;

  console.log(`The PR title is "${pullRequestTitle}"`);

  // Regular expression to match strings starting with emoji
  const regexExp = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]).*/gi;

  if (!regexExp.test(pullRequestTitle)) {

    if (pullRequestUser.type === 'Bot') {
      const response = await updateTitle(pullRequest, '🤖');
      
      core.info(`Update PR response: ${response.status}`);
      if (response.status !== 200) {
        core.error("Updating the pull request title has failed");
      }
      return;
    }

    core.setFailed("Pull request title does not start with emoji");
    return;
  }

}

async function updateTitle(pullRequest: { number: any; title?: any; }, addedEmoji: string) {

  const request = {
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    pull_number: pullRequest.number,
    title: addedEmoji + ' ' + pullRequest.title,
  };
  
  return await new Octokit().pulls.update(request);
}

run();
