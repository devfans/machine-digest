# machine-digest
make digest of the running machine

## Installation

```
npm i --save machine-digest
```

## Get Started

```
const md = require('machine-digest')

// get result, default make hex digest
md.get()


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
