<template>
    <div class="pagination">
        <ul class="page-list">
            <li v-show="current!==1" @click="pre"><a><<</a></li>
            <li v-for="index in all" @click="indexPage(index)"><router-link :to="`/videolist?p=${index}`" :class="{ checked: current===index }">{{ index }}</router-link></li>
            <li v-show="current!==all"><a @click="next">>></a></li>
        </ul>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'pagination',
  data () {
    return {
      current: 1,
      all: 5
    }
  },
  computed: {
    // ...mapState({
    //   current: state => state.current
    // })
  },
  methods: {
    pre () {
      this.current--
    },
    indexPage (index) {
      this.current = index
      this.fetchPage(index)
    },
    next () {
      this.current++
    },
    fetchPage (index) {
      this.$http.get(`/api/videos?p=${index}`).then(res => {
        this.$store.state.videos = res.data
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixins.scss';

.pagination {
    font-size: 1rem;
    margin-bottom: 1.5rem;
}

.page-list {
    width: 100%;
    @include flexCenter;

    li {
        background: #eee;
        color: #666;
        border-radius: 5px;
    }

    a {
        cursor: pointer;
        display: block;
        padding: .8rem 1.3rem;
        border-radius: 5px;
        outline: none;
        color: #666;
    }

    .checked {
        background: red;
        color: white;
    }
}
</style>
