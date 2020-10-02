<template>
  <section class="hero" :class="className">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import cl from "classnames";
import { Component, Prop, Vue } from "vue-property-decorator";
import Color from "@/color";

@Component
export default class Hero extends Vue {
  @Prop(Boolean) readonly bold?: boolean;
  @Prop() readonly color?: Color;
  @Prop() readonly size?: Size;
  @Prop(Boolean) readonly withNavbar?: boolean;

  get className(): string {
    return cl({
      "is-bold": this.bold,
      [`is-${this.color}`]: !!this.color,
      [`is-${this.size}`]: !!this.size
    });
  }
}

type Size = "fullheight" | "fullheight-with-navbar" | "large" | "medium";
</script>
