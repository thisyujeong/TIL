<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
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

export default {
  components: { PageEdit, PageNav, Comment },
  props: ['sidebarItems'],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
.utterances-comment
  padding 0 2rem
</style>
