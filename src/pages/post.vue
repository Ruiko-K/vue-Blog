<template>
  <div>
    <article class='post' v-for="n in 10 " :key="n.id">
      <h1>第{{ $route.query.count }}篇{{$route.params.type}}测试文章</h1>
      <aside>
        <span>发布时间:
          <time>{{ postDate }}</time>
        </span>
        <span>修改时间:
          <time>{{ editDate }}</time>
        </span>
        <span>分类:{{ postType }}</span>
        <span> 作者:{{ auther }} </span>
      </aside>

      <img class="post_title_img" src="../imgs/post_img.jpg" alt="">

      <section>
        {{postContext}}
      </section>

      <span class="lookMore">
        <router-link to="/big-post">继续阅读</router-link>
      </span>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postDate: "2018.5.11",
      editDate: "2018.5.11",
      postType: "动漫",
      auther: "kxq",
      postContext:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内" +
        "容内容内容内容内容内容内容内容内容内容内容内容内容内容内" +
        "容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
    };
  }
};
</script>

<style>
.post {
  margin-top: 2em;
  width: 50em;
}
.post > h1 {
  color: #4c4c4c;
}

.post > aside {
  color: #999;
}

.post > section {
  margin-top: 1em;
  margin-bottom: 1em;
  text-indent: 2em;
}

aside > span {
  margin-left: 0.7em;
}

.post_title_img {
  margin-top: 1em;
  border-radius: 5px;
  width: 100%;
  max-width: 100%;
}
.lookMore {
  margin-top: 1em;
  color: cadetblue;
}

.lookMore:hover {
  border-bottom: #999 solid 1px;
}
</style>


