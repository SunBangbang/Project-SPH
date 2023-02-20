<template>
  <div class="spec-preview">
    <img :src="objList.imgUrl" />
    <!-- 绑定鼠标移动事件的 -->
    <div class="event" @mousemove="zoom"></div>
    <div class="big">
      <img :src="objList.imgUrl" ref="bigImg" />
    </div>
    <!-- 蒙版 -->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data() {
      return {
        imgIndex:0
      }
    },
    props:['skuImageList'],
    computed:{
      objList(){
        return this.skuImageList[this.imgIndex] || {}
      }
    },
    mounted(){
      //获取imageList传来的索引值
      this.$bus.$on('getIndex',(index)=>{
        this.imgIndex = index
      })
    },
    methods: {
      zoom(event){
        let mask = this.$refs.mask
        let bigImg = this.$refs.bigImg
        let left = event.offsetX - mask.offsetWidth/2
        let top = event.offsetY - mask.offsetHeight/2
        //约束蒙版移动的范围
        if(left <= 0) left = 0
        if(left > mask.offsetWidth) left = mask.offsetWidth
        if(top <= 0) top = 0
        if(top > mask.offsetHeight) top = mask.offsetHeight
        //设置蒙版的top|left
        mask.style.left = left + 'px'
        mask.style.top = top + 'px'
        //设置大图的top|left
        bigImg.style.left = -2*left +'px'
        bigImg.style.top = -2*top +'px'
      }
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>