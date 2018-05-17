//app.vue
<template>
  <div id='panel'>
    <!-- header -->
    <div class="bg-img">
      <img src="../imgs/67379620_p0.png" alt="backgroundImg">
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
body {
  font-family: Cambria, Georgia, "Microsoft Jhenghei", "Hiragino Sans GB",
    "Microsoft YaHei", "Times New Roman", serif;
}

a {
  text-decoration: unset;
}

#panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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