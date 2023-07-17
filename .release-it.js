const version = '${version}';

module.exports = {
  "npm": false,
  "git": {
    "commitMessage": `released version v${version} [no ci]`,
    "tagName": `v${version}`,
    "requireCleanWorkingDir": false,
    "push": true,
    "pushRepo": "https://github.com/airwaycai/monorepo-release-it.git",
    "commitsPath": ".",
    "requireCommits": true,
    "requireCommitsFail": false,
    "requireBranch": ["feature-mono-workspaces-indivadual"]
  },
  "github": {
    "release": true,
    "releaseName": `v${version}`,
  },
  "plugins": {
    "./scripts/workspaces-independent.mjs": {

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