<script setup>
import {defineProps, computed, ref, onMounted } from 'vue';
import { useRickMortyStore } from '@/store/store';
import SearchBar from './SearchBar.vue';
import SearchResults from './SearchResults.vue';
import { useRouter } from 'vue-router';

const Store = useRickMortyStore();
const searchQuery = ref("");
const router = useRouter();


onMounted(async() => {
    await Store.fetchEverything();
})

const changeRoute = (route) => { 
    router.push({ name: route });    
};


const filter = computed(() => {

  console.log("🔍 Search queryYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYy:", searchQuery.value);
  if (!searchQuery.value.trim()) return ["poutou"];
  const query = searchQuery.value.trim().toLowerCase();

  let results = [...Store.getEverything.characters.filter(character => character.name.toLowerCase().includes(query)),
      ...Store.getEverything.locations.filter(location => location.name.toLowerCase().includes(query)),
      ...Store.getEverything.episodes.filter(episode => episode.name.toLowerCase().includes(query))
  ];
  console.log("🔍 Query:", query);
  console.log("🧐 Filtered results:", results);
  return results;       
})

const updateSearchQuery = (query) => {
    searchQuery.value = query;
    console.log(searchQuery.value);
    console.log("🔍 Filtered results:", filter.value);
}
</script>

<template>

    <SearchBar  @update-search-query="updateSearchQuery"/>
    <div class="nav-buttons-container" :disabled>
    <button class="portal-nav-btn btn-characters" @click="changeRoute('Characters')">Characters</button>
    <button class="portal-nav-btn btn-locations" @click="changeRoute('Locations')">Locations</button>
    <button class="portal-nav-btn btn-episodes" @click="changeRoute('Episodes')">Episodes</button>
</div>
    <SearchResults :results="filter"/>
</template>
