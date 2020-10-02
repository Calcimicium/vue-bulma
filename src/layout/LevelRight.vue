<script lang="ts">
import { Component } from "vue-property-decorator";
import LevelSide from "./LevelSide.vue";

@Component
export default class LevelRight extends LevelSide {
  constructor() {
    super("right");
  }

  mounted(): void {
    super.mounted();
  }
}
</script>
