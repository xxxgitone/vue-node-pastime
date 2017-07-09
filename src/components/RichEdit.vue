<<template>
  <div class="richedit">
    <div class="edit-controller">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-blod"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-i"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiahuaxian"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-img"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-lianjie"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wuxuliebiao"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icxiangmufuhaodaishuzi24px"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinyong"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chexiao"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhongzuo"></use>
      </svg>
    </div>
    <div ref="editable" class="editable" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
  name: 'richedit',
  created () {
    const editable = this.$refs
    editable.contenteditable = true
  }
}
</script>

<style lang="scss" scoped>
.richedit {
  width: 35rem;
  border: 1px solid #DDE1E5;
}

.edit-controller {
  background: #ECEEF0;
  padding: .3rem;

  svg {
    width: 2rem;
    height: 2rem;
    transition: all .3s;

    &:hover {
      background: #D0D6D9;
    }
  }
}

.editable {
  width: 100%;
  height: 12.5rem;
  outline: none;
  padding: 1rem .5rem;
}
</style>
