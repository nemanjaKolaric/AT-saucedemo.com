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

## Allure Framework for Linux
In order to have fully supported Allure Framework on Linux follow the steps below.
Steps for setup: 
1. Open Terminal
2. Add the following line:
```
   $ wget https://github.com/allure-framework/allure2/releases/download/2.18.1/allure_2.18.1-1_all.deb
```
3. Install typing:
```
   $ sudo dpkg -i allure_2.18.1-1_all.deb
```
 4. Check for Allure version:
 ```
    $ allure --version
 ```
