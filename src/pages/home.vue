<template>
    <div>
        <!-- navbar -->
        <div id="navbar">
            <img id="profile-picture" src="../imgs/photo.jpeg" alt="">
            <nav>
                <router-link to="/post/计算机?count=1">计算机</router-link>
                <router-link to="/post/动漫?count=2">动漫</router-link>
                <router-link to="/post/生活?count=3">生活</router-link>
                <router-link to="/photo">相册</router-link>
            </nav>
        </div>

        <div id="recommend-in" @click="showRecommend()">
            <h5>不定期推荐~</h5>
        </div>
        <transition name="fade">
            <div id='recommend' v-if="recommendFlg" @mousedown="startP($event)" @mousemove="moveP($event)" @mouseup="stopP()" @mouseout="stopP()">不定期推荐</div>
        </transition>

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
    },
    moveP: function(e) {
      if (this.startX != -1) {
        let left = document.getElementById("recommend").style.left;
        document.getElementById("recommend").style.left =
          e.screenX - this.startX + "px";

        if (parseInt(left) > 150) {
          this.recommendFlg = false;
          this.startX = -1;
        }
      }
    },
    stopP: function() {
      this.startX = -1;
      if (this.recommendFlg) {
        document.getElementById("recommend").style.left = "0px";
      }
    }
  }
};
</script>
<style>
#navbar {
  display: flex;
  flex-direction: initial;
  align-items: center;
  margin: 1em;
}

#navbar > nav {
  margin-left: 1em;
}

nav > a {
  margin-left: 1em;
  align-self: flex-end;
  font-size: 1.7em;
  font-weight: 600;
  color: #222;
  margin-left: 0.2em;
  letter-spacing: -2px;
}

nav > a:hover {
  border-bottom: solid #999 2px;
}

#profile-picture {
  width: 5em;
  height: 5em;
  border-radius: 10px;
  border: solid 1px rgba(233, 230, 227, 0.808);
  vertical-align: top;
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

#recommend-in {
  width: 10em;
  height: 4em;
  background-color: cornsilk;
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

#recommend-in > h5 {
  justify-content: center;
}

#recommend {
  position: fixed;
  background-color: beige;
  height: 100%;
  width: 100%;
  z-index: 2;
  top: 14.5em;
}
</style>
