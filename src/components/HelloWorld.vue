<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$myFont: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

.hello {
  text-align: center;
  font-size: 30px;
  font-family: $myFont;
}
</style>
