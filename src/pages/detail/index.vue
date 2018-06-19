<template>
    <div class='container'>
        <div class="title">{{headTitle}}</div>
        <div class="author">{{author}}</div>
        <div class="content">{{content}}</div>
        <div class="notes" v-show="!showNotes" @click="showNotesClick()">显示注释</div>
        <div class="notes" v-show="showNotes">{{notes}}</div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      headTitle: "",
      author: "",
      content: "",
      notes: "【注释】:无",
      showNotes: false,
      id: ""
    };
  },
  created() {
    //   this.url = localStorage.getItem('urldetail');;
  },
  onShow() {
    //必须是在onLoad钩子函数往后的生命周期中获取
    this.id = this.$root.$mp.query.id;
    this.showNotes = false;
    wx.showLoading({
      title: "加载中"
    });
    this.$http
      .get(
        "https://api.avatardata.cn/TangShiSongCi/LookUp?key=a8d840872c8448cf8bf3a61b71e9ed55&id="+this.id,
        {}
      )
      .then(d => {
        this.headTitle = d.data.result.biaoti;
        this.author = d.data.result.zuozhe;
        this.content = d.data.result.neirong;

        if (d.data.result.jieshao.length > 6) {
          this.notes = d.data.result.jieshao;
        } else {
          this.notes = "【注释】:无";
        }
        wx.hideLoading();
      })
      .catch(e => console.log("error", e));
  },
  mounted() {
   
  },
  computed: {},

  methods: {
       showNotesClick() {
      this.showNotes = true;

    },
  }
};
</script>

<style lang='scss' scoped>
.container {
  background-color: rgb(245, 245, 249);
  font-size: 30rpx;
  overflow: hidden;
  background: #fff;
  padding: 30rpx 30rpx;
  text-align: center;

  .title {
    margin-top: 20rpx;
    color: #323232;
    font-size: 45rpx;
    text-overflow: ellipsis;
  }
  .author {
    color: #282828;
    font-size: 25rpx;
    margin-top: 10rpx;
  }
  .content {
    color: #282828;
    font-size: 35rpx;
    margin-top: 10rpx;
    line-height: 50rpx;
  }
  .notes {
    text-align: left;
    color: #646464;
    font-size: 22rpx;
    margin-top: 20rpx;
    line-height: 30rpx;
  }
}
</style>
