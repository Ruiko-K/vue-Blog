//app.vue
<template>
  <div id='panel'>
    <!-- header -->
    <div class="bg-img">
      <img src="../imgs/67379620_p0.png" alt="backgroundImg">
    </div>

    <!-- navbar -->
    <nav>
      <router-link to="/post/计算机?count=1">计算机</router-link>
      <router-link to="/post/动漫?count=2">动漫</router-link>
      <router-link to="/post/生活?count=3">生活</router-link>
      <router-link to="/photo">相册</router-link>
    </nav>

    <div @click="showRecommend()" @mousedown="startP($event)" @mousemove="moveP($event)" @mouseup="stopP()">不定期推荐~</div>

    <div id='recommend' v-if="recommendFlg">不定期推荐</div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div style="position:relative">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "vue + webpack",
      recommendFlg: false,
      startX: -1
    };
  },
  methods: {
    showRecommend: function(message) {
      this.recommendFlg = true;
    },
    startP: function(e) {
      this.startX = e.screenX;
      console.log(this.startX);
    },
    moveP: function(e) {
      document.getElementById("recommend").style.left = e.screenX - this.startX;
      console.log(e.screenX - this.startX);
    },
    stopP: function() {
      this.startX = -1;
    }
  }
};
</script>

<style>
.bg-img {
  width: 100%;
  height: 14rem;
  overflow: hidden;
}

.bg-img > img {
  width: 100%;
  border: 0px;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  position: static;
}
.fade-enter,
.fade-leave-to {
  position: absolute;
  top: 0px;
  opacity: 0;
}
#recommend {
  position: relative;
}
</style>