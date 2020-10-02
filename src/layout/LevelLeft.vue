<script lang="ts">
import { Component } from "vue-property-decorator";
import LevelSide from "./LevelSide.vue";

@Component
export default class LevelLeft extends LevelSide {
  constructor() {
    super("left");
  }

  mounted(): void {
    super.mounted();
  }
}
</script>
