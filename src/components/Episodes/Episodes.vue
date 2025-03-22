<script setup>
import { onMounted, ref, defineProps, watch, computed} from 'vue';
import { useRickMortyStore } from '@/store/store';
import SearchBar from '../SearchBar.vue';
import OneEpisode from './OneEpisode.vue';

const Store = useRickMortyStore();
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

const filteredEpisodes = computed(() => {
    if (!searchQuery.value.trim()) return Store.getEpisodes;
    const query = searchQuery.value.toLowerCase();
    
    return Store.getEpisodes.filter(episode =>
        episode.name.toLowerCase().includes(query)
    );
});

watch(searchQuery, (newVal) => {
  console.log(filteredEpisodes.value);
});



const actualPage = ref(1);
</script>

<template>
  <h1 class="portal-title">Rick and Morty Episodes</h1>
  <p>Explore all the episodes from the Rick and Morty universe.</p>
  <SearchBar @update-search-query="updateSearchQuery"/>

  <div class="episode-grid">
    <OneEpisode v-for="episode in Store.onePageEpisodes" :key="episode.id" :AEpisode="episode"/>
  </div>
  
  <div class="pagination-container">
    <button v-for="n in Store.getTotalPagesEpisode" :key="n" class="page-btn" @click="actualPage=n;Store.fetchEpisodes(n)">{{ n }}</button>
  </div>
  <div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; Store.fetchEpisodes(actualPage)" :disabled="actualPage<=1">Previous</button>
    <button class="nav-btn next-btn" @click="actualPage++; Store.fetchEpisodes(actualPage)" :disabled="actualPage>=Store.getTotalPagesEpisode">Next</button>
  </div>
</template>