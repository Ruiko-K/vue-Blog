//app.vue
<template>
    <section class="main">
        <p>我来了乐乐乐乐{{name}}</p>
        <img src="../imgs/67379620_p0.png" alt="">
    </section>
</template>

<script>
export default {
  data() {
    return {
      name: "vue + webpack"
    };
  }
};
</script>

<style>
.main > p {
  color: #f8c92eb0;
}
</style>