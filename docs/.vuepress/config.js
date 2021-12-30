module.exports = {
  base: '/', // base url을 설정합니다.
  title: 'Today I Learned',
  description: 'today i learned',
  head: [
    // 공통 head 태그 설정
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  theme: '@vuepress/theme-default',
  themeConfig: {
    // VuePress 기본 테마에 필요한 설정
    // logo: '/logo.png', // title옆에 나타날 로고 이미지 // .vuepress/public
    sidebar: ['/', ['/guide/', 'guide']],
    nav: [
      // 페이지 우측 상단에 보여질 nav들
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Sample', link: '/sample.html' },
      { text: 'GitHub', link: 'https://github.com/thisyujeong' },
      {
        text: 'About',
        items: [
          { text: 'About Me', link: '/about/me' },
          { text: 'About Blog', link: '/about/blog' },
        ],
      },
    ],
  },
  plugins: ['@vuepress/back-to-top'],
  smoothScroll: true,
};
