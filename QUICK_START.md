# 快速开始指南

## 📋 项目概览

这是一个 **Vue 3 Monorepo** 项目，包含 3 个子模块：

### 1️⃣ **app-main** - 主应用
- 简单的欢迎页面
- 展示 Monorepo 项目的基本结构
- 端口: **5173**

### 2️⃣ **app-admin** - 管理后台  
- 包含仪表板展示统计数据
- 多个管理功能模块
- 美观的渐变色UI设计
- 端口: **5174**

### 3️⃣ **shared** - 共享库
- 公共工具函数集合
- 可复用的 Vue 组件
- 接口定义和服务类

## 🚀 快速启动步骤

### 步骤 1: 安装 pnpm
```bash
npm install -g pnpm
```

### 步骤 2: 进入项目目录
```bash
cd /workspaces/monorepo-test-jenkins
```

### 步骤 3: 安装所有依赖
```bash
pnpm install
```

### 步骤 4: 启动所有应用
```bash
pnpm dev
```

启动后，你可以访问：
- 📱 **主应用**: http://localhost:5173
- 👔 **管理后台**: http://localhost:5174

## 📂 文件说明

| 文件/文件夹 | 说明 |
|-----------|------|
| `package.json` | 根项目配置和脚本命令 |
| `pnpm-workspace.yaml` | pnpm 工作区配置 |
| `packages/app-main/` | 主应用模块 |
| `packages/app-admin/` | 管理后台模块 |
| `packages/shared/` | 共享库模块 |
| `.vscode/` | VS Code 配置 |
| `.editorconfig` | 编辑器共享配置 |

## 🔨 常用命令

```bash
# 开发模式 - 启动所有应用
pnpm dev

# 生产构建
pnpm build

# 类型检查
pnpm type-check

# 启动单个应用
pnpm -C packages/app-main dev
pnpm -C packages/app-admin dev

# 为共享库build
pnpm -C packages/shared build
```

## 💡 项目特点

✅ **Vue 3** - 最新的 Vue 框架版本  
✅ **TypeScript** - 完整的类型支持  
✅ **Vite** - 极快的构建工具  
✅ **pnpm Workspaces** - 高效的依赖管理  
✅ **模块化设计** - 清晰的项目结构  
✅ **共享代码** - 复用工具函数和组件  

## 📝 下一步

1. 浏览 README.md 了解更详细的文档
2. 查看各个应用的源代码学习结构
3. 尝试添加新的 Vue 组件或页面
4. 向 shared 库添加新的工具函数

祝你开发愉快！🎉
