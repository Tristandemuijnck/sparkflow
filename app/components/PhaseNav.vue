<script setup lang="ts">
import { getPhaseById } from '~/data/phases'

const props = defineProps<{
  currentPhase: string
}>()

const current = computed(() => getPhaseById(props.currentPhase))
const prevPhase = computed(() => current.value ? getPhaseById(current.value.prev) : undefined)
const nextPhase = computed(() => current.value ? getPhaseById(current.value.next) : undefined)
</script>

<template>
  <nav class="border-t border-border grid grid-cols-2">
    <NuxtLink
      v-if="prevPhase"
      :to="`/${prevPhase.id}`"
      class="flex items-center gap-4 border-r border-border px-8 py-6 group hover:bg-[#0f0f0f] transition-colors"
    >
      <svg class="size-5 text-primary-dimmed group-hover:text-white transition-colors rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
      <div>
        <p class="text-xs text-primary-dimmed uppercase tracking-[1.5px] mb-1">Previous phase</p>
        <p class="text-white font-bricolage text-lg">{{ prevPhase.label }}</p>
      </div>
    </NuxtLink>
    <NuxtLink
      v-if="nextPhase"
      :to="`/${nextPhase.id}`"
      class="flex items-center justify-end gap-4 px-8 py-6 group hover:bg-[#0f0f0f] transition-colors"
    >
      <div class="text-right">
        <p class="text-xs text-primary-dimmed uppercase tracking-[1.5px] mb-1">Next phase</p>
        <p class="text-white font-bricolage text-lg">{{ nextPhase.label }}</p>
      </div>
      <svg class="size-5 text-primary-dimmed group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </NuxtLink>
  </nav>
</template>
