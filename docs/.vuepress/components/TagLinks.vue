<template lang="html">
  <div class="tag-list">
    <span>TAGS</span>

    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/#${tag}` }"
    >
      {{ tag }}
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
span
  position relative
  font-weight bold
  font-size 14px
  margin-right 1em
a
  margin-right 10px
  font-size 12px
  font-weight 500
  text-transform capitalize
.tag-list
  padding 10px 0
  border-top 1px solid $borderColor
  border-bottom 1px solid $borderColor
  margin-top 24px
</style>
