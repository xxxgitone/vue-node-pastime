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
    <button v-show="user.name === video.user.name" class="deleteButton" @click="showInfoDialog(video._id)">删除</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'videocard',
  props: ['video'],
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    showInfoDialog (id) {
      // 将需要删除的视频绑定到状态上去，方便InfoDialog组件调用
      this.$store.state.deleteVideoid = id
      this.$store.state.showInfoDialog = true
    }
  }
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
  &:hover > .deleteButton {
    display: block;
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
    flex-basis: 70%;

    .timeago {
      font-size: .9rem;
      color: #999;
    }
  }

  .deleteButton {
    align-self: center;
    border: none;
    outline: none;
    padding: .4rem .8rem;
    color: white;
    border-radius: 5px;
    display: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background: rgba(255,0,0,.8);
    }
  }
  
}
</style>
