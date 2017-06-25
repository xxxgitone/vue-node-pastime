<template>
  <div class="video-card">
    <router-link :to="`/video/${video._id}`">
      <img :src="video.coverSrc">
    </router-link>
    <div class="video-info">
        <div>
            <span>{{ video.user.name }} </span>
            <span class="timeago"> ● {{ video.created_at | timeAgo}}</span>
        </div>
        <h3><router-link :to="`/video/${video._id}`">{{ video.title }}</router-link></h3>
        <div>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zan2"></use>
              </svg>
              {{ video.collectionCount }}
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videocard',
  props: ['video']
}
</script>

<style lang="scss" scoped>
.video-card {
  display: flex;
  padding: 1rem;
  transition: all .3s;
  border-bottom: 1px solid #eee;
  &:hover {
    background: #eee;
  }

  a {
    color: rgb(25, 25, 25);

    &:hover {
      color: red;
    }
  }

  img {
    max-width: 8rem;
    height: 6rem;
    margin-right: 1rem;
  }
  
  .video-info {
    // padding-left: .5rem;
    .timeago {
      font-size: .9rem;
      color: #999;
    }
  }

  
}
</style>
