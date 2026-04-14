import { defineConfig } from 'vitepress'

export default defineConfig({
  // 基本信息
  lang: 'zh-CN',
  title: 'MyTGBot Docs',
  // 如果部署到 GitHub Pages，请修改 base 为你的仓库名，如 '/docs/'
  base: '/docs/',
  description: 'Telegram Bot 部署文档',

  // 功能开关
  lastUpdated: true,
  cleanUrls: true,

  // 多语言支持
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
    },
  },

  // HTML 头部配置
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  // 主题配置
  themeConfig: {
    nav: navBar(),
    siteTitle: 'MyTGBot Docs',
    logo: '/logo.svg',

    sidebar: {
      '/guide/': sidebarGuide(),
      '/dev/': sidebarDev(),
      '/en/guide/': sidebarGuideEn(),
      '/en/dev/': sidebarDevEn(),
    },

    editLink: {
      pattern: 'https://github.com/aiastia-dockerhub/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aiastia-dockerhub/docs' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-present',
    },

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    outline: [1, 3],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                },
              },
            },
          },
        },
      },
    },
  },
})

/* ========================================
 * 导航栏配置
 * ======================================== */
function navBar() {
  return [
    { text: 'Bot 部署指南', link: '/guide/bot-115', activeMatch: '/guide/' },
    { text: '开发文档', link: '/dev/basic', activeMatch: '/dev/' },
    {
      text: '更多',
      items: [
        {
          text: 'GitHub',
          link: 'https://github.com/aiastia-dockerhub/mytgbot',
        },
        {
          text: '更新日志',
          link: 'https://github.com/aiastia-dockerhub/docs/releases',
        },
      ],
    },
  ]
}

/* ========================================
 * 侧边栏 - 中文
 * ======================================== */
function sidebarGuide() {
  return [
    {
      text: 'Bot 部署文档',
      collapsed: false,
      items: [
        { text: '115 磁力推送 Bot', link: '/guide/bot-115' },
        { text: '消息内容提取 Bot', link: '/guide/bot-code' },
        { text: 'Bot 指挥官 (Commander)', link: '/guide/bot-commander' },
        { text: 'FileID 管理 Bot', link: '/guide/bot-fileid' },
        { text: 'JavBus 搜索 Bot', link: '/guide/bot-javbus' },
        { text: '媒体监控 Bot (MPT)', link: '/guide/bot-mpt' },
        { text: '贴纸转图片 Bot', link: '/guide/bot-sticker2img' },
        { text: '导航链接 Bot (Top)', link: '/guide/bot-top' },
        { text: 'Gost 隧道管理 Bot', link: '/guide/bot-tunnel' },
        { text: 'TXT 文件分享 Bot', link: '/guide/bot-txttg' },
        { text: '视频队列分发 Bot (VQueue)', link: '/guide/bot-vqueue' },
        { text: '视频分发 Bot (VSender)', link: '/guide/bot-vsender' },
      ],
    },
  ]
}

function sidebarDev() {
  return [
    {
      text: '开发指南',
      items: [
        { text: '快速开发', link: '/dev/basic' },
        { text: '架构介绍', link: '/dev/arch' },
      ],
    },
  ]
}

/* ========================================
 * 侧边栏 - 英文
 * ======================================== */
function sidebarGuideEn() {
  return [
    {
      text: 'Bot Deployment',
      collapsed: false,
      items: [
        { text: '115 Magnet Bot', link: '/en/guide/bot-115' },
        { text: 'Message Extract Bot', link: '/en/guide/bot-code' },
        { text: 'Bot Commander', link: '/en/guide/bot-commander' },
        { text: 'FileID Manager Bot', link: '/en/guide/bot-fileid' },
        { text: 'JavBus Search Bot', link: '/en/guide/bot-javbus' },
        { text: 'Media Monitor Bot (MPT)', link: '/en/guide/bot-mpt' },
        { text: 'Sticker to Image Bot', link: '/en/guide/bot-sticker2img' },
        { text: 'Navigation Links Bot (Top)', link: '/en/guide/bot-top' },
        { text: 'Gost Tunnel Manager Bot', link: '/en/guide/bot-tunnel' },
        { text: 'TXT File Share Bot', link: '/en/guide/bot-txttg' },
        { text: 'Video Queue Bot (VQueue)', link: '/en/guide/bot-vqueue' },
        { text: 'Video Sender Bot (VSender)', link: '/en/guide/bot-vsender' },
      ],
    },
  ]
}

function sidebarDevEn() {
  return [
    {
      text: 'Development',
      items: [
        { text: 'Quick Start', link: '/en/dev/basic' },
        { text: 'Architecture', link: '/en/dev/arch' },
      ],
    },
  ]
}