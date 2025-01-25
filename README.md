# 相册管理应用

这是一个基于 React 的相册管理应用，允许用户浏览和选择不同的相册，并查看相册中的图片。该应用使用了现代的前端技术栈，提供了良好的用户体验和可访问性。

## 项目结构

```
client/
├── src/
│   ├── components/       # 可复用组件
│   ├── pages/            # 页面组件
│   ├── hooks/            # 自定义 Hooks
│   ├── services/         # API 服务
│   ├── utils/            # 工具函数
│   ├── styles/           # 全局样式
│   └── constants/        # 常量定义
├── public/               # 静态文件
└── README.md             # 项目说明文档
```

## 功能

- **相册标签**：用户可以选择不同的相册标签，动态加载相应的图片。
- **图片展示**：展示所选相册中的所有图片，并提供简单的界面。
- **默认相册**：当未选择任何相册时，默认展示"春节"相册中的图片。

## 技术栈

- **前端**：React, JavaScript, CSS
- **样式**：使用自定义 CSS 进行样式设计
- **图像管理**：使用 `require.context` 动态导入图像

## 安装与运行

1. 克隆项目：
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm start
   ```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 使用说明

- 在应用加载后，用户可以看到相册标签列表。
- 点击任意标签，右侧将展示该标签下的所有图片。
- 如果未选择任何标签，默认展示"春节"相册中的图片。

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

本项目使用 MIT 许可证，详细信息请查看 [LICENSE](LICENSE) 文件。
