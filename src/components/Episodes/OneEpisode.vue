<script setup>
import { onMounted, ref, defineProps } from 'vue';
import { useRickMortyStore } from '@/store/store';

const Store = useRickMortyStore();

const props = defineProps({
    AEpisode: Object
});
</script>

<template>
    <div class="episode-card">
      <div class="episode-header">
        <h3 class="episode-name">{{ AEpisode.name }}</h3>
      </div>
      <div class="episode-info">
        <span class="episode-code">{{ AEpisode.episode }}</span>
        <div class="info-row">
          <span class="info-label">Air Date:</span>
          <span class="info-value">{{ AEpisode.air_date }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Characters:</span>
          <span class="info-value">{{ AEpisode.characters?.length || 0 }} characters</span>
        </div>
      </div>
    </div>
</template>

