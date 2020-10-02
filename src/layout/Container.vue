<template>
  <div class="container" :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import cl from "classnames";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Container extends Vue {
  @Prop(Boolean) readonly fullhd?: boolean;
  @Prop(Boolean) readonly maxDesktop?: boolean;
  @Prop(Boolean) readonly maxWidescreen?: boolean;
  @Prop(Boolean) readonly widescreen?: boolean;

  get className(): string {
    return cl({
      "is-fullhd": this.fullhd,
      "is-max-desktop": this.maxDesktop,
      "is-max-widescreen": this.maxWidescreen,
      "is-widescreen": this.widescreen
    });
  }
}
</script>
