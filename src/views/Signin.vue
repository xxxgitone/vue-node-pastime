<template>
  <div class="signin">
      <form class="signinForm">
        form
      </form>
  </div>
</template>

<script>
export default {
  name: 'signin',
  mounted () {
    this.$store.state.isHome = false
  }
}
</script>

<style lang="scss">
.signin {
  min-height: calc(100vh - 7rem);
  padding-top: 3.75rem;
  width: 30rem;
  // border: 1px solid red;
  margin: 0 auto;
  background: rgba(0,0,0,.1);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
}

</style>

