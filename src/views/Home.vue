<template>
  <div class="home">
    <header class="land">
      <div class="content">
        <h1 class="title">Entertain Your Life Pastime</h1>
        <p class="subTitle">If you doubt yourself,then indeed you stand on shaky ground.</p>
      </div>
    </header>
    <section>
      fdg
    </section>
    <section>
      fdg
    </section>
    <section>
      fdg
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  font-size: 1rem;
}
.land {
  font-size: 1em;
  height: 100vh;
  width: 100%;
  background-image: url('https://drscdn.500px.org/photo/210954383/q%3D80_m%3D1500/a94e5951e20c2871e0ee36b4f3453324');
  background-size: cover;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  .content {
    height: calc(100% - 3.75rem);
    width: 100%;
    position: absolute;
    left: 0;
    top: 3.75rem;
    background: rgba(0, 0, 0, .4);

    .title {
      margin: 0;
      padding: 0;
      font-size: 3.2em;
      color: #fff;
      letter-spacing: 1px;
      width: 60%;
      height: 40%;
      padding: 2em 1.6em;
    }

    @keyframes typing {
        from { width: 0; }
    }

    @keyframes caret {
        50% { border-color: transparent; }
    }

    .subTitle {
      color: white;
      font: 150% Consolas, Monaco, monospace;
      width: 59ch;
      animation: typing 10s steps(59),
          caret 1s steps(1) infinite;
      animation: typing 6s,
      caret 1s infinite;
      white-space: nowrap;
      overflow: hidden;
      border-right: .05em solid;
    }
  }
}

section {
  height: 80rem;
  width: 100%;
}
</style>
