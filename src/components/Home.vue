<script setup>
import {defineProps, onMounted, ref } from 'vue';
import { useRickMortyStore } from '@/store/store';

const Store = useRickMortyStore();
onMounted(() => {
  Store.fetchCharacters(1);
  Store.fetchEpisodes(1);
  Store.fetchLocations(1);
  Store.fetchNumberPages("character");
  Store.fetchNumberPages("episode");
  Store.fetchNumberPages("location");
});
const actualPage = ref(1);

console.log("TESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSST");
console.log(Store.getOnePageCharacters);
</script>

<template>
  <h1 class="portal-title">Rick and Morty Characters</h1>
  <p>Explore Rick and Morty's universe and learn more about it.</p>
  <h4>J'AI CHANGER QUELQUE CHOSE</h4>
  <div class="character-grid">
    <div v-for="char in Store.getOnePageCharacters" :key="char.id" class="character-card">
      <div class="card-header">
        <h3 class="character-name">{{ char.name }}</h3>
      </div>
      <div class="image-container">
        <img class="character-image" :src="char.image" :alt="char.name" />
      </div>
      <div class="character-info">
        <div class="info-row">
          <span class="info-label">Species :</span>
          <span class="info-value">{{ char.species }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Gender :</span>
          <span class="info-value">{{ char.gender }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Status :</span>
          <span class="character-status-badge" :class="Store.deadOrAlive(char.status)">
            {{ char.status }}
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">Origin :</span>
          <span class="info-value">{{ char.origin?.name || 'Unknown' }}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Localisation :</span>
            <span class="info-value">{{ char.location?.name || 'Unknown' }}</span>
        </div>
      </div>
    </div>

    <span class="info-label">Origin :</span>



  </div>
  

<div class="pagination-container">
    <button v-for = "n in Store.getTotalPagesCharacter" :key ="n" class ='page-btn' @click="actualPage=n;Store.fetchCharacters(n)">{{ n }}</button>
</div>
<div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; Store.fetchCharacters(actualPage)" :disabled="actualPage<=1">Pevious</button>
    <button class="nav-btn next-btn" @click="actualPage++; Store.fetchCharacters(actualPage)" :disabled="actualPage>=Store.getTotalPagesCharacter">Next</button>
</div>
</template>
