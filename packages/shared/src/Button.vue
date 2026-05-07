<template>
  <div class="button-group">
    <button
      :class="['btn', `btn-${variant}`, { 'btn-disabled': disabled }]"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

defineProps<Props>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.button-group {
  display: inline-block;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
}

.btn-primary {
  background-color: #667eea;
  color: white;
}

.btn-primary:hover:not(.btn-disabled) {
  background-color: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
}

.btn-secondary:hover:not(.btn-disabled) {
  background-color: #e0e0e0;
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
}

.btn-danger:hover:not(.btn-disabled) {
  background-color: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(231, 76, 60, 0.4);
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
