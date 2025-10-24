# 4D Testing Extension
A unit testing extension for use with https://github.com/KyleKincer/testing

You need to have tests already set up for this to discover them so check out Kyle's repository on how to set up tests.
To use, install the extension, open a test file and hit play on a test.

This extension will discover tests and add a beaker icon to your sidebar. Click that to view the tests it discovered and play from there.

Tags are integrated where you can run your tags as a run profile in the testing tab and you can search for them in the filter as well.

## Test discovery configuration

By default, this extension will discover `*Test.4dm` files in common 4D locations and anywhere in the workspace:

- `Project/Sources/Classes/*Test.4dm`
- `**/*Test.4dm`

You can customize this via Settings (or `settings.json`) using the following keys:

- `4dTesting.testDiscovery.includeGlobs`: array of include globs (relative to each workspace folder)
- `4dTesting.testDiscovery.excludeGlobs`: array of exclude globs

Example settings.json:

```json
{
  "4dTesting.testDiscovery.includeGlobs": [
    "Project/Sources/Classes/*Test.4dm",
    "Packages/**/Tests/*Test.4dm"
  ],
  "4dTesting.testDiscovery.excludeGlobs": [
    "**/{node_modules,.git}/**",
    "**/out/**"
  ]
}
```
