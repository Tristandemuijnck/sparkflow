<script setup lang="ts">
import type { Step } from '~/data/phases'

defineProps<{
  step: Step
}>()
</script>

<template>
  <div class="bg-bg-card p-6 group hover:bg-[#141414] transition-colors">
    <div class="flex justify-between items-start mb-4">
      <span class="text-primary-dimmed text-sm font-bricolage">{{ step.number }}</span>
      <img
        :src="`/images/icons/${step.icon}.svg`"
        :alt="step.title"
        class="size-7 opacity-40"
      />
    </div>
    <h3 class="text-lg font-semibold mb-2">{{ step.title }}</h3>
    <p class="text-primary-dimmed text-sm leading-relaxed mb-6">{{ step.description }}</p>
    <div class="border-t border-border pt-3 flex gap-4 text-xs text-primary-dimmed">
      <span>{{ step.effort }}</span>
      <span>&middot;</span>
      <span>{{ step.deliverable }}</span>
    </div>
  </div>
</template>
