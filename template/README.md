# How to use our ChatServer

## Prerequisites
You need to have NodeJS installed in order to use this.

## Launching the client
Navigate to the folder titled `/template`
First, run in the Terminal

```
npm install
```


Then, once all required modules have been installed, run
```
npm run start
```

The browser should open a new window to localhost:9090 and attempt to establish a connection with a running chatserver

## Launching the server

Navigate to the folder titled `/chatserver`, which has been modified with custom routes to enable some features.

First, install dependencies by running
```
npm install
```

Then, launch the server with
```
node chatserver.js
```

## Development tools

To check that all code has been properly formatted, run
```
npx eslint src/
```

This command runs the eslint binary installed by npm on all of the target code in the src directory

To run all provided tests, run
```
npm run test
```
