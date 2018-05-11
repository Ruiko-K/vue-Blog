<template>

    <article class='post'>
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
        <section>
            {{postContext}}
        </section>

        <div class="lookMore">继续阅读</div>
    </article>

</template>

<script>
export default {
  data() {
    return {
      postDate: "2018年5月11日",
      editDate: "2018年5月11日",
      postType: "动漫",
      auther: "kxq",
      postContext:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
    };
  }
};
</script>

<style>
.post {
  margin-top: 2em;
}
.post > h1 {
  color: #4c4c4c;
}

.post > aside {
  color: #999;
}

.post > section {
  margin-top: 1em;
  width: 40em;
}
.lookMore {
  margin-top: 1em;
  color: cadetblue;
}
</style>


