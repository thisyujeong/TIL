---
title: Vuepress Markdown Extension
meta:
  - name: description
    content: Vuepress 마크다운 익스텐션을 정리한 글입니다.
  - property: og:title
    content: Vuepress Markdown Extension
  - property: og:description
    content: Vuepress 마크다운 익스텐션을 정리한 글입니다.
  - property: og:url
    content: https://thisyujeong.github.io/TIL/vuepress/markdown.html
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
