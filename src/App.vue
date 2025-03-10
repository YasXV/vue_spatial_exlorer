<template>
  <div class="portal-app">
    <!-- Navigation -->
    <nav class="nav-portal">
      <div class="nav-logo">
        <div class="portal-icon">
          <div class="portal-swirl"></div>
        </div>
        <span>Rick and Morty Explorer</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/games" class="nav-link">Games</router-link>
        <router-link to="/learn" class="nav-link">Learn</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="main-content">
      <div class="rick-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>