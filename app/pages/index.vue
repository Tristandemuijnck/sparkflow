<script setup lang="ts">
import { phases } from "~/data/phases";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(Observer, ScrollToPlugin);

let currentIndex = 0;
let animating = false;
const observers: Observer[] = [];

function goToSection(index: number, panels: HTMLElement[]) {
  if (animating || index < 0 || index >= panels.length) return;
  animating = true;
  currentIndex = index;

  gsap.to(window, {
    scrollTo: { y: panels[currentIndex], autoKill: false },
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      animating = false;
    },
  });
}

onMounted(() => {
  const panels = gsap.utils.toArray<HTMLElement>(".snap-panel");
  if (!panels.length) return;

  // Desktop: wheel down = next section, wheel up = previous
  observers.push(
    Observer.create({
      type: "wheel",
      onUp: () => goToSection(currentIndex - 1, panels),
      onDown: () => goToSection(currentIndex + 1, panels),
      tolerance: 50,
      preventDefault: true,
    }),
  );

  // Mobile: swipe up = next section, swipe down = previous
  observers.push(
    Observer.create({
      type: "touch",
      onUp: () => goToSection(currentIndex + 1, panels),
      onDown: () => goToSection(currentIndex - 1, panels),
      tolerance: 50,
      preventDefault: true,
    }),
  );
});

onUnmounted(() => {
  observers.forEach((obs) => obs.kill());
});
</script>

<template>
  <main class="flex min-h-dvh flex-col bg-bg">
    <div class="snap-panel flex min-h-dvh flex-col">
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
          Turn your creative spark into a completed project with a
          straightforward workflow.
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
    </div>

    <section
      v-for="phase in phases"
      :id="phase.id"
      :key="phase.id"
      class="snap-panel flex min-h-dvh w-full flex-col"
    >
      <div class="flex h-fit w-full border-b border-t border-border">
        <!-- Phase number -->
        <p
          class="border-r border-border px-5 py-2.5 font-bricolage text-[40px] font-light leading-[1.2] text-white"
        >
          {{ phase.number }}
        </p>

        <!-- Phase icons -->
        <nav class="flex w-full flex-row items-center justify-center gap-6">
          <a
            v-for="p in phases"
            :key="p.id"
            :href="`#${p.id}`"
            class="transition-opacity"
            :class="
              p.id === phase.id ? 'opacity-100' : 'opacity-25 hover:opacity-50'
            "
          >
            <img
              :src="`images/icons/${p.icon}.svg`"
              :alt="`${p.title} icon`"
              class="size-8"
            />
          </a>
        </nav>
      </div>

      <!-- Phase shape -->
      <div class="flex h-fit justify-center px-6 py-10">
        <div class="h-fit w-64">
          <GeoShape :phase="phase.shape" />
        </div>
      </div>

      <!-- Phase content -->
      <div
        class="flex w-full flex-1 flex-col gap-6 border-t border-border px-6 py-12"
      >
        <h2 class="font-bricolage text-[39px] leading-[1.2] text-white">
          {{ phase.title }}
        </h2>
        <p class="font-bricolage leading-[1.2] text-primary-dimmed">
          {{ phase.description }}
        </p>
        <NuxtLink
          :to="`/${phase.id}`"
          class="w-fit bg-white px-5 py-2.5 font-bricolage font-semibold leading-[1.2] text-black"
          >{{ phase.ctaText }}</NuxtLink
        >
      </div>

      <!-- Phase name -->
      <div
        class="flex h-fit w-full justify-end border-b border-t border-border"
      >
        <p
          class="border-l border-border px-5 py-2.5 font-bricolage text-[40px] font-light leading-[1.2] text-white"
        >
          {{ phase.label }}
        </p>
      </div>
    </section>
  </main>
</template>
