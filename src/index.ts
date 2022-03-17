import * as github from '@actions/github';

function run() {

  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  console.log(`The PR title is ${github.context.payload.title}`);

}

run();
