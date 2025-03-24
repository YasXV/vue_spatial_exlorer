<script setup>
import { ref, watch, defineEmits } from 'vue';
import { useRickMortyStore } from '@/store/store';
import {useRouter} from 'vue-router';

const Store = useRickMortyStore();
const router = useRouter();
const searchQuery = ref("");

const changeRoute = (route) =>{
    router.push({name: route});
}

const emit = defineEmits(['update-search-query']);

const sentQueryToParent = (query) => {
    emit('update-search-query', query);
}

watch(searchQuery, (newVal) => {
    sentQueryToParent(newVal);
});

</script>

<template>
    <div class= "search-section">
        <div class="search-bar">
            <h2>Research what you like</h2>
            <input type="text" v-model="searchQuery" placeholder="Search here..." class="search-input"/>
        </div>
    </div>


</template>
