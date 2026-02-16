<script setup lang="ts">
import { getPhaseById } from "~/data/phases";

const phase = getPhaseById("develop")!;
</script>

<template>
  <main class="min-h-screen bg-bg">
    <section class="border-b border-border px-8 py-20">
      <div class="max-w-6xl mx-auto">
        <p class="text-primary-dimmed text-sm mb-2">{{ phase.number }}</p>
        <h1 class="text-5xl font-light italic mb-4">{{ phase.title }}</h1>
        <p class="text-primary-dimmed max-w-xl">{{ phase.description }}</p>
      </div>
    </section>

    <section class="px-8 py-12">
      <div class="max-w-6xl mx-auto">
        <div
          class="flex justify-between items-center border-b border-border pb-4 mb-8"
        >
          <p class="text-primary-dimmed uppercase tracking-[1.5px] text-sm">
            Steps & Tasks
          </p>
          <p class="text-primary-dimmed text-sm">
            {{ phase.steps.length }} Steps
          </p>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          <div
            v-for="step in phase.steps"
            :key="step.number"
            class="bg-bg-card p-6"
          >
            <div class="flex justify-between items-start mb-4">
              <span class="text-primary-dimmed text-sm">{{ step.number }}</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-primary-dimmed text-sm mb-6">
              {{ step.description }}
            </p>
            <div
              class="border-t border-border pt-3 flex gap-4 text-xs text-primary-dimmed"
            >
              <span>{{ step.effort }}</span>
              <span>{{ step.deliverable }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
