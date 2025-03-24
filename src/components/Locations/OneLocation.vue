<script setup>
import { defineProps } from 'vue';
import { useRickMortyStore } from '@/store/store';

const Store = useRickMortyStore();

const props = defineProps({
    ALocation: Object
});
</script>

<template>
    <div class="location-card">
      <div class="location-header">
        <h3 class="location-name">{{ ALocation.name }}</h3>
      </div>
      <div class="location-info">
        <span class="location-type">{{ ALocation.type }}</span>
        <div class="info-row">
          <span class="info-label">Dimension:</span>
          <span class="info-value location-dimension">{{ ALocation.dimension }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Residents:</span>
          <span class="info-value">{{ ALocation.residents?.length || 0 }} residents</span>
        </div>
      </div>
    </div>
</template>