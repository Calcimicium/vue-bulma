<template>
  <article class="media">
    <slot></slot>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MediaContent from "./MediaContent.vue";
import MediaLeft from "./MediaLeft.vue";
import MediaRight from "./MediaRight.vue";

const missingContentChildNodeMessage =
  "<media> component should have one and only one <media-content> child node.";

@Component
export default class Media extends Vue {
  mounted(): void {
    if (!this.$slots.default)
      return console.warn(missingContentChildNodeMessage, "None given", this);

    let mediaContentCount = 0;
    let mediaLeftCount = 0;
    let mediaRightCount = 0;

    this.$slots.default.forEach(n => {
      if (n.componentInstance instanceof MediaContent) mediaContentCount++;
      else if (n.componentInstance instanceof MediaLeft) mediaLeftCount++;
      else if (n.componentInstance instanceof MediaRight) mediaRightCount++;
    });

    if (!mediaContentCount || mediaContentCount > 1)
      console.warn(
        missingContentChildNodeMessage,
        `${mediaContentCount} given`,
        this
      );

    if (mediaLeftCount > 1)
      console.warn(
        this.getMediaSideOverflowMessage("left"),
        `${mediaLeftCount} given`,
        this
      );

    if (mediaRightCount > 1)
      console.warn(
        this.getMediaSideOverflowMessage("right"),
        `${mediaRightCount} given`,
        this
      );
  }

  private getMediaSideOverflowMessage(side: "left" | "right"): string {
    return `<media> component should not have more than one <media-${side}> child node.`;
  }
}
</script>
