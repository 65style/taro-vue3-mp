export default defineAppConfig({
  pages: ['pages/create/index', 'pages/find/index', 'pages/my/index'],
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index']
    },
    {
      root: 'pagesSub/search',
      pages: ['index']
    },
    {
      root: 'pagesSub/my',
      pages: ['detail/index', 'about/index']
    },
    {
      root: 'pagesSub/book',
      pages: ['detail/index', 'person/list/index', 'person/detail/index']
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
