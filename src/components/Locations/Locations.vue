<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, defineProps, watch, computed } from 'vue';
import { useRickMortyStore } from '@/store/store';
import OneLocation from './OneLocation.vue';
import SearchBar from '../SearchBar.vue';

const Store = useRickMortyStore();
const router = useRouter();

onMounted(async() => {
  await Store.fetchLocations(1);
  await Store.fetchNumberPages("location");
  await Store.fetchAllLocations();
});


const actualPage = ref(1);
const searchQuery = ref("");

const updateSearchQuery = (query) => {
    searchQuery.value = query;
    console.log(searchQuery.value);
    //console.log("🔍 Filtered results:", filter.value);
}

watch(searchQuery, (newVal) => {
  console.log(filteredLocations.value);
});

const filteredLocations = computed(() => {
    if (!searchQuery.value.trim()) return Store.getLocations;
    const query = searchQuery.value.toLowerCase();
    
    return Store.getLocations.filter(location =>
        location.name.toLowerCase().includes(query)
    );
});

const props = defineProps({
    ALocation: Object
});

</script>

<template>
  <h1 class="portal-title">Rick and Morty Locations</h1>
  <p>Discover the various locations throughout the Rick and Morty multiverse.</p>
  <SearchBar @update-search-query="updateSearchQuery"/>
  
  <div class="location-grid">
    <OneLocation v-for="loc in Store.onePageLocations" :key="loc.id" :ALocation="loc"/>
  </div>
  
  <div class="pagination-container">
    <button v-for="n in Store.getTotalPagesLocation" :key="n" class="page-btn" @click="actualPage=n;Store.fetchLocations(n)">{{ n }}</button>
  </div>
  <div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; Store.fetchLocations(actualPage)" :disabled="actualPage<=1">Previous</button>
    <button class="nav-btn next-btn" @click="actualPage++; Store.fetchLocations(actualPage)" :disabled="actualPage>=Store.getTotalPagesLocation">Next</button>
  </div>
</template>