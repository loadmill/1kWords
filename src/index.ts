import * as core from '@actions/core';
import * as github from '@actions/github';

function run() {

  if (github.context.eventName !== "pull_request") {
    core.setFailed("emoji validation should only run on pull requests");
    return;
  }

  console.log(`The PR title is ${github.context.payload.pull_request?.title}`);

}

run();
