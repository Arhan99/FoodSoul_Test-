<template>
  <HelloWorld msg="Food Soul Test Task" />
  <Search />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Search from "./components/Search.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Search,
  },
  setup() {
    const items = ref([]);
    return { items };
  },
});
</script>

<style lang="scss"></style>
