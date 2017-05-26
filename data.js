const axios = require('axios')
const mongoose = require('mongoose')
const User = require('./server/models/user')
const Video = require('./server/models/video')

mongoose.connect('mongodb://localhost:27017/vnpastime')
mongoose.Promise = global.Promise

let url = 'http://baobab.kaiyanapp.com/api/v1/video/'

function getUserInfo (userInfo) {
  let user = {}
  return new Promise((resolve) => {
    user = {
      name: userInfo.name,
      created_at: userInfo.latestReleaseTime,
      avatar_url: userInfo.icon,
      followers: userInfo.follow.itemId,
      following: 2,
      role: 'mana'
    }
    resolve(user)
  })
}

function getVideoInfo (info) {
  let video = {}
  let playInfo = info.playInfo.map((item) => {
    return {
      name: item.name,
      url: item.url
    }
  })
  return new Promise((resolve) => {
    video = {
      user: {
        name: info.author.name,
        avator: info.author.icon
      },
      id: info.id,
      playUrl: info.playUrl,
      videosrc: playInfo,
      title: info.title,
      created_at: info.date,
      duration: info.duration,
      supportCount: info.id,
      fightCount: 1,
      collectionCount: info.consumption.collectionCount,
      playcount: 102565,
      coverSrc: info.coverForFeed
    }
    resolve(video)
  })
}

for (let i = 18433; i < 18533; i++) {
  axios.get(url + i).then((res) => {
    let info = res.data
    let userInfo = info.author
    getUserInfo(userInfo).then((user) => {
      User.create(user)
      console.log('success: user ' + i)
    })

    getVideoInfo(info).then((video) => {
      Video.create(video)
      console.log('success: video ' + i)
    })
  })
}

