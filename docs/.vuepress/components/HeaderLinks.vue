<template>
  <div>
    <div v-for="header in headers" class="header">
      <router-link
        :class="isActive(getHeaderPath(header.slug)) ? 'active' : ''"
        :to="getHeaderPath(header.slug)"
        class="sub-sidebar-link"
      >
        {{ header.title }}
      </router-link>
      <HeaderLinks :headers="header.children" :rootPath="rootPath" />
    </div>
  </div>
</template>

<script>
import { isActive } from '../theme/util/index';

export default {
  name: 'HeaderLinks',
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    rootPath: {
      type: String,
      required: true,
    },
  },
  methods: {
    isActive(path) {
      return isActive(this.$route, path);
    },
    getHeaderPath(slug) {
      return `${this.rootPath}#${slug}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.header
  padding 8px 0 0 1rem
  a.sub-sidebar-link
    font-weight 400
    display inline-block
    color $textColor
    overflow hidden;
    text-overflow ellipsis;
    white-space: nowrap;
    width 100%
  a.sub-sidebar-link.active
    font-weight: 600
    color: $accentColor
    border-left-color $accentColor
</style>
