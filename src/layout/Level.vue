<template>
  <nav class="level">
    <slot></slot>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LevelLeft from "./LevelLeft.vue";
import LevelRight from "./LevelRight.vue";

const missingSideNodesMessage =
  "<level> component should have at least one <level-left> or one <level-right> child node.";
const childrenOverflowMessage =
  "<level> component should not have more than two children.";
const badChildNodeMessage =
  "<level> component should only have <level-left> or <level-right> child nodes.";

@Component
export default class Level extends Vue {
  get hasLeftSlot(): boolean {
    return true;
  }

  get hasRightSlot(): boolean {
    return true;
  }

  mounted(): void {
    if (!this.$slots.default)
      return console.warn(missingSideNodesMessage, this);

    const childrenCount = this.$slots.default.length;

    if (childrenCount > 2)
      console.warn(childrenOverflowMessage, `${childrenCount} given`, this);

    let leftLevelsCount = 0;
    let rightLevelsCount = 0;

    this.$slots.default.forEach(n => {
      if (n.componentInstance instanceof LevelLeft) leftLevelsCount++;
      else if (n.componentInstance instanceof LevelRight) rightLevelsCount++;
      else console.warn(badChildNodeMessage, this, n);
    });

    if (leftLevelsCount > 1)
      console.warn(
        this.getSideNodesOverflowMessage("left"),
        `${leftLevelsCount} given`,
        this
      );

    if (rightLevelsCount > 1)
      console.warn(
        this.getSideNodesOverflowMessage("right"),
        `${rightLevelsCount} given`,
        this
      );
  }

  private getSideNodesOverflowMessage(side: "left" | "right"): string {
    return `<level> component should not have more than one <level-${side}> child node.`;
  }
}
</script>
