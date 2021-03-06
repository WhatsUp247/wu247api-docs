const { description } = require('../../package')

module.exports = {
  base: '/wu247api-docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "What'sUp 24/7 API Documentation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      'link',
      { rel: 'icon', href: `https://www.whatsup247.com/img/favicon-16x16.png` },
    ],
    [
      'link',
      { rel: 'icon', href: `https://www.whatsup247.com/img/favicon-32x32.png` },
    ],
    [
      'link',
      { rel: 'icon', href: `https://www.whatsup247.com/img/favicon-48x48.png` },
    ],
    ['meta', { name: 'theme-color', content: '#418d96' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/WhatsUp247/wu247api-docs',
    logo: 'https://www.whatsup247.com/img/wu-logo-icon.svg',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      // {
      // 	text: "Config",
      // 	link: "/config/",
      // },
      {
        text: "What'sUp 24/7",
        link: 'https://www.whatsup247.com',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'authentication', 'use', 'categories'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
