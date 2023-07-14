const packageName = process.env.npm_package_name;
const scope = packageName.split('/')[1];
const version = '${version}';

module.exports = {
  "npm": false,
  "git": {
    "commitMessage": `feat(${scope}): released version v${version} [no ci]`,
    "tagName": `${packageName}-v${version}`,
    "requireCleanWorkingDir": false,
    "push": true,
    "pushRepo": "https://github.com/airwaycai/monorepo-release-it.git",
    "commitsPath": ".",
    "requireCommits": true,
    "requireCommitsFail": false,
    "requireBranch": ["feature-mono-workspaces"]
  },
  "github": {
    "release": true,
    "releaseName": `${packageName}-v${version}`,
  },
  "plugins": {
    "@release-it-plugins/workspaces": {
      "workspaces": [
        "packages/*"
      ]
    },
    "@release-it/conventional-changelog": {
      "header": "# Changelog for sn-filter-pane and sn-listbox",
      "infile": "CHANGELOG.md",
      "preset": {
        "name": "conventionalcommits"
      }
    }
  }
};