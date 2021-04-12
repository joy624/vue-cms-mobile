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

### 制作首页的【新闻资讯】
1、修改六宫格页面中 a 为router-link，将href改为to，设置路由地址
2、绘制页面，使用 MUI 的 media-list
3、在router.js中添加对应的路由
4、利用vue-resource获取数据
5、渲染真实数据
### 点击跳转到【新闻详情】
1、把列表中中的每一项改为 router-link ，同时，在跳转的时候应该提供唯一的ID标识符
2、床架新闻详情的组件页面 NewsInfo.vue
3、在路由模块中， 将  新闻详情的路由地址 和组件页面对应起来

### 实现 新闻详情的页面布局 和数据渲染

## 单独封装一个 comment.vue 评论子组件
1、先创建  一个单独的comment.vue组件模板
2、在需要使用commment 组件的页面中， 先手动 导入comment组件
+ import comment from './comment.vue'
3、在父组件中，使用compoents 属性， 将 comment组件 注册为自己的子组件
4、将注册子组件时注册名称，以标签形式，在页面中使用

## 获取所有评论的数据显示到页面中
## 实现点击加载更多评论的功能
+ 为 加载更多按钮 绑定点击实现，在事件中  请求下一页数据
+ 实现点击加载更多， 让pageIndex++ ，然后重新调用 this.getComments() 方法重新获取最新的一页内容
+ 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多数据的时候，每当获取到新数据，应该让 老数据调用数组的concat方法，拼接上新数组

## 发表评论
1、把文本框 做 双向数据绑定
2、为发表评论按钮绑定一个时间
3、检验评论内容是否为空，如果为空，则Toast提示用户，评论内容不能为空
4、通过vue-resource发送一个请求，把评论内容提交给服务器
5、当发表评论后，重新刷新列表，以查看最新的评论

## 图片分享
1、改造HomeContainer中的 按钮 为路由的连接并显示对应的组件页面
2、绘制PhotoList组件
+ 制作 顶部的滑动条
++ 需要借助 MUI 中的 tab-top-vebview-main.html
++ 需要把 slider 区域的 mui-fullscreen 类 去掉
++ 滑动条无法正常滑动，检查手册，发现需要初始化
+ 制作 底部的图片列表