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
  max-width 740px
  padding 1em 2.5em
  border-top 1px solid $borderColor
  border-bottom 1px solid $borderColor
  margin 24px auto
@media (max-width: $MQMobile)
  .tag-list
    padding 1em 1.5em
    a
      font-size: 14px
</style>
