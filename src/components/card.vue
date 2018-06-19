<template>
    <div class="box">
        <div v-for='(item,index) in items' :key='index' class="item" @click="goDetail(item)">

            <div class="three" v-if="item.thumbnail_pic_s && item.thumbnail_pic_s02 && item.thumbnail_pic_s03">
                <div class="title">{{item.title}}</div>
                <div class="imgBox">
                    <img :src="item.thumbnail_pic_s" class="img">
                    <img :src="item.thumbnail_pic_s02" class="img">
                    <img :src="item.thumbnail_pic_s03" class="img">
                </div>
                <div class="year">来源:{{item.category}}{{item.date}}</div>
            </div>

            <div class="two" v-else-if="item.thumbnail_pic_s && item.thumbnail_pic_s02">
                <div class="title">{{item.title}}</div>
                <div class="imgBox2">
                    <img :src="item.thumbnail_pic_s" class="img2">
                    <img :src="item.thumbnail_pic_s02" class="img2">
                </div>
                <div class="year">来源:{{item.category}}{{item.date}}</div>
            </div>

            <div class="one" v-else>
                <div class="left">
                    <div class="title">{{item.title}}</div>
                    <div class="year1">来源:{{item.category}}{{item.date}}</div>
                </div>
                <div class="imgBox1">
                    <img :src="item.thumbnail_pic_s" class="img1">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: {
    vueWaterfallEasy
  },
  props: {
    items: Object
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    goDetail(item) {
      wx.navigateTo({
        url: `../detail/main?url=${item.url}`

      });
    }
  }
};
</script>

<style lang='scss'  scoped>
.item {
  box-sizing: content-box;
  padding: 30rpx;
  background-color: white;
  border-bottom: solid 1rpx #f0f0f0;

  .title {
    font-size: 36rpx;
    font-weight: bolder;
    color: #666;
    word-wrap: break-word;
  }
  .year {
    margin-top: 15rpx;
    font-size: 22rpx;
    color: #999;
  }
  .imgBox {
    margin-top: 10rpx;
    display: flex;
    flex-direction: row;
    .img {
      flex: 1;
      padding: 0 5rpx;
      height: 150rpx;
    }
  }
  .imgBox2 {
    margin-top: 10rpx;
    display: flex;
    flex-direction: row;
    .img2 {
      flex: 1;
      padding: 0 5rpx;
      height: 150rpx;
    }
  }

  .one {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .img1 {
      height: 150rpx;
      width: 210rpx;
      margin-right: 0;
    }
    .left {
      margin-right: 10rpx;
      .year1 {
        margin-bottom: 0rpx;
        font-size: 22rpx;
        color: #999;
      }
    }
  }
}
</style>
