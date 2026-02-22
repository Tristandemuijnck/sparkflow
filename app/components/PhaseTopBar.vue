<script setup lang="ts">
import { phases } from '~/data/phases'

const props = defineProps<{
  activePhase: string
}>()

const activePhaseData = computed(() => phases.find(p => p.id === props.activePhase))
</script>

<template>
  <div class="flex h-fit w-full border-b border-border">
    <p class="border-r border-border px-5 py-2.5 font-bricolage text-[40px] font-light leading-[1.2] text-white">
      {{ activePhaseData?.number }}
    </p>
    <nav class="flex w-full flex-row items-center justify-center gap-6">
      <NuxtLink
        v-for="p in phases"
        :key="p.id"
        :to="`/${p.id}`"
        class="transition-opacity"
        :class="p.id === activePhase ? 'opacity-100' : 'opacity-25 hover:opacity-50'"
      >
        <img
          :src="`/images/icons/${p.icon}.svg`"
          :alt="`${p.label} icon`"
          class="size-8"
        />
      </NuxtLink>
    </nav>
  </div>
</template>
