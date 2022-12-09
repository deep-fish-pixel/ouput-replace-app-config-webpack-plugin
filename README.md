## 构建包中conf.json版本号自动生成使用说明
在客户端中使用的h5项目，需要conf.json，其中配置的版本号控制取包更新操作。

如果手动修改conf.json版本号比较麻烦，也容易遗漏，导致一个发布后不更新内容的非常规的bug。

### 解决办法

使用 ouput-replace-app-config-webpack-plugin 对输出conf.json进行读取、匹配替换内容操作

替换内容：

版本号生成格式：yyyy.MM.ddhhmm

日期生成格式：yyyy-MM-dd~hh:mm:ss


### 安装

npm安装：

    npm install --save-dev ouput-replace-app-config-webpack-plugin

yarn安装：

	yarn add --dev ouput-replace-app-config-webpack-plugin


### 用法


```

new OuputReplaceAppConfigWebpackPlugin(),// 暂不支持定制配置
    
```

	
