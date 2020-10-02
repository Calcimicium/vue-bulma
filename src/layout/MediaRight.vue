<template>
  <div class="media-right">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MediaRight extends Vue {}
</script>
