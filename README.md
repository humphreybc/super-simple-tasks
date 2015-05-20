# Super Simple Tasks
[supersimpletasks.com](http://supersimpletasks.com)

A very simple, 100% client-side tasks app that uses localStorage to save the list and Slip.js for reordering. This exists mainly so I can teach myself Coffeescript and better programming in general.


## Features

* Completely free (as in beer and in freedom)
* No account required
* Works offline through localStorage and chrome.storage.sync
* 100% client-side
* Easy to use
* Drag and drop to reorder tasks (even works on mobile!)
* Mobile support


## Dependencies

Uses [Coffeescript](http://coffeescript.org/) and [Stylus](http://learnboost.github.com/stylus/) along with a few other bits and pieces. Have a look in package.json to see what you'll need, and install with npm install.


## Development

A Gruntfile with a 'dev' task is available for development.

#### Install grunt-cli (may need to use sudo)

    npm install -g grunt-cli

#### Install the node prerequisites

    npm install

#### Run 'grunt dev' to watch for changes. Doesn't uglify.

    grunt dev

#### Build everything from scratch. Uglifies and cache busts.

    rm -r public/
    grunt build

## Start server

    cd public/
    grunt connect

Now visit localhost:9001 to see Super Simple Tasks.


## Deployment

All development happens on the 'develop' branch. Master is for main releases only. The server pulls down from GitHub every 10 minutes. There is no compilation on the server so everything must be compiled and minified locally before a release.

* 'master' = supersimpletasks.com
* 'develop' = dev.supersimpletasks.com


## Release workflow

So I don't forget :)

1. Manifest.json for Chrome Web Store has an updated version number
1. app.coffee has an updated version number
1. package.json has updated version number
1. Make sure analytics.js is using tracking_code instead of dev_tracking_code
1. Delete public/ and run 'grunt build'
1. Create a .zip of /public for the Chrome Web Store
1. Test .zip in Chrome Apps & Extensions Developer Tool
1. Commit and push to develop
1. Pull request into master
1. For a major release, create a GitHub release and tags with changelog
1. Upload .zip file to Chrome Web Store developer dashboard



