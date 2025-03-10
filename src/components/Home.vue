<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { getCharacters, getEpisodes, getLocations } from '@/api/apicall';

const characters = ref([]);
const episodes = ref([]);
const locations = ref([]);
const nbrPages = ref(1);
const actualPage = ref(1);

const deadOrAlive = (status) => {
  if (status === "Alive") {
    return "status-alive";
  } else if (status === "Dead") {
    return "status-dead";
  } else {
    return "status-unknown";
  }
}

const fetchCharacters = async (actualPage) => {
  try {
    const data = await getCharacters(actualPage);
    characters.value = data.results;
    console.log(characters.value);
    nbrPages.value = data.info.pages;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadzdzd");
  }
  catch(error) {
    console.error("Error to fetch characters", error);
  }
};

const fetchEpisodes = async () => {
  try {
    episodes.value = await getEpisodes();
  }
  catch(error) {
    console.error("Error to fetch episodes", error);
  }
};

const fetchLocations = async () => {
  try {
    // Correction : assigner à locations et non à episodes
    locations.value = await getLocations();
  }
  catch(error) {
    console.error("Error to fetch Locations", error);
  }
};

onMounted(() => {
  fetchCharacters();
  fetchEpisodes();
  fetchLocations();
});
</script>

<template>
  <h1 class="portal-title">Rick and Morty Characters</h1>
  <p>Explore Rick and Morty's universe and learn more about it.</p>
  <h4>J'AI CHANGER QUELQUE CHOSE</h4>
  <div class="character-grid">
    <div v-for="char in characters" :key="char.id" class="character-card">
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
          <span class="character-status-badge" :class="deadOrAlive(char.status)">
            {{ char.status }}
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">Origin :</span>
          <span class="info-value">{{ char.origin.name }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Localisation :</span>
          <span class="info-value">{{ char.location.name }}</span>
        </div>
      </div>
    </div>
  </div>
  

<div class="pagination-container">
    <button v-for = "n in nbrPages" :key ="n" class ='page-btn' @click="actualPage=n;fetchCharacters(n)">{{ n }}</button>
</div>
<div class="pagination-container">
    <button class="nav-btn prev-btn" @click="actualPage--; fetchCharacters(actualPage)" :disabled="actualPage<=1">Pevious</button>
    <button class="nav-btn next-btn" @click="actualPage++; fetchCharacters(actualPage)" :disabled="actualPage>=nbrPages">Next</button>
</div>
</template>
