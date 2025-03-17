<script setup>
import {ref, watch, defineProps } from 'vue';
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

</script>

<template>
    <div class="search-results">
        <div v-for="result in displayedResults" 
             :key="getUniqueKey(result)" 
             class="search-result">
            <div class="result-header">
                <h3 class="result-name">{{ result.name }}</h3>
            </div>
        </div>
    </div>
</template>
