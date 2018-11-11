const handlebars = require('handlebars')
const { fetch, read, write } = require('promise-path')

async function run(){
  const feedJSON = await fetch('https://boardgames-api.calisaurus.net/api/boardgame/feed')
  const feed = JSON.parse(feedJSON)
  const feedTemplateString = await read('./feed-template.html', 'utf-8')
  const feedTemplate = handlebars.compile(feedTemplateString)
  const output = feedTemplate(feed)
  await write('feed-output.html', output, 'utf-8')
  console.log(feed)
}

run()
