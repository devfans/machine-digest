# machine-digest
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

make digest and uuid of the running machine

## Installation

```
npm i --save machine-digest
```

## Get Started

```
const md = require('machine-digest')

// get result, default make hex digest
md.get()
{ digest: 'a5d53e51a35755257c3c5fb38f77ec9bd401ab9241803216875de36648c2',
  machine: 
   { OS_TYPE: 'Darwin',
     OS_PLATFORM: 'darwin',
     OS_ARCH: 'x64',
     OS_CPU: 'Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz.Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz.Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz.Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz',
     id: '576D4728-C140-523C-B801-EFE5EIUHF7F9' } }


// get different digests
md.digest('hex')
'542a579ca9357e9797d2e11316689bfbdb52ba51013729b8db56c169a74cc83b'
md.digest('ascii')
'T*W\u001c)5~\u0017\u0017Ra\u0013\u0016h\u001b{[R:Q\u00017)8[VAi\'LH;'

// add or overwrite machine attribute
const attrs = {hostname: os.hostname()}
md.add(attrs)

// change encryption secret
md.secret = "your secret"
```

[npm-image]: https://img.shields.io/npm/v/machine-digest.svg
[npm-url]: https://npmjs.org/package/machine-digest
[travis-image]: https://img.shields.io/travis/devfans/machine-digest/master.svg
[travis-url]: https://travis-ci.org/devfans/machine-digest
[coveralls-image]: https://img.shields.io/coveralls/devfans/machine-digest/master.svg
[coveralls-url]: https://coveralls.io/r/devfans/machine-digest?branch=master
[downloads-image]: https://img.shields.io/npm/dm/machine-digest.svg
[downloads-url]: https://npmjs.org/package/machine-digest

