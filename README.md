## Cucumber setup in VSCode 
In order to have fully supported Cucumber in VSCode, please follow the following steps.
Steps for setup:
1. Install from VSCode extension: "Cucumber Full Language Support"
2. In the opened app root create (if absent) .vscode folder with settings.json file
3. Add to the settings.json file:
```
{
    "cucumberautocomplete.steps": [
        "test/step-definitions/*.steps.ts",
        "node_modules/qa-lib/src/step_definitions/*.js"
    ],
    "cucumberautocomplete.strictGherkinCompletion": false
}
```
4. Reload app to apply all the extension changes
