<template>
  <VIcon icon="mdi:mdi-star"></VIcon>
  <VIcon icon="icon-tooling"></VIcon>
</template>

<script>
import { defineComponent } from "vue";

// Components
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HelloWorld,
  },
});
</script>
