/**
 * 共享的工具函数库
 */

export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('zh-TW').format(num)
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + '...' : text
}

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface Project {
  id: number
  name: string
  description: string
  status: 'active' | 'completed' | 'archived'
  createdAt: Date
}

export class ApiService {
  private baseUrl = 'https://api.example.com'

  async fetchUsers(): Promise<User[]> {
    // Mock data - 实际应使用真实API调用
    return [
      { id: 1, name: '张三', email: 'zhangsan@example.com', role: 'admin' },
      { id: 2, name: '李四', email: 'lisi@example.com', role: 'user' }
    ]
  }

  async fetchProjects(): Promise<Project[]> {
    // Mock data
    return [
      {
        id: 1,
        name: '项目A',
        description: '这是第一个项目',
        status: 'active',
        createdAt: new Date()
      },
      {
        id: 2,
        name: '项目B',
        description: '这是第二个项目',
        status: 'completed',
        createdAt: new Date()
      }
    ]
  }
}
