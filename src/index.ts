// import * as core from '@actions/core';
import * as github from '@actions/github';

function run() {
  // const name: string = core.getInput('my_input');
  // if (name) {
  //   core.debug(`Hello ${name}!`);
  //   return core.setOutput('my_output', `Hello ${name}!`);
  // }
  // core.setFailed('my_input not specified!');

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

}

run();
