/*
Here we define, as the name implies, the common paths 
for our Webpack configurations. 
PROJECT_ROOT needs to look one directory up as we are 
working under build-utils directory 
(one level down from the actual root path in our project).
*/

const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname, "../");

module.exports = {
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, "dist"),
  appEntry: path.join(PROJECT_ROOT, "src")
};
