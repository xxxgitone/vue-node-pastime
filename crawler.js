const http = require('http')

const url = 'http://www.toutiao.com/ch/video/'

function fetchPage(url) {
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
