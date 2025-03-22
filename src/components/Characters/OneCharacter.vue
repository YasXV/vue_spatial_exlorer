<script setup>
import { defineProps } from 'vue';
import { useRickMortyStore } from '@/store/store';

const Store = useRickMortyStore();

const props = defineProps({
    ACharacter: Object
});
</script>

<template>
    <div class="character-card">
      <div class="card-header">
        <h3 class="character-name">{{ ACharacter.name }}</h3>
      </div>
      <div class="image-container">
        <img class="character-image" :src="ACharacter.image" :alt="ACharacter.name" />
      </div>
      <div class="character-info">
        <div class="info-row">
          <span class="info-label">Species :</span>
          <span class="info-value">{{ ACharacter.species }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Gender :</span>
          <span class="info-value">{{ ACharacter.gender }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Status :</span>
          <span class="character-status-badge" :class="Store.deadOrAlive(ACharacter.status)">
            {{ ACharacter.status }}
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">Origin : </span>
          <span class="info-value">{{ ACharacter.origin?.name || 'Unknown' }}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Localisation :</span>
          <span class="info-value">{{ ACharacter.location?.name || 'Unknown' }}</span>
        </div>
      </div>
    </div>
</template>