# 项目架构说明

## 🏗️ 整体架构

```
┌─────────────────────────────────────────────┐
│         Monorepo Root                        │
│  (pnpm workspaces 管理)                     │
└─────────────────────────────────────────────┘
         │
         ├─ packages/app-main
         ├─ packages/app-admin
         └─ packages/shared
```

## 📦 模块间关系图

```
app-main           app-admin
   │                 │
   └────────┬────────┘
            │
         shared
      (工具、组件、类型)
```

### 依赖关系

- **app-main** 和 **app-admin** 都依赖 **shared**
- **shared** 是独立的库，不依赖其他模块
- 每个应用都有独立的 Vite 配置和开发服务器

## 🔄 工作流程

### 1. 项目初始化 (pnpm workspaces)

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
```

pnpm 会自动识别 `packages/` 下的所有子项目。

### 2. 依赖管理

**根 package.json** 管理公共依赖：
```json
{
  "devDependencies": {
    "vue": "^3.3.0",
    "typescript": "^5.3.3",
    "vite": "^5.0.0"
  }
}
```

**各子模块 package.json** 可引用本地包：
```json
{
  "dependencies": {
    "@monorepo/shared": "workspace:*"
  }
}
```

`workspace:*` 表示引用本地的同名包，而非 npm 仓库。

### 3. 模块导出 (shared)

**共享库 src/index.ts**：
```typescript
export * from './utils'
export { default as Button } from './Button.vue'
```

其他模块使用：
```typescript
import { formatDate, Button } from '@monorepo/shared'
```

### 4. Vite 配置

每个应用都有独立的 `vite.config.ts`：
- **app-main**: 端口 5173
- **app-admin**: 端口 5174

## 📚 TypeScript 配置策略

```
root tsconfig.json (共享配置)
├── packages/app-main/tsconfig.json
├── packages/app-main/tsconfig.node.json
├── packages/app-admin/tsconfig.json
├── packages/app-admin/tsconfig.node.json
└── packages/shared/tsconfig.json
```

每个模块的 `tsconfig.json` 继承或参考根配置。

## 🎯 添加新功能的步骤

### 添加新的工具函数到 shared

1. 在 `packages/shared/src/utils.ts` 中添加函数
2. 在 `packages/shared/src/index.ts` 中导出
3. pnpm 会自动识别本地包的更改

```typescript
// 在 shared/src/utils.ts 添加
export function myFunction() { ... }

// 在 shared/src/index.ts 导出
export { myFunction } from './utils'

// 在应用中使用
import { myFunction } from '@monorepo/shared'
```

### 添加新的 Vue 组件到 shared

1. 在 `packages/shared/src/` 创建 `.vue` 文件
2. 在 `packages/shared/src/index.ts` 中导出

```typescript
// shared/src/index.ts
export { default as Button } from './Button.vue'
export { default as MyComponent } from './MyComponent.vue'
```

### 创建新的应用模块

1. 复制一个现有的应用（如 `app-main`）到新名称
2. 修改 `package.json` 中的名称和端口
3. 在 `vite.config.ts` 中更新端口
4. 运行 `pnpm install` 更新锁文件

## 🔧 构建工作流

### 开发模式

```bash
pnpm dev
# 同时启动所有应用
# app-main: http://localhost:5173
# app-admin: http://localhost:5174
```

### 生产构建

```bash
pnpm build
# 分别构建所有模块
# 输出到各自的 dist/ 目录
```

## 📋 最佳实践

### 1. 代码组织
- 将可复用代码放在 `shared` 模块
- 保持各应用的业务逻辑独立
- 使用 TypeScript 进行类型检查

### 2. 依赖管理
- 使用 `workspace:*` 引用本地包
- 避免循环依赖
- 定期更新依赖版本

### 3. Git 提交
- 在 monorepo 中通常会使用标签来区分模块版本
- 考虑使用 `changesets` 或 `semantic-versioning` 工具

### 4. CI/CD
- 可为每个模块独立运行测试和构建
- 使用 `pnpm -r` 在所有包中运行命令

## 🚀 扩展建议

1. **添加 ESLint 和 Prettier**
   ```bash
   pnpm add -D -w eslint prettier
   ```

2. **添加 Vitest 用于单元测试**
   ```bash
   pnpm add -D -w vitest
   ```

3. **添加 Router 用于页面导航**
   ```bash
   pnpm add -C packages/app-main vue-router
   ```

4. **添加共享状态管理 (Pinia)**
   ```bash
   pnpm add -D -w pinia
   ```

## 📖 相关文档

- [Vue 3 官方文档](https://vuejs.org/guide/)
- [Vite 官方文档](https://vitejs.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [pnpm 官方文档](https://pnpm.io/)
