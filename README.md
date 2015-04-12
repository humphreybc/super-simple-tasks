# Super Simple Tasks v2.0.1
[supersimpletasks.com](http://supersimpletasks.com)

A very simple, 100% client-side tasks app that uses localStorage to save the list and Slip.js for reordering. This exists mainly so I can teach myself Coffeescript and better programming in general.


## Features

* Completely free (as in beer and in freedom)
* No account required
* Works offline thorugh localStorage
* 100% client-side
* Easy to use
* Drag and drop to reorder tasks (even works on mobile!)
* Mobile support


## Backlog

### 1.3 - released

* **[DONE]** Updated visual style with header
* **[DONE]** Change to green highlight colour

### 1.4 - released

* **[DONE]** Export tasks
* **[DONE]** Drag and drop to rearrange tasks
* **[DONE]** Update jQuery to latest

### 1.4.3 - released

* **[DONE]** Remove tabs permission from Chrome Web Store manifest file
* **[DONE]** Fix up web app icons
* **[DONE]** Add link to the Chrome Web Store in the footer
* **[DONE]** Add comments and clean up code
* **[DONE]** Refactor showNewTasks() method

### 1.4.4 - released

* **[DONE]** Fix a bug where long tasks don't wrap the text correctly
* **[DONE]** Fix a bug where onboarding tooltips stay in the DOM after completing the onboarding
* **[DONE]** Fix a bug where the task will be completed when dragging and dropping in the same place
* **[DONE]** Support for no priority
* **[DONE]** Auto advance to the next step when the user completes an onboarding action
* **[DONE]** Slide & fade animation for onboarding tour tooltips

### 2.0 - released

* **[DONE]** Write [Storage API](http://stackoverflow.com/q/26249133/1105159) for handling different storage types
* **[DONE]** Personal task sync with Google account and chrome.storage.sync
* **[DONE]** Fix a bug where reordering a task and changing its priority sometimes wouldn't work

### 2.0.1 - released

* **[DONE]** Add support for links
* **[DONE]** Refactor create task HTML and CSS
* **[DONE]** Add migration logic
* **[DONE]** Miscellaneous bug fixes and refactoring

### 2.0.2 - released

* **[DONE]** Bug fixes

### 2.1

* Investigate [Chrome Platform Analytics](https://github.com/GoogleChrome/chrome-platform-analytics/wiki)
* Show completed tasks
* Replace 'mark all done' with 'Clear completed' 

### The distant future

* Multiple lists
* List names
* Import tasks from JSON
* Share lists with others
* Collaborate on task lists in real time


## Dependencies

Uses [Coffeescript](http://coffeescript.org/) and [Stylus](http://learnboost.github.com/stylus/) along with a few other bits and pieces. Have a look in package.json to see what you'll need, and install with npm install.


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

## Testing on mobile

The easiest way to test on mobile locally is to start a HTTP server with Python:

    python -m SimpleHTTPServer

Now visit <youripaddress>:8000/public to see Super Simple Tasks on your phone.


## Deployment

All development happens on the 'develop' branch. Master is for main releases only. The server pulls down from GitHub every 10 minutes. There is no compilation on the server so everything must be compiled and minified locally before a release.

* 'master' = supersimpletasks.com
* 'develop' = dev.supersimpletasks.com


## Release workflow

So I don't forget :)

1. JavaScript source in index.html is pointing at app.min.js
2. Manifest.json for Chrome Web Store has an updated version number
3. app.coffee has an updated version number
4. README has an updated version number
6. package.json has updated version number
7. Google Analytics commented out
8. Create a .zip of /public for the Chrome Web Store
9. Test .zip in Chrome Apps & Extensions Developer Tool
10. Uncomment Google Analytics
11. Commit and push to develop
12. Pull request into master
13. Create a GitHub release and tags with changelog
14. Upload .zip file to Chrome Web Store developer dashboard



