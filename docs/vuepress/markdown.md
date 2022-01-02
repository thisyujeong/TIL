---
title: Vuepress Markdown Extension
meta:
  - name: description
    content: 문서의 description
  - property: og:title
    content: 문서의 title
  - property: og:description
    content: 문서의 description
  - property: og:url
    content: https://mysite.com/hello.html
tags: ['vuepress', 'markdown']
---

# Vuepress Markdown Extension

## Custom Container

> 공식문서 [Custom Containers](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)

### tip

:::tip
Tip Box
:::

### warning

:::warning
Warning Box
:::

### danger

:::danger
Danger Box
:::

## Line Highlighting in Code Blocks

> _```js{3}_ 형식  
> 공식문서 [Line Highlighting in Code Blocks](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)

## LineNumbers

```js{3-5}
// docs/.vuepress/config.js
module.exports = {
  markdown: {
    lineNumbers: true,
  },
};
```

## Table of Contents

```md
[[toc]]
```
