---
title: Vue Fragments eslint 에러 해결
meta:
  - name: description
    content: Vue Fragments eslint 에러 해결
  - property: og:title
    content: Vue Fragments eslint 에러 해결
  - property: og:url
    content: https://thisyujeong.github.io/TIL/vue/vue-sass.html
tags: ['Vue', 'Sass']
---

# Vue Fragments eslint 에러 해결

기존 Vue2 에서는 아래 예시와 같이 컴포넌트를 반드시 한개의 Root Element 로 감싸주어야했다.

```html
// vue 2
<template>
  <div>
    <h1>Hello, world!</h1>
    <p>Lorem Ipsum is simply dummy text of the printing ..</p>
  </div>
</template>
```

하지만 Vue3 에서는 하나의 Root Element로 감싸주지 않아도 된다.

```html
// vue 3
<template>
  <h1>Hello, world!</h1>
  <p>Lorem Ipsum is simply dummy text of the printing ..</p>
</template>
```

Vue2 eslint 확장 프로그램이 설치 되어있다면 프로젝트에서 빨간 밑줄로 에러가 뜨는것을 확인 할 수 있는데,

이는 package.json 의 `eslintConfig` 옵션에 아래 코드를 추가해준 후 VSCode 를 재시작하면 밑줄이 사라진 것을 확인할 수 있다.
