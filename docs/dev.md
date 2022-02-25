# 开发 noty.js
为保持开发的简洁性  
在写文档和 demo 时，noty.js 尽量避免了打包工具的使用  
因此，只需要 clone 仓库：
``` bash
git clone git@github.com:ppz-pro/noty.js.git
```
不需要 ```npm run dev``` 之类的操作  

> 在真实项目中，在目前的生态下，还是推荐使用打包工具的

noty.js 使用了 esm 模块化方案  
因此为了支持 import 关键字，文档和 demo 中使用了 ```<script type="module">``` 来引入 noty.js  
因此，如果你想在 demo 的基础上试试 noty.js 的各种配置，开发时就需要一个静态文件服务器  
如 nginx 或 apache  
但或者你嫌安装比较麻烦的话，可以试试 ```http-server```：
``` bash
npm install -g http-server # mac、linux 下可能需要 sudo
```
然后在仓库根目录执行：
``` bash
http-server # 在当前目录启动一个静态文件服务器
```
访问 http://127.0.0.1:8080/docs/custom/index.html 即可看到最简 demo  

最简 demo 没有动画和图标，只用来展示 noty.js 的原理  
试用默认配置的动画和图标请参考 [API & 自定义](https://github.com/ppz-pro/noty.js/blob/main/docs/custom.md) 部分  

欢迎提出问题和宝贵意见，以码会友~
