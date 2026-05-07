# Vue3 Monorepo 项目

这是一个基于 **Vue 3** + **TypeScript** + **Vite** 的现代化 Monorepo 项目，使用 pnpm workspaces 管理多个子模块。

## 📂 项目结构

```
monorepo-test-jenkins/
├── packages/
│   ├── app-main/          # 主应用
│   │   ├── src/
│   │   │   ├── main.ts    # 应用入口
│   │   │   └── App.vue    # 根组件
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── package.json
│   ├── app-admin/         # 管理后台
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   └── App.vue    # 管理后台首页
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── package.json
│   └── shared/            # 共享库
│       ├── src/
│       │   ├── index.ts   # 导出入口
│       │   ├── utils.ts   # 工具函数和类
│       │   └── Button.vue # 可复用按钮组件
│       ├── tsconfig.json
│       └── package.json
├── package.json           # 根项目配置
├── pnpm-workspace.yaml    # pnpm workspaces 配置
└── .gitignore
```

## 🚀 快速开始

### 前置要求

- Node.js >= 16
- pnpm >= 7

### 安装依赖

```bash
pnpm install
```

### 开发模式

在根目录运行，同时启动所有应用：

```bash
pnpm dev
```

或者分别启动单个应用：

```bash
# 启动主应用 (端口 5173)
pnpm -C packages/app-main dev

# 启动管理后台 (端口 5174)
pnpm -C packages/app-admin dev

# 构建共享库
pnpm -C packages/shared build
```

### 构建生产版本

```bash
pnpm build
```

### 类型检查

```bash
pnpm type-check
```

## 📦 模块说明

### app-main（主应用）
- **端口**: 5173
- **功能**: 主应用展示
- **页面**: 首页、仪表板、关于等

### app-admin（管理后台）
- **端口**: 5174
- **功能**: 后台管理系统
- **页面**: 用户管理、项目管理、系统设置、日志管理

### shared（共享库）
- **导出内容**:
  - 工具函数: `formatDate()`, `formatNumber()`, `truncate()`
  - 类型定义: `User`, `Project`
  - 服务类: `ApiService`
  - 可复用组件: `Button.vue`

## 🔧 配置说明

### pnpm workspaces

在 `pnpm-workspace.yaml` 中定义了工作区路径：

```yaml
packages:
  - 'packages/*'
```

这使得所有 `packages/` 目录下的子模块都成为工作区的一部分。

### 依赖管理

- 共同依赖在根 `package.json` 中定义
- 各子模块可以有自己的依赖
- 使用 `workspace:*` 协议引用本地包

## 📝 关键命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装所有依赖 |
| `pnpm dev` | 启动所有应用 |
| `pnpm build` | 构建所有应用 |
| `pnpm type-check` | 类型检查 |
| `pnpm -C packages/app-main dev` | 启动主应用 |
| `pnpm -C packages/app-admin dev` | 启动管理后台 |

## 🎯 开发指南

### 向 shared 库添加新的工具函数

1. 在 `packages/shared/src/utils.ts` 中添加函数
2. 在 `packages/shared/src/index.ts` 中导出
3. 在其他应用中使用：`import { yourFunction } from '@monorepo/shared'`

### 创建新的 Vue 应用

1. 复制 `app-main` 或 `app-admin` 的结构
2. 修改 `package.json` 中的名称和端口
3. 在 `vite.config.ts` 中修改对应的端口号
4. 运行 `pnpm install` 安装依赖

## 📄 许可证

MIT