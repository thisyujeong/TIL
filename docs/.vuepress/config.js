const CONST = require('./const');

module.exports = {
  base: '/TIL/', // base url을 설정합니다.
  title: '📂 Today I Learned',
  description: '오늘 배운 것을 기록하는 블로그.',
  head: [
    // 공통 head 태그 설정
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    smoothScroll: true,
    // logo: '/logo.png', // title옆에 나타날 로고 이미지 // .vuepress/public
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Node.js',
        collapseble: true,
        children: CONST.Node,
      },
      {
        title: 'vuepress',
        collapseble: true,
        children: CONST.Vuepress,
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
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ['sitemap', { hostname: 'https://thisyujeong.github.io/TIL/' }],
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['vuepress-plugin-code-copy'],
  ],
  smoothScroll: true,
};
