process.env.NO_DEPRECATION = 'machine-digest';

var after = require('after')
var assert = require('assert')
var md = require('../')

describe('machine-digest', function(){
  it('get function', function(){
    assert.equal(typeof md.get, 'function')
  })

  it('should success', function() {
    var a = md.digest('hex')
    md.secret = "new secret"
    var b = md.digest("hex")
    assert.notEqual(a, b)
  })
})
