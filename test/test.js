const fetch = require('promise-path').fetch
const expect = require('chai').expect
var assert = require('assert')

let siteUrl = process.env.SITE_URL

describe(`Calisaurus boardgames website : ${siteUrl}`, function() {
  describe('Index Page', function() {
    let actual
    beforeEach(function() {
      return fetch(`${siteUrl}`).then(function(body) {
        actual = body
      })
    })
    it('should contain links to other pages', function() {
      expect(actual).to.have.string('<a href="./about.html">About A Board Game A Day</a>')
    })

    it('should contain an image with an alt tag', function() {
      expect(actual).to.match(/<img src="\.\/calisaurus\.png" alt=".*" .* \/>/)
    })

    it('should contain a favicon', function() {
      expect(actual).to.match(/<link rel="shortcut icon" href=".\/favicon.png">/)
    })
  })

  describe('About page', function() {
    let actual
    beforeEach(function() {
      return fetch(`${siteUrl}/about`).then(function(body) {
        actual = body
      })
    })
    it('should contain a heading', function() {
      expect(actual).to.have.string('<h1>About</h1>')
    })
    it('should contain an image', function() {
      expect(actual).to.have.string('about.jpg')
    })
  })

  describe('January', function() {
    let actual
    beforeEach(function() {
      return fetch(`${siteUrl}/january`).then(function(body) {
        actual = body
      })
    })
    it('should contain a heading', function() {
      expect(actual).to.have.string('<h1>January 2018 - A Quick Look</h1>')
    })
    it('should contain a link back to index', function() {
      expect(actual).to.have.string('<a href="/index.html">A BOARD GAME A DAY</a>')
    })
  })

})
