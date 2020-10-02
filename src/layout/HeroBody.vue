<template>
  <div class="hero-body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeroBody extends Vue {}
</script>
