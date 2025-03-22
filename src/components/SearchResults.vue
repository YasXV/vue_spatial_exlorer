<script setup>
import { ref, watch, defineProps } from 'vue';
import { useRickMortyStore } from '@/store/store';

const Store = useRickMortyStore();
const props = defineProps({
    results: Object
});

const displayedResults = ref([]);

watch(() => props.results, (newResults) => {
    displayedResults.value = [...newResults];
}, { immediate: true });

const getUniqueKey = (result) => {
    if (result.hasOwnProperty("species")) return `char-${result.id}`; 
    if (result.hasOwnProperty("dimension")) return `loc-${result.id}`;
    if (result.hasOwnProperty("air_date")) return `ep-${result.id}`; 
    return `unknown-${result.id}`; 
};

const getResultType = (result) => {
    if (result.hasOwnProperty("species")) return "character"; 
    if (result.hasOwnProperty("dimension")) return "location";
    if (result.hasOwnProperty("air_date")) return "episode"; 
    return "unknown"; 
};

const getStatusClass = (status) => {
    if (status === 'Alive') return 'status-alive';
    if (status === 'Dead') return 'status-dead';
    return 'status-unknown';

};
</script>

<template>
    <div class="search-results">
        <h2 class="results-title">Search Results</h2>
        
        <div v-if="displayedResults.length === 0" class="no-results">
            No results found. Try a different search term.
        </div>
        
        <div v-else class="search-results-grid">
            <!-- Character Cards -->
            <div v-for="result in displayedResults.filter(r => getResultType(r) === 'character')" 
                 :key="getUniqueKey(result)" 
                 class="character-card fade-in">
                <div class="card-header">
                    <h3 class="character-name">{{ result.name }}</h3>
                </div>
                <div class="image-container">
                    <img :src="result.image" :alt="result.name" class="character-image">
                </div>
                <div class="character-info">
                    <div class="info-row">
                        <span class="info-label">Status:</span>
                        <span class="character-status-badge" :class="getStatusClass(result.status)">
                            {{ result.status }}
                        </span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Species:</span>
                        <span class="info-value">{{ result.species }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Gender:</span>
                        <span class="info-value">{{ result.gender }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Origin:</span>
                        <span class="info-value">{{ result.origin?.name }}</span>
                    </div>
                </div>
            </div>
            
            <!-- Location Cards -->
            <div v-for="result in displayedResults.filter(r => getResultType(r) === 'location')" 
                 :key="getUniqueKey(result)" 
                 class="location-card fade-in">
                <div class="location-header">
                    <h3 class="location-name">{{ result.name }}</h3>
                </div>
                <div class="location-image-container">
                    <div class="portal-icon">
                        <div class="portal-swirl"></div>
                    </div>
                </div>
                <div class="location-info">
                    <span class="location-type">{{ result.type }}</span>
                    <div class="info-row">
                        <span class="info-label">Dimension:</span>
                        <span class="location-dimension">{{ result.dimension }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Residents:</span>
                        <span class="info-value">{{ result.residents?.length || 0 }} residents</span>
                    </div>
                </div>
            </div>
            
            <!-- Episode Cards -->
            <div v-for="result in displayedResults.filter(r => getResultType(r) === 'episode')" 
                 :key="getUniqueKey(result)" 
                 class="episode-card fade-in">
                <div class="episode-header">
                    <h3 class="episode-name">{{ result.name }}</h3>
                </div>
                <div class="episode-image-container">
                    <span class="episode-code">{{ result.episode }}</span>
                </div>
                <div class="episode-info">
                    <div class="info-row">
                        <span class="info-label">Air date:</span>
                        <span class="info-value">{{ result.air_date }}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Characters:</span>
                        <span class="info-value">{{ result.characters?.length || 0 }} characters</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>