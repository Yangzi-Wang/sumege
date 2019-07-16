### 文件目录

``` JavaScript
+ common // 公用文件  
|+components // wxml 文件
|+js //js
+ pages // 存放业务页面
|+ main
| + main.wxml
| + main.js
| + main.wxss
|…………
+ app.js// 路由js 微信设置好可以加公用变量和方法
```

+ 页面命名

  小驼峰法 如 worksAxxBxx

+ WXML

  对于一些css复杂的标签，就不要使用内联样式

  注释规范

  `空一行`

  ``` javascript
  <view>...</view>
   
  //导航栏
   
  <view>...</view>
   
  <view>...</view>
  ```

+ css

  在开发过程中rpx和px均可能用到，如通常情况下间距使用rpx，字体大小和边框等使用px，开发者根据实际情况而定。

   注释规范

  `成组的wxss规则之间用块状注释。请勿在代码后面直接注释。`

  ```css
  
  /** 修改button默认的点击态样式类**/
   
  .button-hover {
   
      background-color: red;
   
  }
  ```

+ js规范

  变量名以及函数名统一采用驼峰命名法，正常情况下函数名前缀需加上清晰的动词表示函数功能，私有函数或者属性以下划线开头表明。

  1. 类的命名首字母需大写。

  2. 采用ES6 关键字let定义变量，尽量不使用var
  3. 私有函数以及回调函数统一放置在生命周期函数后。
  4. 每个函数之间用一个空行分离结构。
  5. 所有涉及到数据绑定的变量均需在data中初始化。禁止在不定义的情况下直接setData。
  6. 回调函数统一使用Promise函数的方式进行编写，回调成功的参数统一为res，错误参数为err。

+ JS语法规范（`尽量注意使用JavaScript Standard Style 这里节选一点`）

  - JS语句无需以分号结束，统一省略分号
  - JS中一致使用反引号 ``或单引号' ' , 不使用双引号。
  - WXML、CSS、JSON中均应使用双引号。
  - CSS属性中冒号中后面用一个空格分隔开。
  - 执行一致的缩进（4个空格）
  - 执行一致的换行样式（'unix'）

  [JS Standard Style](https://standardjs.com/)

