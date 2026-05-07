<template>
  <div class="container">
    <h1>欢迎来到主应用 (App Main)</h1>
    <p>这是 Vue3 Monorepo 项目中的主應用</p>
    <div class="content">
      <h2>页面导航</h2>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/dashboard">仪表板</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
      {{message}}
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello Vue3 + TypeScript!')
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983;
  padding-bottom: 10px;
}

h2 {
  color: #34495e;
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  color: #42b983;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

a:hover {
  background-color: #f0f0f0;
  color: #2c3e50;
}

.content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}
</style>
