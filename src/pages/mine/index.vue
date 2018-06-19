<template>
    <div class='containers'>
        <div class="inputDiv">
            <input class='input' type="text" v-model="inputValue" placeholder="输入诗词关键字或作者姓名">
            <p @click="clickSearch()" class="search">搜索</p>
        </div>

        <div class="articles" v-for='(item,index) in result' :key='index'>
            <p class="articleList" @click="goDetail(item)">{{item.name}}<span class="spanItem">({{inputValue}})</span></p>
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      list: [],
      inputValue: "",
      result: []
    };
  },

  components: {},
  mounted() {},
  computed: {},

  methods: {
    clickSearch() {
      console.log(this.inputValue);
      if (this.inputValue.length < 1) {
        wx.showToast({
          icon: "none",
          title: "输入内容为空"
        });
        return;
      }
      wx.showLoading({
        title: "加载中"
      });
      this.$http
        .get(
          "https://api.avatardata.cn/TangShiSongCi/Search?key=a8d840872c8448cf8bf3a61b71e9ed55&keyWord=" +
            this.inputValue,
          {}
        )
        .then(d => {
          console.log(d);
          this.result = d.data.result;

          wx.hideLoading();
        })
        .catch(e => console.log("error", e));
    },
    goDetail(item) {
      wx.navigateTo({
        url: `../detail/main?id=${item.id}`
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.containers {
  background-color: rgb(245, 245, 249);
  font-size: 30rpx;
  overflow: hidden;
  background: #fff;
  padding: 0 30rpx;
  text-align: center;
  .inputDiv {
    display: flex;
    .input {
      width: 400rpx;
      height: 30rpx;
      align-items: center;
    }
    .search {
      display: flex;
      margin-left: 30rpx;
      line-height: 30rpx;
      justify-content: center;
      align-items: center;
    }
  }
  .articles{
      margin-top: 20rpx;
      .articleList{
          height: 40rpx;
          color: #323232;
          .spanItem{
              color: #646464;
              font-size: 24rpx;
              margin-left: 15rpx;
          }
      }
  }
}
</style>
