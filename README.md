# Perf-test

Performance can mean a lot of things. Let's examine three key measurements:

Initial Script Loading Times
Rendering Script Times
Re-rendering Script Times on Changes

When have to render a lot of data, for example a table with let's say more than 5000 rows, it's important to take deep atention about timings and performance response.

This first approach is to do a visual, loading test.

We are going to retrieve a list of 5000 elements (photos), and render a simple table that will list all of them.

##### if this simple example takes a lot of time, I cannot imagine how much it takes to create a more sophisticated table
-------------------------------------------
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd perf-test`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
