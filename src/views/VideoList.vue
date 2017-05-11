<template>
  <div class="videolist">
  </div>
</template>

<script>
export default {
  name: 'videolist',
  created () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss" scoped>
.videolist {
  font-size: 1rem;
  min-height: 100vh;

}
</style>
