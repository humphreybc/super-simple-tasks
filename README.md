# Super Simple Tasks v1.3
[supersimpletasks.com](http://supersimpletasks.com)

A very simple tasks app that uses localStorage to save the list. This exists mainly so I can teach myself Coffeescript and better programming in general.


## Features

* No account required - close your browser and come back and your tasks will still be there
* Mobile support
* Extremely simple UI
* Priority and due date attributes
* Bulk mark all tasks completed


## Backlog

### 1.3

* [DONE] Updated visual style with header
* [DONE] Change to green highlight colour

### 1.4

* Drag and drop to rearrange tasks
* Show completed tasks at the bottom of the list

### 1.5

* Relative due dates
* Toggle to sort by priority, due date, creation order

### Future

* Multiple lists
* Sync tasks across multiple devices and browsers
* Collaborate on tasks with others by sharing


## Dependencies

Uses [Coffeescript](http://coffeescript.org/) and [Stylus](http://learnboost.github.com/stylus/). I compile with [LiveReload](http://livereload.com/) which is pretty great, but any Coffeescript / Stylus compiler will do.


## Development

A Gruntfile with a 'dev' task is available for development.

#### Install grunt-cli (may need to use sudo)

    npm install -g grunt-cli

#### Install the node prerequisites

    npm install

#### Run 'grunt dev' to watch for changes in the JS and Stylus files.

    grunt dev

#### Rebuilding JS and CSS from scratch

    grunt build



