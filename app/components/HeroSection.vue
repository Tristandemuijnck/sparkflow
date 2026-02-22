<script setup lang="ts">
defineProps<{
  title: string
  description: string
  phase: string
  reverse?: boolean
}>()
</script>

<template>
  <section class="border-b border-border">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0"
      :class="reverse ? 'md:[direction:rtl]' : ''"
    >
      <!-- Text side -->
      <div class="px-8 py-16 md:py-20" :class="reverse ? '[direction:ltr]' : ''">
        <h1 class="text-4xl md:text-5xl font-light italic mb-4 font-bricolage">{{ title }}</h1>
        <p class="text-primary-dimmed max-w-xl leading-relaxed">{{ description }}</p>
      </div>
      <!-- Shape side -->
      <div
        class="flex items-center justify-center px-8 py-12 md:py-20 md:border-l border-border"
        :class="reverse ? '[direction:ltr] md:border-l-0 md:border-r' : ''"
      >
        <div class="w-48 h-48 md:w-64 md:h-64">
          <GeoShape :phase="phase" />
        </div>
      </div>
    </div>
  </section>
</template>
