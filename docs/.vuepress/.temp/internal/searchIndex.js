export const searchIndex = [
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "符合 PEP8 语法规范的清晰易懂的语法",
        "slug": "符合-pep8-语法规范的清晰易懂的语法",
        "link": "#符合-pep8-语法规范的清晰易懂的语法",
        "children": []
      },
      {
        "level": 2,
        "title": "由 Vue 强势驱动",
        "slug": "由-vue-强势驱动",
        "link": "#由-vue-强势驱动",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "关于项目",
    "headers": [],
    "path": "/guide/About.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "八年级上学期",
    "headers": [
      {
        "level": 2,
        "title": "Hello Python",
        "slug": "hello-python",
        "link": "#hello-python",
        "children": []
      }
    ],
    "path": "/python_group/8A.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "八年级下学期",
    "headers": [
      {
        "level": 2,
        "title": "Hello Python",
        "slug": "hello-python",
        "link": "#hello-python",
        "children": []
      }
    ],
    "path": "/python_group/8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Python 教程首页",
    "headers": [],
    "path": "/python_group/Home.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
