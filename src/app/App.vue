<template>
  <div class="app">
    <component :is="MainLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script setup>
import MainLayout from "@/app/layouts/MainLayout.vue";
</script>

<style scoped lang="scss"></style>
