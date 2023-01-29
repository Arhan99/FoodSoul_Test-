<template>
  <div class="search">
    <label class="search__wrap" for="input">
      <img class="search__ico" src="../assets/search.svg" alt="search" />
      <input
        id="input"
        @keyup="$emit('inputKeyUp')"
        v-model="val"
        type="text"
        class="search__input"
        placeholder="Search..."
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    getDatas: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
