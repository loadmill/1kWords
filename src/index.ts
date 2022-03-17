import * as core from '@actions/core';
import * as github from '@actions/github';

function run() {

  if (github.context.eventName !== "pull_request") {
    core.setFailed("emoji validation should only run on pull requests");
    return;
  }

  const pullRequestTitle = github.context.payload.pull_request?.title || "";

  console.log(`The PR title is ${pullRequestTitle}`);

  // Regular expression to match strings starting with emoji
  const regexExp = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]).*/gi;

  if (! regexExp.test(pullRequestTitle)) {
    core.setFailed("Pull request title does not start with emoji");
    return;
  }

}

run();
