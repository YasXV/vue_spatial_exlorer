<script setup>
import {defineProps, onMounted, ref, watch, computed } from 'vue';
import { useRickMortyStore } from '@/store/store';
import OneCharacter from './OneCharacter.vue';
import SearchBar from '../SearchBar.vue';

const Store = useRickMortyStore();
const searchQuery = ref("");
onMounted(async() => {
  await Store.fetchCharacters(1);
  await Store.fetchNumberPages("character");
  await Store.fetchAllCharacters();
});

const updateSearchQuery = (query) => {
    searchQuery.value = query;
    console.log(searchQuery.value);
    //console.log("🔍 Filtered results:", filter.value);
}

watch(searchQuery, (newVal) => {
  console.log(filteredCharacters.value);
});

const filteredCharacters = computed(() => {
    if (!searchQuery.value.trim()) return Store.getCharacters;
    const query = searchQuery.value.toLowerCase();
    
    return Store.getCharacters.filter(characters =>
        characters.name.toLowerCase().includes(query)
    );
});

const actualPage = ref(1);
</script>

<template>
  <h1 class="portal-title">Rick and Morty Characters</h1>
  <p>Explore Rick and Morty's characters and learn more about them.</p>
  <SearchBar @update-search-query="updateSearchQuery"/>

  <div class="character-grid">
    <OneCharacter v-for="char in Store.onePageCharacters" :key="char.id" :ACharacter="char"/>
  </div>
  

<div class="pagination-container">
    <button v-for = "n in Store.getTotalPagesCharacter" :key ="n" class ='page-btn' @click="actualPage=n;Store.fetchCharacters(n)">{{ n }}</button>
</div>
<div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; Store.fetchCharacters(actualPage)" :disabled="actualPage<=1">Pevious</button>
    <button class="nav-btn next-btn" @click="actualPage++; Store.fetchCharacters(actualPage)" :disabled="actualPage>=Store.getTotalPagesCharacter">Next</button>
</div>
</template>
