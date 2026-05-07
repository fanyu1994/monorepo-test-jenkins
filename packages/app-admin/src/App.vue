<template>
  <div class="admin-container">
    <header class="admin-header">
      <h1>管理后台 (App Admin)</h1>
      <p class="subtitle">Vue3 Monorepo - 后台管理系统</p>
    </header>
    <main class="admin-main">
      <div class="dashboard">
        <h2>仪表板</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <h3>用户数</h3>
            <p class="stat-number">{{ stats.users }}</p>
          </div>
          <div class="stat-card">
            <h3>项目数</h3>
            <p class="stat-number">{{ stats.projects }}</p>
          </div>
          <div class="stat-card">
            <h3>任务数</h3>
            <p class="stat-number">{{ stats.tasks }}</p>
          </div>
          <div class="stat-card">
            <h3>完成率</h3>
            <p class="stat-number">{{ stats.completion }}%</p>
          </div>
        </div>
      </div>

      <div class="admin-sections">
        <h2>管理功能</h2>
        <ul class="feature-list">
          <li><button @click="selectSection('users')">👥 用户管理</button></li>
          <li><button @click="selectSection('projects')">📁 项目管理</button></li>
          <li><button @click="selectSection('settings')">⚙️ 系统设置</button></li>
          <li><button @click="selectSection('logs')">📊 日志管理</button></li>
        </ul>
      </div>

      <div v-if="selectedSection" class="section-content">
        <h3>{{ selectedSection }}</h3>
        <p>这是 {{ selectedSection }} 的管理界面</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const selectedSection = ref('')
const stats = reactive({
  users: 1230,
  projects: 45,
  tasks: 302,
  completion: 78
})

const selectSection = (section: string) => {
  selectedSection.value = section.charAt(0).toUpperCase() + section.slice(1)
}
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #333;
}

.admin-header {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 30px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.admin-header h1 {
  margin: 0;
  color: #667eea;
  font-size: 2.5em;
}

.subtitle {
  margin: 10px 0 0 0;
  color: #666;
  font-size: 1.1em;
}

.admin-main {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
}

.dashboard {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard h2 {
  margin-top: 0;
  color: #333;
  border-bottom: 3px solid #667eea;
  padding-bottom: 15px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  margin: 0 0 10px 0;
  font-size: 0.9em;
  opacity: 0.9;
}

.stat-number {
  margin: 0;
  font-size: 2.5em;
  font-weight: bold;
}

.admin-sections {
  background: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.admin-sections h2 {
  margin-top: 0;
  color: #333;
}

.feature-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.feature-list li {
  margin: 0;
}

.feature-list button {
  width: 100%;
  padding: 15px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-list button:hover {
  background: #667eea;
  color: white;
  transform: scale(1.05);
}

.section-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-content h3 {
  color: #667eea;
  margin-top: 0;
}
</style>
