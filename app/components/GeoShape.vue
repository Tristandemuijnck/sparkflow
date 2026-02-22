<script setup lang="ts">
defineProps<{
  phase: string;
}>();
</script>

<template>
  <div class="animate-[spin_60s_linear_infinite]">
    <!-- Icosahedron — Strategy: sharp, many edges -->
    <svg
      v-if="phase === 'icosahedron'"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
      class="h-full w-full text-white"
    >
      <polygon points="100,10 170,50 170,130 100,170 30,130 30,50" />
      <line x1="100" y1="10" x2="100" y2="170" />
      <line x1="30" y1="50" x2="170" y2="130" />
      <line x1="170" y1="50" x2="30" y2="130" />
      <line x1="100" y1="10" x2="30" y2="130" />
      <line x1="100" y1="10" x2="170" y2="130" />
      <line x1="30" y1="50" x2="100" y2="170" />
      <line x1="170" y1="50" x2="100" y2="170" />
      <line x1="30" y1="50" x2="170" y2="50" />
      <line x1="30" y1="130" x2="170" y2="130" />
      <!-- Inner triangulation -->
      <line x1="100" y1="10" x2="65" y2="90" />
      <line x1="100" y1="10" x2="135" y2="90" />
      <line x1="65" y1="90" x2="135" y2="90" />
      <line x1="65" y1="90" x2="30" y2="50" />
      <line x1="65" y1="90" x2="30" y2="130" />
      <line x1="135" y1="90" x2="170" y2="50" />
      <line x1="135" y1="90" x2="170" y2="130" />
      <line x1="65" y1="90" x2="100" y2="170" />
      <line x1="135" y1="90" x2="100" y2="170" />
    </svg>

    <!-- Dodecahedron — Design: structured, fewer faces -->
    <svg
      v-else-if="phase === 'dodecahedron'"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
      class="h-full w-full text-white"
    >
      <!-- Outer pentagon -->
      <polygon points="100,15 175,60 155,150 45,150 25,60" />
      <!-- Inner pentagon (rotated) -->
      <polygon points="100,55 145,80 130,135 70,135 55,80" />
      <!-- Connections outer to inner -->
      <line x1="100" y1="15" x2="100" y2="55" />
      <line x1="175" y1="60" x2="145" y2="80" />
      <line x1="155" y1="150" x2="130" y2="135" />
      <line x1="45" y1="150" x2="70" y2="135" />
      <line x1="25" y1="60" x2="55" y2="80" />
      <!-- Cross connections -->
      <line x1="100" y1="15" x2="145" y2="80" />
      <line x1="100" y1="15" x2="55" y2="80" />
      <line x1="175" y1="60" x2="130" y2="135" />
      <line x1="25" y1="60" x2="70" y2="135" />
      <line x1="155" y1="150" x2="70" y2="135" />
      <line x1="45" y1="150" x2="130" y2="135" />
      <!-- Bottom center point -->
      <line x1="100" y1="185" x2="155" y2="150" />
      <line x1="100" y1="185" x2="45" y2="150" />
      <line x1="100" y1="185" x2="130" y2="135" />
      <line x1="100" y1="185" x2="70" y2="135" />
    </svg>

    <!-- Faceted sphere — Develop: almost round, being refined -->
    <svg
      v-else-if="phase === 'faceted'"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
      class="h-full w-full text-white"
    >
      <!-- Outer circle approximation with octagon -->
      <polygon
        points="100,15 155,30 180,75 180,125 155,170 100,185 45,170 20,125 20,75 45,30"
      />
      <!-- Middle ring -->
      <polygon
        points="100,40 140,55 160,90 160,110 140,145 100,160 60,145 40,110 40,90 60,55"
      />
      <!-- Inner ring -->
      <polygon
        points="100,70 125,80 135,100 125,120 100,130 75,120 65,100 75,80"
      />
      <!-- Radial connections -->
      <line x1="100" y1="15" x2="100" y2="40" />
      <line x1="155" y1="30" x2="140" y2="55" />
      <line x1="180" y1="75" x2="160" y2="90" />
      <line x1="180" y1="125" x2="160" y2="110" />
      <line x1="155" y1="170" x2="140" y2="145" />
      <line x1="100" y1="185" x2="100" y2="160" />
      <line x1="45" y1="170" x2="60" y2="145" />
      <line x1="20" y1="125" x2="40" y2="110" />
      <line x1="20" y1="75" x2="40" y2="90" />
      <line x1="45" y1="30" x2="60" y2="55" />
      <!-- Inner connections -->
      <line x1="100" y1="40" x2="100" y2="70" />
      <line x1="140" y1="55" x2="125" y2="80" />
      <line x1="160" y1="90" x2="135" y2="100" />
      <line x1="160" y1="110" x2="125" y2="120" />
      <line x1="140" y1="145" x2="100" y2="130" />
      <line x1="100" y1="160" x2="100" y2="130" />
      <line x1="60" y1="145" x2="75" y2="120" />
      <line x1="40" y1="110" x2="65" y2="100" />
      <line x1="40" y1="90" x2="75" y2="80" />
      <line x1="60" y1="55" x2="75" y2="80" />
    </svg>

    <!-- Smooth sphere — Test: polished, complete -->
    <svg
      v-else-if="phase === 'sphere'"
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
      class="h-full w-full text-white"
    >
      <!-- Main circle -->
      <circle cx="100" cy="100" r="85" />
      <!-- Horizontal ellipses (latitude lines) -->
      <ellipse cx="100" cy="60" rx="75" ry="12" />
      <ellipse cx="100" cy="100" rx="85" ry="14" />
      <ellipse cx="100" cy="140" rx="75" ry="12" />
      <!-- Vertical ellipses (longitude lines) -->
      <ellipse cx="100" cy="100" rx="14" ry="85" />
      <ellipse cx="100" cy="100" rx="45" ry="85" />
      <ellipse cx="100" cy="100" rx="70" ry="85" />
    </svg>
  </div>
</template>
