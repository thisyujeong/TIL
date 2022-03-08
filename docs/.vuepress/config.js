const CONST = require('./const');

module.exports = {
  base: '/TIL/', // base url을 설정합니다.
  title: '📂 thisyujeong-til',
  description: '오늘 배운 것, 에러 해결을 기록하는 기술 블로그.',
  'google-site-verification': 'CmzbHfw6FQITzUtPrwKhqzF1nUBt3NewwhyaoKF8alI',
  head: [
    // 공통 head 태그 설정
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    smoothScroll: true,
    // logo: '/logo.png', // title옆에 나타날 로고 이미지 // .vuepress/public
    sidebarDepth: 3,
    sidebar: [
      {
        title: 'git',
        collapseble: true,
        children: CONST.Git,
      },
      {
        title: 'react',
        collapseble: true,
        children: CONST.React,
      },
      {
        title: 'Node.js',
        collapseble: true,
        children: CONST.Node,
      },
      {
        title: 'database',
        collapseble: true,
        children: CONST.Database,
      },
      {
        title: 'vuepress',
        collapseble: true,
        children: CONST.Vuepress,
      },
      {
        title: 'javascript',
        collapseble: true,
        children: CONST.Javascript,
      },
      {
        title: 'typescript',
        collapseble: true,
        children: CONST.Typescript,
      },
      {
        title: 'algorithm',
        collapseble: true,
        children: [
          { title: 'baekjoon', collapsable: true, children: CONST.Algorithm.baekjoon },
          /* {
            title: 'programmers',
            collapsable: true,
            children: CONST.Algorithm.programmers,
          }, */
        ],
      },
    ],
    nav: [
      // 페이지 우측 상단에 보여질 nav들
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/thisyujeong' },
      // {
      //   text: 'About',
      //   items: [
      //     { text: 'About Me', link: '/about/me' },
      //     { text: 'About Blog', link: '/about/blog' },
      //   ],
      // },
    ],
  },
  locales: {
    '/': {lang: 'ko-KR'}
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['sitemap', { hostname: 'https://thisyujeong.github.io/TIL/' }],
    ['@vuepress/google-analytics', { ga: 'UA-216151251-1' }],
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['vuepress-plugin-code-copy'],
  ],
  smoothScroll: true,
};
