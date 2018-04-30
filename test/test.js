const fetch = require('promise-path').fetch
const expect = require('chai').expect
var assert = require('assert')

describe('Calisaurus boardgames website', function() {
  describe('Index Page', function() {
    it('should contain links to other pages', function() {
      return fetch('http://boardgames.calisaurus.net').then(function(body) {
        expect(body).to.have.string('<a href="./about.html">About A Board Game A Day</a>')
      })
    })
  })
})
