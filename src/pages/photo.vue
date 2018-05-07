<template>
  <div class="photo-wall">

    <img v-for="n in 3" :key="n" src="../imgs/67379620_p0.png" alt="">
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
.photo-wall {
  margin-top: 1em;
}

.photo-wall > img {
  width: 20rem;
  height: auto;
}
</style>
