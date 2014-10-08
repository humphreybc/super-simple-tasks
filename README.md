# Super Simple Tasks v1.4.3
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

### 2.0

* Add link to Chrome web store in footer
* Multiple lists
* Show completed tasks
* Replace 'mark all done' with 'Clear completed' 
* Import tasks from JSON
* Simple animations for onboarding tour tooltips

### Future

* Sync tasks across multiple devices and browsers
* Collaborate on tasks with others by sharing


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

