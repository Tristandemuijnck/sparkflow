<script setup lang="ts">
import { phases } from "~/data/phases";
</script>

<template>
  <main class="min-h-screen bg-bg">
    <!-- Hero header, subtitle and call-to-action -->
    <section class="p-6">
      <p
        class="text-primary font-bricolage font-light uppercase tracking-[3px] text-lg mb-14"
      >
        Sparkflow
      </p>
      <h1 class="text-7xl text-primary font-bricolage mb-6">
        Imagine. Create. Deliver.
      </h1>
      <p
        class="text-primary-dimmed font-bricolage font-extralight text-sm mb-8"
      >
        Turn your creative spark into a completed project with a straightforward
        workflow.
      </p>
      <a
        href="#strategy"
        class="inline-block bg-white text-black uppercase tracking-[1.5px] text-sm font-semibold px-8 py-3"
      >
        GET STARTED
      </a>
    </section>

    <section
      v-for="phase in phases"
      :id="phase.id"
      :key="phase.id"
      class="min-h-screen border-b border-border flex items-center"
    >
      <div class="w-full max-w-6xl mx-auto px-8 py-20">
        <p class="text-primary-dimmed text-sm mb-2">
          {{ phase.number }}
        </p>
        <h2 class="text-4xl font-light italic mb-4">
          {{ phase.title }}
        </h2>
        <p class="text-primary-dimmed max-w-xl mb-8">
          {{ phase.description }}
        </p>
        <NuxtLink
          :to="`/${phase.id}`"
          class="inline-block bg-white text-black uppercase tracking-[1.5px] text-sm font-semibold px-8 py-3"
        >
          {{ phase.ctaText }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
