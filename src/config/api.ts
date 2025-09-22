// API配置文件

// 从环境变量获取API基础URL，如果没有则使用默认值
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// API端点配置
export const API_ENDPOINTS = {
  // 认证相关
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    ME: '/api/auth/me',
    REFRESH: '/api/auth/refresh',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
  },
  
  // 博客文章相关
  POSTS: {
    LIST: '/api/posts',
    CREATE: '/api/posts',
    DETAIL: (id: string | number) => `/api/posts/${id}`,
    UPDATE: (id: string | number) => `/api/posts/${id}`,
    DELETE: (id: string | number) => `/api/posts/${id}`,
    PUBLISH: (id: string | number) => `/api/posts/${id}/publish`,
    UNPUBLISH: (id: string | number) => `/api/posts/${id}/unpublish`,
  },
  
  // 评论相关
  COMMENTS: {
    LIST: '/api/comments',
    CREATE: '/api/comments',
    DETAIL: (id: string | number) => `/api/comments/${id}`,
    UPDATE: (id: string | number) => `/api/comments/${id}`,
    DELETE: (id: string | number) => `/api/comments/${id}`,
    REPLY: (id: string | number) => `/api/comments/${id}/reply`,
    LIKE: (id: string | number) => `/api/comments/${id}/like`,
    REPORT: (id: string | number) => `/api/comments/${id}/report`,
  },
  
  // 用户相关
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE_PROFILE: '/api/users/profile',
    CHANGE_PASSWORD: '/api/users/change-password',
    AVATAR: '/api/users/avatar',
  },
  
  // 管理员相关
  ADMIN: {
    DASHBOARD: '/api/admin/dashboard',
    USERS: '/api/admin/users',
    POSTS: '/api/admin/posts',
    COMMENTS: '/api/admin/comments',
    SETTINGS: '/api/admin/settings',
    LOGS: '/api/admin/logs',
    BACKUP: '/api/admin/backup',
    RESTORE: '/api/admin/restore',
  },
  
  // 文件上传相关
  UPLOAD: {
    IMAGE: '/api/upload/image',
    FILE: '/api/upload/file',
  },
  
  // 搜索相关
  SEARCH: {
    POSTS: '/api/search/posts',
    USERS: '/api/search/users',
  },
  
  // 监控相关
  MONITORING: {
    ERROR: '/api/monitoring/error',
    PERFORMANCE: '/api/monitoring/performance',
  },
};

// 构建完整的API URL
export const buildApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

// API请求配置
export const API_CONFIG = {
  timeout: 10000, // 10秒超时
  retries: 3, // 重试3次
  retryDelay: 1000, // 重试延迟1秒
};

// 请求头配置
export const getDefaultHeaders = (): Record<string, string> => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
};

// 获取认证头
export const getAuthHeaders = (): Record<string, string> => {
  // 从zustand persist存储中获取token
  const authStorage = localStorage.getItem('auth-storage');
  let token = null;
  
  if (authStorage) {
    try {
      const parsedStorage = JSON.parse(authStorage);
      token = parsedStorage.state?.token;
    } catch (error) {
      console.error('解析认证存储失败:', error);
    }
  }
  
  return {
    ...getDefaultHeaders(),
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// 环境配置
export const ENV_CONFIG = {
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  apiBaseUrl: API_BASE_URL,
  appTitle: import.meta.env.VITE_APP_TITLE || '博客系统',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  maxFileSize: parseInt(import.meta.env.VITE_MAX_FILE_SIZE || '10') * 1024 * 1024, // MB转字节
  defaultPageSize: parseInt(import.meta.env.VITE_DEFAULT_PAGE_SIZE || '10'),
  debugMode: import.meta.env.VITE_DEBUG === 'true',
};