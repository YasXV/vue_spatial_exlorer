<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRickMortyStore } from '@/store/store';

const Store = useRickMortyStore();
const router = useRouter();

onMounted(async() => {
  await Store.fetchLocations(1);
  await Store.fetchNumberPages("location");
});

const actualPage = ref(1);

</script>

<template>
  <h1 class="portal-title">Rick and Morty Locations</h1>
  <p>Discover the various locations throughout the Rick and Morty multiverse.</p>
  
  <div class="location-grid">
    <div v-for="location in Store.onePageLocations" :key="location.id" class="location-card">
      <div class="location-header">
        <h3 class="location-name">{{ location.name }}</h3>
      </div>
      <div class="location-info">
        <span class="location-type">{{ location.type }}</span>
        <div class="info-row">
          <span class="info-label">Dimension:</span>
          <span class="info-value location-dimension">{{ location.dimension }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Residents:</span>
          <span class="info-value">{{ location.residents?.length || 0 }} residents</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="pagination-container">
    <button v-for="n in Store.getTotalPagesLocation" :key="n" class="page-btn" @click="actualPage=n;Store.fetchLocations(n)">{{ n }}</button>
  </div>
  <div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; Store.fetchLocations(actualPage)" :disabled="actualPage<=1">Previous</button>
    <button class="nav-btn next-btn" @click="actualPage++; Store.fetchLocations(actualPage)" :disabled="actualPage>=Store.getTotalPagesLocation">Next</button>
  </div>
</template>