<template>
    <li class="comment-item">
        <span class="auth-avatar">
            <router-link :to="{name: 'page', query: {user: comment.user._id}}">
                <img :src="comment.user.avatar_url">
            </router-link>
        </span>
        <div class="comment-info">
            <div class="comment-user">
                <span class="auth-name">{{ comment.user.name }}</span>
                <time class="timeago">{{ comment.create_at | timeAgo }}</time>
            </div>
            <p class="comment-text" v-html="comment.text"></p>
            <div>
                <span class="zan">
                    <svg class="icon" aria-hidden="true" >
                        <use xlink:href="#icon-zan2"></use>
                    </svg>
                {{ comment.supporter && comment.supporter }}
                </span>
                <span class="reply" @click="showFlag = !showFlag">
                    <svg class="icon" aria-hidden="true" >
                        <use xlink:href="#icon-dazhongicon05"></use>
                    </svg>
                回复
                </span>
                <div class="reply-panle" v-show="showFlag">
                    <textarea class="reply-text" v-model="commentText"></textarea>
                    <button class="submitButton" @click="postComment(comment)">确定</button>
                </div>
            </div>
            <!--<ul class=>
                <li class="comment-item">
                    <span class="auth-avatar">
                        <router-link :to="{name: 'page', query: {user: comment.user._id}}">
                            <img :src="comment.user.avatar_url">
                        </router-link>
                    </span>
                    <div class="comment-info">
                        <div class="comment-user">
                            <span class="auth-name">{{ comment.user.name }}</span>
                            <time class="timeago">{{ comment.create_at | timeAgo }}</time>
                        </div>
                        <p class="comment-text" v-html="comment.text"></p>
                        <div>
                            <span class="zan">
                                <svg class="icon" aria-hidden="true" >
                                    <use xlink:href="#icon-zan2"></use>
                                </svg>
                            {{ comment.supporter && comment.supporter }}
                            </span>
                        </div>
                    </div>
                </li>-->
            </ul>
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['comment'],
  data () {
    return {
      showFlag: false,
      commentText: ''
    }
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    postComment (comment) {
      const commentInfo = {
        user: {
          name: this.user.name,
          avatar_url: this.user.avatar_url,
          _id: this.user._id
        },
        text: this.commentText,
        parent: comment._id,
        type: 'video',
        typeId: comment.typeId
      }
      console.log(commentInfo)
      this.commentText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-item {
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;

    li:nth-last-of-type(1) {
      border: none;
    }

    .auth-avatar {
      flex-basis: 4rem;
      user-select: none;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }
    }

    .comment-info {
      flex: 1;
      padding-right: 1rem;

    .comment-user {
      display: flex;
      justify-content: space-between;

      .timeago {
        color: #999;
      }
    }

    .zan {
        color: #666;
        cursor: pointer;
        padding-right: 1rem;
        svg {
        width: 1rem;
        height: 1rem;
        }
    }

    .reply {
        color: #666;
        cursor: pointer;
        svg {
        width: 1rem;
        height: 1rem;
        }
    }

    .reply-panle {
        padding: 1rem;
        background: #eee;
        margin-top: .5rem;
        display: flex;
        justify-content: space-between;

        .reply-text {
        width: 80%;
        height: 4rem;
        outline: none;
        border: 1px solid #999;
        resize: none;
        }

        .submitButton {
        align-self: flex-end;
        border: none;
        outline: none;
        background: red;
        padding: .5rem 1rem;
        border-radius: 7px;
        color: white;
        cursor: pointer;
        }
    }
  }
}
</style>
