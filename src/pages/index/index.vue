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
  data() {
    return {
      headTitle: "题目名字可能很长",
      author: "作者小a",
      content:
        "11111111111   汉语汉语是汉语  \r\n    djaji汉语汉语是汉语 sdasjidjasj      jdiajsd汉语汉语是汉语 jiasj 11111111111    jsdji汉语汉语是汉语 asjdjasdj  \r\n    djajisd汉语汉语是汉语 asjidjasj      jdiaj汉语汉语是汉语 sdjiasj",
      notes: "【注释】:无",
      showNotes: false
    };
  },
  components: {
  },
  computed: {},
  watch: {},
    created() {
        wx.showLoading({
          title: "加载中"
        });
      this.$http
        .get("https://api.avatardata.cn/TangShiSongCi/Random?key=a8d840872c8448cf8bf3a61b71e9ed55", {})
        .then(d => {
          this.headTitle = d.data.result.biaoti;
          this.author = d.data.result.zuozhe;
          this.content = d.data.result.neirong;

          if(d.data.result.jieshao.length > 6){
              this.notes = d.data.result.jieshao;
          }else{
              this.notes='【注释】:无';
          }
          wx.hideLoading();
        })
        .catch(e => console.log("error", e));
    },
  async onPullDownRefresh() {
    // to doing..
  },
  methods: {
    showNotesClick() {
      this.showNotes = true;

    },
  
  }
};
</script>

<style lang="scss" scoped>
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
  }
}
</style>

