# My Blog

这是一个基于 VuePress 的个人博客项目。

## 项目介绍

本项目使用 VuePress 构建，用于发布技术文章和个人笔记。博客内容涵盖编程、技术分享等内容。

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建静态文件
```bash
npm run build
```

## 部署

使用 `deploy.sh` 脚本一键部署到 GitHub Pages：

```bash
./deploy.sh
```

## 项目结构
├── .vuepress/          # VuePress 配置目录
│   ├── config.js       # VuePress 配置文件
│   └── public/         # 静态资源目录
│       ├── assets      # 全局资源
│       ├── images      # 图片文件
│       └── pdfs/       # PDF 文件
├── assets/             # 项目资源文件
├── blogs/              # 博客文章目录
├── deploy.sh           # 部署脚本
├── .gitignore          # Git 忽略文件
├── README.md           # 项目说明文档
└── node_modules/       # 依赖包
