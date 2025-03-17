<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRickMortyStore } from '@/store/store';
import SearchBar from './SearchBar.vue';

const Store = useRickMortyStore();
const router = useRouter();
const searchQuery = ref("");

onMounted(async() => {
  await Store.fetchEpisodes(1);
  await Store.fetchNumberPages("episode");
  await Store.fetchAllEpisodes();
  console.log(Store.onePageEpisodes[0]);
});

const updateSearchQuery = (query) => {
    searchQuery.value = query;
    console.log(searchQuery.value);
    //console.log("🔍 Filtered results:", filter.value);
}

const actualPage = ref(1);
</script>

<template>
  <h1 class="portal-title">Rick and Morty Episodes</h1>
  <p>Explore all the episodes from the Rick and Morty universe.</p>
  <SearchBar @update-search-query="updateSearchQuery"/>
  
  <div class="episode-grid">
    <div v-for="episode in Store.onePageEpisodes" :key="episode.id" class="episode-card">
      <div class="episode-header">
        <h3 class="episode-name">{{ episode.name }}</h3>
      </div>
      <div class="episode-info">
        <span class="episode-code">{{ episode.episode }}</span>
        <div class="info-row">
          <span class="info-label">Air Date:</span>
          <span class="info-value">{{ episode.air_date }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Characters:</span>
          <span class="info-value">{{ episode.characters?.length || 0 }} characters</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="pagination-container">
    <button v-for="n in Store.getTotalPagesEpisode" :key="n" class="page-btn" @click="actualPage=n;Store.fetchEpisodes(n)">{{ n }}</button>
  </div>
  <div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; Store.fetchEpisodes(actualPage)" :disabled="actualPage<=1">Previous</button>
    <button class="nav-btn next-btn" @click="actualPage++; Store.fetchEpisodes(actualPage)" :disabled="actualPage>=Store.getTotalPagesEpisode">Next</button>
  </div>
</template>