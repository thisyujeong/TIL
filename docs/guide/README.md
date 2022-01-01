---
meta:
  - name: description
    content: 문서의 description
  - property: og:title
    content: 문서의 title
  - property: og:description
    content: 문서의 description
  - property: og:url
    content: https://mysite.com/hello.html
tags: ['vuepress', 'md 사용법', '태그']
---

# Guide

[[toc]]

## Markdown Extension Guide

### extension 1. Custom Container

> 공식문서 [Custom Containers](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)

#### tip

:::tip
Tip Box
:::

#### warning

:::warning
Warning Box
:::

#### danger

:::danger
Danger Box
:::

### extension 2.Line Highlighting in Code Blocks

> _```js{3}_ 형식  
> 공식문서 [Line Highlighting in Code Blocks](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)

### extension 3. LineNumbers

```js{3}
// docs/.vuepress/config.js
module.exports = {
  markdown: {
    lineNumbers: true,
  },
};
```

### extension 4. Table of Contents

```md
[[toc]]
```

<TagLinks />
