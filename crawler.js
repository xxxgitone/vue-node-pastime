const http = require('http')
// const cheerio = require('cheerio')

const url = ''

// function filtersVideos (html) {
//   const $ = cheerio.load(html)
//   const videoItems = $('.item')

//   let title = $('.item .rbox .title-box').find('.title').text()
//   console.log(title)
// }

function fetchPage (url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let html = ''

      res.on('data', data => {
        html += data
      })

      res.on('end', () => {
        resolve(html)
      })
    }).on('error', e => {
      reject(e)
    })
  })
}

fetchPage(url).then(html => {
  console.log(html)
})
