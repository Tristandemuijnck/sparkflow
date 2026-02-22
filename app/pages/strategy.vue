<script setup lang="ts">
import { getPhaseById } from '~/data/phases'

const phase = getPhaseById('strategy')!
</script>

<template>
  <main class="min-h-screen bg-bg">
    <PhaseTopBar :active-phase="phase.id" />
    <HeroSection
      :title="phase.title"
      :description="phase.description"
      :phase="phase.shape"
    />
    <StepGrid :steps="phase.steps" />
    <PhaseNav :current-phase="phase.id" />
  </main>
</template>
