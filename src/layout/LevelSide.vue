<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import LevelItem from "./LevelItem.vue";

const badChildNodeMessage =
  "<level-side> component should only have <level-item> child nodes.";

export default abstract class LevelSide extends Vue {
  protected readonly side: Side;

  constructor(side: Side) {
    super();
    this.side = side;
  }

  get className(): string {
    return `level-${this.side}`;
  }

  mounted(): void {
    if (!this.$slots.default) return;

    this.$slots.default.forEach(n => {
      if (!(n.componentInstance instanceof LevelItem))
        console.warn(badChildNodeMessage, this);
    });
  }
}

type Side = "left" | "right";
</script>
