<script setup>
import Header from './components/Header.vue'
import Home from './components/HomeComponent.vue'
import About from './components/About.vue'
</script>

<template>
  <div class="wrapper">
    <Header />

    <Home />
    <About />
    
    <!-- <Projects /> -->
    <!-- <Contact /> -->
  </div>
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
</style>
