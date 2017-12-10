
# Easy-Editor

> 
1. Introduction
2. Download
3. Installation
4. Commands
8. License 

## Introduction

**Easy-Editor** is a project that gives you the chance to easily create grammars and test them on the fly, only with JavaScript, so in browsers (and mobiles too).

## Download

Download the compressed folder through GitHub, or type in your terminal:

    ~$ git clone ${THIS_URL}
    
## Installation

#### 1. Install dependencies

As this project is based on the [JS-Test-Boilerplate v0.1.0](https://github.com/allnulled/js-test-boilerplate/tree/v0.1.0), the dependencies are inherited from there.

The stack required includes Grunt (and plugins), Karma (and plugins), PhantomJS, CasperJS, JSHint, Mocha, Chai and Sinon, at least.

Most of them are just an NPM command to be downloaded.

## Commands

To extend the current commands, just extend the `Gruntfile.js` (that's the idea).

Some available commands are:

> Starts the server at *127.0.0.1:8700/*
> 
    ~$ grunt start
    
*Note:* The application by default is always tried to be served at:

    http://localhost:8700/app

This address must not be in use.

---
  
> Opens the *127.0.0.1:8700/app* with the default browser:
>
    ~$ grunt open

---
    
> Starts end-to-end tests:
>
    ~$ grunt testend

---

> Starts unit tests:
>
    ~$ grunt testunit

---

> Generate documentation:
>
      ~$ grunt generatedocs



## Usage

Start the server (grunt start).

Open the application (grunt open).

(Here, you can run the End-to-End tests if you want to be sure that everything is working.)

Once in the browser, and with the app opened...

There are 3 main texts:

#### 1. **(Source text)** The parser-generator input. 

This text is the code needed to generate a parser (for PEGjs by default).

It requires PEGjs grammar compliance, or it will throw an error.

#### 2. **(Custom text)** The parser input.

This is the code we want to pass to our self-generated parser, built in the previous step. 

It requires your-own-grammar compliance, or it will throw an error.

#### 3. **(Output text)** The parser output.

This is only to show us the results. You cannot change this text. Instead, you change the previous ones, and this is changed depending on them.

----

*Note:* You can move through them with the buttons at the top.


## License

Do what you feel like.
# Read this file
