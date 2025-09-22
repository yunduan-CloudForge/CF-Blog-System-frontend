# 博客系统前端

一个现代化的博客系统前端应用，基于 React + TypeScript + Vite 构建，提供完整的博客管理和阅读体验。

## 🚀 项目介绍

这是一个功能完整的博客系统前端应用，支持文章发布、评论互动、用户管理、权限控制等功能。采用现代化的技术栈和优雅的 UI 设计，为用户提供流畅的博客体验。

## 🔗 相关项目

- **后端项目**: [CF-Blog-System-backend](https://github.com/yunduan-CloudForge/CF-Blog-System-backend) - 博客系统后端 API 服务

## 🛠️ 技术栈

### 核心框架
- **React 18.3.1** - 用户界面构建
- **TypeScript 5.8.3** - 类型安全的 JavaScript
- **Vite 6.3.5** - 快速的构建工具

### 路由和状态管理
- **React Router DOM 7.3.0** - 客户端路由
- **Zustand 5.0.7** - 轻量级状态管理

### UI 和样式
- **Tailwind CSS 3.4.17** - 原子化 CSS 框架
- **Lucide React 0.511.0** - 现代图标库
- **Tailwind Typography** - 文章排版插件

### 功能库
- **React Markdown 10.1.0** - Markdown 渲染
- **Remark GFM 4.0.1** - GitHub 风格 Markdown
- **Recharts 3.1.2** - 数据可视化图表
- **React Hot Toast 2.5.2** & **Sonner 2.0.7** - 消息提示

### 开发工具
- **ESLint** - 代码质量检查
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - CSS 自动前缀

## ✨ 功能特性

### 用户功能
- 🔐 用户注册、登录、个人中心
- 📝 文章浏览、搜索、分类筛选
- 💬 评论系统（支持回复、点赞、举报）
- 🏷️ 标签和分类管理
- 👤 个人资料管理

### 作者功能
- ✍️ Markdown 文章编辑器
- 📊 文章数据统计
- 📋 我的文章管理
- 🎯 文章发布和状态管理

### 管理员功能
- 📈 系统仪表板和数据统计
- 👥 用户管理
- 📰 文章管理
- 🏷️ 分类和标签管理
- 🔑 权限管理
- 📋 操作日志
- ⚙️ 系统设置
- 🖥️ 系统状态监控

### 技术特性
- 📱 响应式设计，支持移动端
- 🎨 现代化 UI 设计
- ⚡ 代码分割和懒加载
- 🔄 实时数据更新
- 🛡️ 路由权限保护
- 📊 性能监控和错误追踪
- 🎯 SEO 友好

## 📦 安装和运行

### 环境要求
- Node.js >= 18.0.0
- npm 或 pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm（推荐）
pnpm install
```

### 环境配置

1. 复制环境变量配置文件：
```bash
cp .env.example .env
```

2. 根据实际情况修改 `.env` 文件中的配置：
```env
# API 基础地址
VITE_API_BASE_URL=http://localhost:3001

# 应用标题
VITE_APP_TITLE=博客系统

# 应用版本
VITE_APP_VERSION=1.0.0

# 开发模式
VITE_DEV_MODE=true

# 上传文件大小限制 (MB)
VITE_MAX_FILE_SIZE=10

# 分页默认大小
VITE_DEFAULT_PAGE_SIZE=10
```

### 开发运行

```bash
# 启动开发服务器
npm run dev
# 或
pnpm dev

# 访问 http://localhost:5173
```

### 构建部署

```bash
# 类型检查
npm run check

# 代码检查
npm run lint

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── AdminLayout.tsx     # 管理员布局
│   ├── CommentSection.tsx  # 评论组件
│   ├── ProtectedRoute.tsx  # 路由保护
│   └── charts/            # 图表组件
├── pages/              # 页面组件
│   ├── Home.tsx           # 首页
│   ├── ArticleList.tsx    # 文章列表
│   ├── ArticleDetail.tsx  # 文章详情
│   ├── ArticleEditor.tsx  # 文章编辑器
│   ├── Login.tsx          # 登录页
│   ├── Register.tsx       # 注册页
│   ├── UserCenter.tsx     # 用户中心
│   └── Admin*/           # 管理员页面
├── store/              # 状态管理
│   ├── authStore.ts       # 认证状态
│   ├── articleStore.ts    # 文章状态
│   ├── commentStore.ts    # 评论状态
│   └── adminStore.ts      # 管理员状态
├── hooks/              # 自定义 Hooks
├── services/           # API 服务
├── utils/              # 工具函数
├── types/              # 类型定义
├── contexts/           # React Context
└── config/             # 配置文件
```

## 🔧 开发指南

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置的代码规范
- 组件文件使用 PascalCase 命名
- 工具函数使用 camelCase 命名
- 常量使用 UPPER_SNAKE_CASE 命名

### 组件开发

```tsx
// 组件示例
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
};

export default Component;
```

### 状态管理

使用 Zustand 进行状态管理：

```typescript
import { create } from 'zustand';

interface StoreState {
  data: any[];
  loading: boolean;
  fetchData: () => Promise<void>;
}

export const useStore = create<StoreState>((set) => ({
  data: [],
  loading: false,
  fetchData: async () => {
    set({ loading: true });
    // API 调用
    set({ data: result, loading: false });
  },
}));
```

### API 调用

```typescript
import { authAPI } from '@/store/authStore';

// 认证请求
const response = await authAPI.authenticatedFetch('/api/endpoint', {
  method: 'POST',
  body: JSON.stringify(data)
});

// 普通请求
const response = await fetch(`${API_BASE_URL}/api/endpoint`);
```

## 🚀 部署说明

### Vercel 部署

项目已配置 `vercel.json`，支持一键部署到 Vercel：

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量
3. 自动部署

### 其他平台部署

1. 构建项目：
```bash
npm run build
```

2. 将 `dist` 目录部署到静态文件服务器

3. 配置服务器支持 SPA 路由（将所有路由重定向到 `index.html`）

### 环境变量配置

部署时需要配置以下环境变量：
- `VITE_API_BASE_URL` - 后端 API 地址
- `VITE_APP_TITLE` - 应用标题
- 其他配置项参考 `.env.example`

## 🤝 贡献指南

### 开发流程

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -am 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 提交 Pull Request

### 提交规范

使用语义化提交信息：

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式调整
- `refactor:` 代码重构
- `test:` 测试相关
- `chore:` 构建工具或辅助工具的变动

### 代码审查

- 确保代码通过 ESLint 检查
- 确保 TypeScript 类型检查通过
- 添加必要的注释和文档
- 测试新功能的正常工作

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

如有问题或建议，欢迎提交 Issue 或 Pull Request。