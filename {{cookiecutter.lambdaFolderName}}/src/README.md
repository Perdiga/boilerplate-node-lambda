# {{cookiecutter.lambdaName}}

{{cookiecutter.lambdaDescription}}

## Stack

- AWSSAM  -> An End-to-End Deployment Tool for Quickly Building Serverless Apps.
Develop, locally test and debug, and deploy your serverless applications using SAM CLI
  - https://aws.amazon.com/pt/serverless/sam/
- Jest    -> Library responsible for unit tests.
  - https://jestjs.io/
- esLint  -> Javascript source code analysis tool that help find programming errors, bugs,
stylistic errors and suspicious constructions.
  - https://eslint.org/

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

### Using AWS SAM

1. Install AWSSAM
2. Run `npm run sam:start`  

### Using node

 1. Update the event variable on `utils/debug.js`
 2. Run `npm run start`

## How to debug

### Using AWS SAM

This simulates an API Gateway request

Slower; Faster to change the event;

1. Install AWSSAM
2. Run `npm run sam:debug`
3. Call your api endpoint
4. Click on VSCode Debugger and select `Attach to SAM CLI`

### Using node

This simulates more like when you open the aws console and test a lambda using an event

Faster; Slower to change the event;

 1. Update the event variable on `utils/debug.js`
 2. Click on VSCode Debbugger and select `Start and Debug`

### Debug tests

This is very helpful when you are stuck trying to understand why the test is not passing

1. Click on VSCode Debbugger and select `Debug Tests`

## How to ensure quality

### Tests

1. Run `npm run test`
or
1. Run `npm run test:silent`

### Lint

1. Run `npm run lint`

## How to deploy

### Manually to AWS

1. Run `npm run package`
2. Upload the zip file under `dist\lambda` to the AWS lambda
3. Ensure that the lambda handler is configured to `handlers/awsHandler.handler`

### Using AWS SAM

1. Install aws-cli
2. Configure your aws-cli account
3. run `sam build`
4. run `sam deploy --guided`

- To destoy what was deployed run `aws cloudformation delete-stack --stack-name sam-app`