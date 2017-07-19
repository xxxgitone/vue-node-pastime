<template>
    <div class="pagination">
        <ul class="page-list">
            <li v-show="current!==1" @click="pre"><a><<</a></li>
            <li v-for="index in all" @click="indexPage(index)" :key="index"><router-link :to="`/videolist?p=${index}`" :class="{ checked: current===index }">{{ index }}</router-link></li>
            <li v-show="current!==all"><a @click="next">>></a></li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.current,
      all: state => state.all
    })
  },
  methods: {
    pre () {
      this.$store.state.current--
      this.$router.push({path: 'videolist', query: {p: this.$store.state.current}})
      this.$store.commit('FETCH_VIDEOS', this.$store.state.current)
    },
    indexPage (index) {
      this.$store.state.current = index
      this.$store.commit('FETCH_VIDEOS', index)
    },
    next () {
      this.$store.state.current++
      this.$router.push({path: 'videolist', query: {p: this.$store.state.current}})
      this.$store.commit('FETCH_VIDEOS', this.$store.state.current)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/mixins.scss';

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
        list-style-type: none;
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
