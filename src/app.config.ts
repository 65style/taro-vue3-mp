export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shop/index',
    'pages/case/index',
    'pages/cust/index',
    'pages/mine/index'
  ],
  subpackages: [
    {
      root: 'pages/packageB',
      pages: ['cust/index']
    },
    {
      root: 'pages/packageC',
      pages: ['cust/index']
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'assets/images/tabbar_home_on.png',
        iconPath: 'assets/images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/shop/index',
        selectedIconPath: 'assets/images/tabbar_cate_on.png',
        iconPath: 'assets/images/tabbar_cate.png',
        text: '门店'
      },
      {
        pagePath: 'pages/case/index',
        selectedIconPath: 'assets/images/tabbar_cart_on.png',
        iconPath: 'assets/images/tabbar_cart.png',
        text: '方案'
      },
      {
        pagePath: 'pages/cust/index',
        selectedIconPath: 'assets/images/tabbar_my_on.png',
        iconPath: 'assets/images/tabbar_my.png',
        text: '客户'
      },
      {
        pagePath: 'pages/mine/index',
        selectedIconPath: 'assets/images/tabbar_my_on.png',
        iconPath: 'assets/images/tabbar_my.png',
        text: '我的'
      }
    ]
  }
})
