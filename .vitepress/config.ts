import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档",
  description: "某不知名的输入法文档站",
  rewrites: {
    "librime-lua.wiki/Home.md": "rime/luaHome.md",
    "librime-lua.wiki/Scripting.md": "rime/lua.md",

    "home.wiki/Home.md": "rime/index.md",
    "home.wiki/UserGuide.md": "rime/RimeUserGuide.md",
    "home.wiki/:name": "rime/:name",
    "trime.wiki/:name": "rime/:name",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: "deep", // 大纲层级
    nav: [
      { text: "Home", link: "/" },
      { text: "Rime", link: "/rime/" },
      {
        text: "List",
        items: [
          {
            text: "星辰双拼",
            link: "/xingchen/",
          },
          {
            text: "心流双拼",
            link: "/xingchen/",
          },
          {
            text: "小可两笔",
            link: "/xingchen/",
          },
          {
            text: "倾心两笔",
            link: "/xingchen/",
          },
        ],
      },
    ],

    sidebar: {
      "/test/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/rime/": sidebarRime(),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/nopdan/docs" },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tencent-qq" viewBox="0 0 16 16">
            <path d="M6.048 3.323c.022.277-.13.523-.338.55-.21.026-.397-.176-.419-.453-.022-.277.13-.523.338-.55.21-.026.397.176.42.453Zm2.265-.24c-.603-.146-.894.256-.936.333-.027.048-.008.117.037.15.045.035.092.025.119-.003.361-.39.751-.172.829-.129l.011.007c.053.024.147.028.193-.098.023-.063.017-.11-.006-.142-.016-.023-.089-.08-.247-.118Z"/>
            <path fill-rule="evenodd" d="M11.727 6.719c0-.022.01-.375.01-.557 0-3.07-1.45-6.156-5.015-6.156-3.564 0-5.014 3.086-5.014 6.156 0 .182.01.535.01.557l-.72 1.795a25.85 25.85 0 0 0-.534 1.508c-.68 2.187-.46 3.093-.292 3.113.36.044 1.401-1.647 1.401-1.647 0 .979.504 2.256 1.594 3.179-.408.126-.907.319-1.228.556-.29.213-.253.43-.201.518.228.386 3.92.246 4.985.126 1.065.12 4.756.26 4.984-.126.052-.088.088-.305-.2-.518-.322-.237-.822-.43-1.23-.557 1.09-.922 1.594-2.2 1.594-3.178 0 0 1.041 1.69 1.401 1.647.168-.02.388-.926-.292-3.113a25.78 25.78 0 0 0-.534-1.508l-.72-1.795ZM9.773 5.53c-.13-.286-1.431-.605-3.042-.605h-.017c-1.611 0-2.913.319-3.042.605a.096.096 0 0 0-.01.04c0 .022.008.04.018.056.11.159 1.554.943 3.034.943h.017c1.48 0 2.924-.784 3.033-.943a.095.095 0 0 0 .008-.096Zm-4.32-.989c-.483.022-.896-.529-.922-1.229-.026-.7.344-1.286.828-1.308.483-.022.896.529.922 1.23.027.7-.344 1.286-.827 1.307Zm2.538 0c.483.022.896-.529.922-1.229.026-.7-.344-1.286-.827-1.308-.484-.022-.896.529-.923 1.23-.026.7.344 1.285.828 1.307ZM2.928 8.99a10.674 10.674 0 0 0-.097 2.284c.146 2.45 1.6 3.99 3.846 4.012h.091c2.246-.023 3.7-1.562 3.846-4.011.054-.9 0-1.663-.097-2.285-1.312.26-2.669.41-3.786.396h-.017c-.297.003-.611-.005-.937-.023v2.148c-1.106.154-2.21-.068-2.21-.068V9.107a22.93 22.93 0 0 1-.639-.117Z"/>
            </svg>`,
        },
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=mCNAUgTWirjPnkYWf2tkfd_Px-1VEOyq&authKey=j0NgWMLeNtdhgZsZ9qvHm2Wvp8rC2gggl0MAmodnwk9TUvJ5KgXKTXI9K6w2jUOD&noverify=0&group_code=311818880",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present nopdan",
    },
  },
});

function sidebarRime() {
  return [
    {
      text: "开始",
      items: [
        { text: "Home", link: "/rime/" },
        { text: "自序", link: "/rime/Introduction" },
        { text: "说明书", link: "/rime/RimeUserGuide" },
        { text: "Rime前端汇总", link: "/rime/Rime前端汇总" },
        {
          text: "Rime经典资料汇总",
          link: "/rime/Rime经典资料汇总-菜鸟书评",
        },
      ],
    },
    {
      text: "基础",
      collapsed: true,
      items: [
        { text: "用户文件夹", link: "/rime/UserData" },
        { text: "共享文件夾", link: "/rime/SharedData" },
        { text: "yaml 基础语法", link: "/rime/YamlGrammar" },
        {
          text: "配置文件中的 yaml 语法",
          link: "/rime/trimer小知识(2)---配置文件中的一些yaml语法",
        },
        { text: "Rime 配置文件", link: "/rime/Configuration" },
        {
          text: "yaml 开头注释",
          link: "/rime/trimer小知识(1)---Yaml文件开头注释是什么意思？",
        },
      ],
    },
    {
      text: "进阶",
      items: [
        { text: "Rime 定製指南", link: "/rime/CustomizationGuide1" },
        { text: "输入方案设计书", link: "/rime/RimeWithSchemata" },
        { text: "Schema.yaml 詳解", link: "/rime/Rime方案製作詳解" },
        { text: "拼写运算", link: "/rime/SpellingAlgebra" },
      ],
    },
    {
      text: "trime 同文",
      items: [
        { text: "简易索引", link: "/rime/UserGuide" },
        { text: "trime.yaml 詳解", link: "/rime/trime.yaml詳解" },
        {
          text: "案例参考-五笔双键配置案例详解(待完善)",
          collapsed: true,
          items: [
            {
              text: "(一) 准备篇",
              link: "/rime/五笔双键配置案例详解(一)-准备篇",
            },
            {
              text: "(二) 添加一个输入方案",
              link: "/rime/五笔双键配置案例详解(二)-添加一个输入方案",
            },
            {
              text: "(三) 用模糊音实现双键转换",
              link: "/rime/五笔双键配置案例详解(三)-用模糊音实现双键转换",
            },
            {
              text: "(四) 实现手机上的双键键盘",
              link: "/rime/五笔双键配置案例详解(四)-实现手机上的双键键盘",
            },
          ],
        },
      ],
    },
    {
      text: "librime-lua",
      items: [
        { text: "Home", link: "/rime/luaHome" },
        { text: "脚本开发指南", link: "/rime/Scripting" },
      ],
    },
    {
      text: "其他",
      collapsed: true,
      items: [
        { text: "詞典擴展包", link: "/rime/DictionaryPack" },
        { text: "配方", link: "/rime/Recipes" },
        { text: "概念解讀", link: "/rime/RimeWithTheDesign" },
        { text: "心情集", link: "/rime/MoodCollection" },
        { text: "用家如是說", link: "/rime/UserQuotes" },
        { text: "FAQ", link: "/rime/FAQ" },
      ],
    },
  ];
}
