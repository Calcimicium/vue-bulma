<template>
  <div class="media-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MediaContent extends Vue {}
</script>
