durations.js - animated durations library.
============
[![license](https://img.shields.io/badge/license-MIT-a8f.svg)](https://github.com/PurplestInc/durations.js/blob/master/LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/durations.js.svg?colorB=a8f)](https://www.npmjs.com/package/durations.js)
[![npm version](https://img.shields.io/npm/v/durations.js.svg?colorB=a8f)](https://www.npmjs.com/package/durations.js#installation)
[![gzip size](https://img.shields.io/badge/gzip%20size-392%20B-a8f.svg)](https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.min.js?compression=gzip)

[durations.js](https://durationsjs.com) is a tiny [library](https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.min.js?compression=gzip) to help provide animated duration functionality for those that do not currently use another solution.

Table of Contents
-----------------

1. [Basic Info](https://github.com/PurplestInc/durations.js#basic-info)
2. [Features](https://github.com/PurplestInc/durations.js#features)
3. [Getting Started](https://github.com/PurplestInc/durations.js#getting-started)
  1. [Installation](https://github.com/PurplestInc/durations.js#installation)
  2. [Usage](https://github.com/PurplestInc/durations.js#usage)
4. [Examples](https://github.com/PurplestInc/durations.js#examples)
5. [Documentation](https://github.com/PurplestInc/durations.js#documentation)
6. [Changelog](https://github.com/PurplestInc/durations.js#changelog)
7. [License](https://github.com/PurplestInc/durations.js#license)

Basic Info
-----------------

An animated durations [library](https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.min.js?compression=gzip) built to provide convenience for developers.

Visit the landing page at [durationsjs.com](https://durationsjs.com) to see a [demo](https://durationsjs.com) of the [library](https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.min.js?compression=gzip) in action!

Features
--------

* Plug-and-play (unless you have other JavaScript that uses `durations()` already...)
* Selector-based targeting
* Allows a function to be called when duration has ended
* Customizeable before start and after end text
* Customizeable before duration and after duration text
* Fully open source

Getting Started
---------------

### Installation

You can install the [library](https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.min.js?compression=gzip) via npm:

```javascript
npm i durations.js
```

or via CDN:


```html
<!-- Source Version -->
<script src="https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.js"></script>
<!-- Minified Version -->
<script src="https://cdn.jsdelivr.net/npm/durations.js@1.0.1/durations.min.js"></script>
```

### Usage

```javascript
durations('h2', {
	date: 'July 27, 2018 12:00:00',
	text: 'Coming Soon!'
}, {
	date: 'July 28, 2018 12:00:00',
	text: 'The launch is over!'
}, true);
```

Examples
--------

Please see [durationsjs.com](https://durationsjs.com) for some examples and a [demo](https://durationsjs.com) of them working on the website.

Documentation
-------------

Documentation to be added with the next npm version.

Changelog
---------

Please see [CHANGELOG.md](https://github.com/PurplestInc/durations.js/blob/master/CHANGELOG.md) for details.

License
-------

MIT

Copyright (c) 2018 Purplest, Inc.