import * as github from '@actions/github';

function run() {

  console.log(`action starting`);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

}

run();
