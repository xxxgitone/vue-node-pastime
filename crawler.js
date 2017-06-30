const mongoose = require('mongoose')
const Image = require('./server/models/image')
const superagent = require('superagent')

mongoose.connect('mongodb://localhost:27017/vnpastime')
mongoose.Promise = global.Promise

const url = 'https://api.500px.com/v1/photos?image_size%5B%5D=1&image_size%5B%5D=2&image_size%5B%5D=32&image_size%5B%5D=31&image_size%5B%5D=33&image_size%5B%5D=34&image_size%5B%5D=35&image_size%5B%5D=36&image_size%5B%5D=2048&image_size%5B%5D=4&image_size%5B%5D=14&include_tags=true&include_licensing=true&include_releases=true&expanded_user_info=true&is_following=true&include_camera_info=false&ids=217918223%2C217915191%2C217914197%2C217913783%2C217913305%2C218009865%2C217995927%2C217993515%2C217990797%2C217983685%2C217982437%2C217982193%2C217981303%2C217975819%2C217970791%2C217968991%2C217968723%2C217968037%2C217967731%2C217967125%2C217966671%2C217963607%2C217961417%2C217959213%2C217957723%2C217952599%2C217951751%2C217951547%2C217951395%2C217949665%2C217948305%2C217945881%2C217943469%2C217941775%2C217941505%2C217937471%2C217935091%2C217933181%2C217931717%2C217929827%2C217929263%2C217927165%2C217921889%2C217917767%2C217917037%2C217916799'

superagent.get(url)
  .set('Content-Type', 'application/json; charset=utf-8')
  .set('Connection', 'keep-alive')
  .set('Cookie', 'optimizelyEndUserId=oeu1498562301143r0.3457553558516826; amplitude_id500px.com=eyJkZXZpY2VJZCI6Ijc1OTdlNjZjLWViYTEtNDEyMi05YWNjLWY0YzE3MDkzNzE2NVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTQ5ODc5ODY5MjAyMSwibGFzdEV2ZW50VGltZSI6MTQ5ODc5ODY5MjAyMSwiZXZlbnRJZCI6MywiaWRlbnRpZnlJZCI6MCwic2VxdWVuY2VOdW1iZXIiOjN9; optimizelySegments=%7B%22569090246%22%3A%22false%22%2C%22569491641%22%3A%22direct%22%2C%22575800731%22%3A%22gc%22%2C%22589900200%22%3A%22true%22%7D; optimizelyBuckets=%7B%7D; _ga=GA1.2.2079647702.1498562301; _gid=GA1.2.1632840147.1498679859; _hpx1=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiJTlmNzY4ZTE0NzdjYzgxYjJkOGI3YzQxNTcwMzhiMTllBjsAVEkiCWhvc3QGOwBGIhJhcGkuNTAwcHguY29tSSIYc3VwZXJfc2VjcmV0X3BpeDNscwY7AEZGSSIQX2NzcmZfdG9rZW4GOwBGSSIxVXR1OU5MY3RmdzV5Wm51RlVBdUdmQ3JGTHh4K3MrNCs1T2twRFF3TS91RT0GOwBGSSIRcHJldmlvdXNfdXJsBjsARkkiDS9wb3B1bGFyBjsAVA%3D%3D--d933895263add57388ca72907bf21cbfe84e0848; __hstc=133410001.0fdc3616c63652510d2e11d889f738d3.1498562304683.1498744290969.1498798822781.6; __hssrc=1; hubspotutk=0fdc3616c63652510d2e11d889f738d3')
  .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.104 Safari/537.36')
  .set('X-CSRF-Token', 'Zq4xlrlptWyltTR7SPt/AloUiU0gX36ORP+cq1F2U/s0dYyiDkTKYtfTT/4Y8Pl+cNGmUV7skLCgFrWmXXqtGg==')
  .end(function (err, res) {
    if (err) {
      console.log(err)
    } else {
      const photosData = res.body.photos
      Object.keys(photosData).forEach(id => {
        const photo = photosData[id]
        let imageInfo = {
          user: {
            name: photo.user.fullname,
            avatar_url: photo.user.avatars.large.https
          },
          image_url: photo.image_url['7'],
          created_at: photo.created_at,
          collections_count: photo.collections_count,
          description: photo.description
        }
        Image.create(imageInfo).then(() => {
          console.log(id + '成功')
        })
      })
    }
  })
