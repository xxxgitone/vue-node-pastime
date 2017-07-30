<template>
  <div class="imgBox">
    <div class="imgUserInfo">
        <img :src="image.user.avatar_url">
        <span>
        {{ image.user.name }}
        </span>
    </div>
    <div class="image-wrapper">
      <router-link :to="`/images/${image._id}`"><img class="image" :src="image.image_url"></router-link>
    </div>
    <div class="description" v-show="image.description">
        <span v-html="image.description"></span>
    </div>
    <span class="collect" @click="isSelected = !isSelected" :class="{ selected: isSelected }" >
        <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-zan1"></use>
        </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: ['image'],
  data () {
    return {
      isSelected: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/mixins.scss';

  .imgBox {
    width: 16.5rem;
    margin: 1.2rem 0 0 .6rem;
    border: 1px solid #eee;
    text-align: center;
    background: #eee;
    position: relative;
    overflow: hidden;
    @include mediaQ(480px) {
      width: 45%;
    }
    @include mediaQ(768px) {
      margin-top: 1.2rem;
    }

    .image-wrapper {
      &:hover + .description{
        transform: translateY(0);
      }
    }
    .image {
      height: 16.5rem;
      max-width: 100%;
      cursor: pointer;
    }

    .imgUserInfo {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      padding: .5rem;
      background: white;

      img {
        height: 80%;
        border-radius: 50%;
        margin-right: .5rem;
        border: 1px solid #eee;
      }
    }

    .description {
      position: absolute;
      // 实现两行文字省略号
      width: 100%;
      // height: 2.3rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      bottom: 1px;
      left: 0;
      background: rgba(0, 0, 0, .5);
      color: white;
      transform: translateY(110%);
      transition: all .3s;
      padding: .1rem 0;
      max-height: 4rem;

      &:hover {
        transform: translateY(0);
      }
    }

    .selected > svg {
      color: red;
    }

    .collect {
      position: absolute;
      right: 6%;
      top: 6%;
      cursor: pointer;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
</style>
