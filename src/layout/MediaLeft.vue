<template>
  <figure class="media-left">
    <slot></slot>
  </figure>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MediaLeft extends Vue {}
</script>
