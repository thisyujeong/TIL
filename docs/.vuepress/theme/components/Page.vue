<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
    <TagLinks v-if="$page.frontmatter.tags" class="tag-links" />
    <Comment class="utterances-comment" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue';
import PageNav from '@theme/components/PageNav.vue';
import Comment from '../../components/Comment.vue';
import TagLinks from '../../components/TagLinks.vue';

export default {
  components: { PageEdit, PageNav, Comment, TagLinks },
  props: ['sidebarItems'],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  background: $bg-base;
  padding-bottom 2rem
  padding-right: 260px
  display block
.tag-links
  margin 0 2rem
.utterances-comment
  padding 0 2rem
@media (max-width: $MQMobile)
  .page
    padding-right 0
</style>
