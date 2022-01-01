<!-- .vuepress/components/TagList.vue -->
<template lang="html">
  <div class="tag-list">
    <span v-for="tag in Object.keys(tags)">
      <h3 :id="tag">
        <router-link
          :to="{ path: `/tags.html#${tag}` }"
          class="header-anchor"
          aria-hidden="true"
          >#</router-link
        >
        {{ tag }}
      </h3>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {};
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags;
    },
  },
};
</script>

<style lang="stylus">
.tag-list
  h3
    font-size: 1.2rem
    margin-bottom: 0.2em
  ul
    margin: 0.2em 0
    li
      list-style: none
      position: relative
      :before
        position:absolute
        left: -1.2em
        top: 50%
        transform: translateY(-50%)
        color: #e1e4e8
        content: '– '
      :hover:before
        color: #c5cdd7
</style>
