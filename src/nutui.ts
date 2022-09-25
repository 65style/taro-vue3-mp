import { Icon, Button, Tabbar, TabbarItem } from '@nutui/nutui-taro'
import { App } from 'vue'
const setNutUi = (app: App) => {
  app
    .use(Icon)
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
}
export default setNutUi
