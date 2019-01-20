# Contribution Guidelines

### Table of Content
1. [Introduction.](#intro)
2. [Tools.](#tool)
3. [Commit Labels.](#label)
4. [Development Server.](#devServer)
5. [Build.](#build)
6. [Running Unit Tests.](#ut)
7. [Running End-to-End Tests.](#e2e)
8. [Further Help.](#help)

<a name="intro"></a>
### Introduction
Hello, i'm happy to welcome you onboard! Thanks to kind volunteers like you, I'm grateful for your contributions.

Fields that you can help on are
- :page_with_curl: Reasearch, Suggest new features.
- :computer: Create, Update, Fix features.
- :book: Document, Creating guide (in words or video) to teach people how to use this.

<a name="tool"></a>
### Tools
These are the tools that are being used in this project. All of the configurations of the tools should be separate in a JSON file located in ./src/config

##### PinoJS
- Usage
  - Log library
- Extensions
  - pino-express
  - pino-pretty-print

##### Babel 7
- Usage
  - To compile ES5, 6 and 7 to native file
- Notes
  - Everything will be compiled into dist directory
  - script that are in the ./src/ but not compiled should be also coppied to the ./dist/ directory

##### module-alias
- Usage
  - Avoid long string for deep directories
- Notes
  - Refer to package.json, under \_moduleAlias property for mor information

##### pg
- Usage
  - Postgres library

<a name="label"></a>
### Commit Labels

| icon | code | description |
| --- | --- | --- |
| :cyclone: | `:cyclone:` | add dependency |
| :telescope: | `:telescope:` | audit |
| :bug: | `:bug:` | bug fix |
| :wrench: | `:wrench:` | configuration |
| :books: | `:books:` | documentations |
| :star2: | `:star2:` | new feature |
| :pencil2: | `:pencil2:` | refactor |
| :hammer: | `:hammer:` | todo |

<a name="build"></a>
## Build
- Build into native JavaScript `npm run build`

<a name="ut"></a>
## Running unit tests

<a name="e2e"></a>
## Running end-to-end tests

<a name="help"></a>
## Further help
- More help on development: veehan.95@gmail.com
