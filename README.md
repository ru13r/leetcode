**Package description**
 
A minimalistic Node.JS environment configured with 
Babel to support modern ES syntax with ESLint and Jest.

This package runs code in the node environment only 
and does not include any tools to build 
for the browser environment.

Included tools:
* [nodemon](https://www.npmjs.com/package/nodemon) &mdash; a tool that helps develop node.js 
based applications by automatically restarting 
the node application when file changes in the 
directory are detected.

* [Babel](https://babeljs.io/) &mdash; a toolchain that is mainly
used to convert ECMAScript 2015+ code into a backwards compatible
version of JavaScript in old browsers or environments.

* [ESLint](http://eslint.org/) &mdash; a pluggable 
and configurable linter tool for identifying and
reporting on patterns in JavaScript. Maintain your code quality
with ease.

* [Jest](https://jestjs.io/) &mdash; a delightful 
JavaScript Testing Framework with a focus on simplicity.

**Installation**

* Download and install [Node.JS](http://nodejs.org/en/) for your platform (tested with node version 12.16.3)

* Clone the repository (note the dot as the last argument - clones the repository into the current directory without the project folder).
```
git clone https://github.com/ru13r/minimalistic-node-js.git .
```

* Install all dependencies of the project.
```
npm install
```
**Usage**

The `src/main.js` is an entry point. The following commands are available.

* Lint, test and execute the code (with watch mode enabled)
```
npm run watch
```
* Run app once
```
npm run start
```
* Run tests
```
npm run test
```
* Run linter
```
npm run lint
```