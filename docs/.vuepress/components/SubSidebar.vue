<template>
  <aside class="sub-sidebar">
    <HeaderLinks :headers="headers" :rootPath="currentPath" class="pr-2" />
  </aside>
</template>

<script>
import { groupHeaders } from '../theme/util/index';
import HeaderLinks from './HeaderLinks.vue';
export default {
  name: 'SubSidebar',
  components: { HeaderLinks },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    currentPath: {
      type: String,
    },
  },
  computed: {
    headers() {
      const currentItem = findCurrentItem(this.items, this.currentPath);
      if (currentItem && currentItem.headers) {
        return groupHeaders(currentItem.headers);
      }
      return [];
    },
  },
};
function findCurrentItem(items, currentPath) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.type === 'group') {
      const currentItem = findCurrentItem(item.children, currentPath);
      if (currentItem) {
        return currentItem;
      }
    } else {
      if (currentPath === item.path) {
        return item;
      }
    }
  }
  return null;
}
</script>

<style lang="stylus" scoped>
.sub-sidebar
  font-size: 13px
  background-color: $bg-base
  width: 260px
  position: fixed
  z-index: 10
  margin: 0
  top: 3.6rem
  right: 0
  bottom: 0
  box-sizing: border-box;
  border-left: 1px solid #eaecef
  overflow-y: auto;
  padding 1rem 0 1rem 0
  ul
    list-style-type none
@media (max-width: $MQMobile)
  .sub-sidebar
    display: none
</style>
