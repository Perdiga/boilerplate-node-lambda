# {{cookiecutter.lambdaName}}

{{cookiecutter.lambdaDescription}}

## Stack

- AWSSAM ->
- Jest ->  

## Project structure

```
 └ src
   └ core                       → Core business
     └ index.js                 → The main function of the project. Here is where the business logic are
   └ handlers                   → Lambda handlers
     └ awsHandler.js            → Handeler to trigger this lambda on AWS
   └ models                     → Models
     └ response.js              → API Response Model
   └ utils                      → All side functions that you need to have to suport the main function
 └ template.yaml                → AWSSAM template
```

## How to run locally

1 - Install AWSSAM
2 - Run `npm run run`

## How to debug

1 - Install AWSSAM
2 - Run `npm run run:debug`
3 - Call your api endpoint
4 - Click on VSCode Debugger to attach the debugger

## How to ensure quality

### Tests

1 - Run `npm run test`

### Lint

## How to deploy
