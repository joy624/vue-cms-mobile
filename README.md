# 这是一个Vue的移动开发项目
## 使用了MUI 和 mint-ui
### 具体使用了哪些模块，请参考package.json 
## 【主流开源协议之间有何异同？】https://www.zhihu.com/question/19568896

### 制作首页App组件
1、制作头部  Header区域，使用Mint-UI中的Header组件
2、制作底部 Tabbar 区域，使用MUI的Tabber
   + 更改图标，在制作购物车小图标时，它是MUI的扩展css样式
   + 需要把 扩展的css 样式  拷贝到项目中
   + 需要把 依赖的扩展ttf文件，拷贝到项目中
   + 为购物车 小图标，添加的样式 ‘mui-icon mui-icon-extra mui-icon-extra-cart’
3、中间区域 放置一个 router-view 来展示路由匹配到的组件
### 改造 Tabbar
1、将Tabbar中的a连接 替换为 router-link
2、将href 替换为to 设置跳转的路由
3、设置链接激活时使用的 CSS 类名。router.js 中 添加 linkActiveClass: 'mui-active'
4、点击 Tabbar中的链接，展示对应的路由
### 制作首页轮播图布局-修改对应的样式
### 制作首页六宫格-修改图标样式-修改 url-loader的esModule=false
### 为Tabbar设置过渡动画及样式