<script setup lang="ts">
import { phases } from "~/data/phases";
</script>

<template>
  <main class="min-h-screen bg-bg">
    <!-- Hero header, subtitle and call-to-action -->
    <section class="px-6 pt-6">
      <p
        class="mb-14 font-bricolage text-lg font-light uppercase leading-[1.2] text-primary"
      >
        Sparkflow
      </p>
      <h1 class="mb-6 font-bricolage text-[80px] leading-[1.08] text-primary">
        Imagine. Create. Deliver.
      </h1>
      <p
        class="mb-4 font-bricolage text-[13px] font-extralight leading-[1.2] text-primary-dimmed"
      >
        Turn your creative spark into a completed project with a straightforward
        workflow.
      </p>
      <a
        href="#strategy"
        class="inline-block bg-white px-5 py-2.5 font-bricolage text-[13px] font-semibold uppercase leading-[1.2] tracking-[1px] text-black"
      >
        Get started
      </a>
    </section>

    <!-- Hero navigation -->
    <nav class="mt-[72px] border-t border-border">
      <a
        v-for="phase in phases"
        :key="phase.id"
        :href="`#${phase.id}`"
        class="flex items-center justify-between gap-4 border-b border-border px-6 py-4"
      >
        <img
          :src="`images/icons/${phase.icon}.svg`"
          :alt="`${phase.title} icon`"
          class="size-8"
        />
        <div class="flex items-center gap-7">
          <span
            class="flex-1 text-center font-bricolage text-4xl font-normal capitalize leading-[1.2] text-primary"
          >
            {{ phase.id }}
          </span>
          <img
            :src="`images/icons/right-arrow.svg`"
            :alt="`right arrow icon`"
            class="size-8"
          />
        </div>
      </a>
    </nav>

    <section
      v-for="phase in phases"
      :id="phase.id"
      :key="phase.id"
      class="flex min-h-screen items-center border-b border-border"
    >
      <div class="mx-auto w-full max-w-6xl px-8 py-20">
        <p class="mb-2 text-sm text-primary-dimmed">
          {{ phase.number }}
        </p>
        <h2 class="mb-4 text-4xl font-light italic">
          {{ phase.title }}
        </h2>
        <p class="mb-8 max-w-xl text-primary-dimmed">
          {{ phase.description }}
        </p>
        <NuxtLink
          :to="`/${phase.id}`"
          class="inline-block bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[1.5px] text-black"
        >
          {{ phase.ctaText }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
