<script setup lang="ts">
import type { Step } from '~/data/phases'

defineProps<{
  steps: Step[]
}>()
</script>

<template>
  <section class="px-8 py-12">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-center border-b border-border pb-4 mb-8">
        <p class="text-primary-dimmed uppercase tracking-[1.5px] text-sm">Steps & Tasks</p>
        <p class="text-primary-dimmed text-sm">{{ steps.length }} Steps</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        <StepCard
          v-for="step in steps"
          :key="step.number"
          :step="step"
        />
      </div>
    </div>
  </section>
</template>
