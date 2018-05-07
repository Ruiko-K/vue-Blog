<template>

    <article class='post'>
        <h1>第{{ $route.query.count }}篇{{$route.params.type}}测试文章</h1>
        <aside>
            <span>标签1</span>
            <span>标签2</span>
            <span>标签3</span>
        </aside>
        <section>
            内容内容内容
        </section>
    </article>

</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.post {
  margin-top: 2em;
}
</style>


