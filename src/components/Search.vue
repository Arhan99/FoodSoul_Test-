<template>
  <div class="search-page__wrap">
    <div class="search">
      <label class="search__wrap" for="input">
        <img class="search__ico" src="../assets/search.svg" alt="search" />
        <input
          id="input"
          @keyup="debounce(() => searchStore.getPlaces(val), 400)"
          v-model="val"
          type="text"
          class="search__input"
          placeholder="Search..."
        />
      </label>
    </div>
    <!-- <SearchInput  /> -->
    <span class="search__preloader" v-if="searchStore.loading">Loading...</span>
    <span
      class="search__info"
      v-if="searchStore.places.length === 0 && !searchStore.loading"
      >Start searching</span
    >
    <ul class="search__list">
      <SearchCard
        v-for="element in searchStore.places"
        :element="element"
        :key="element.place_id"
      />
    </ul>
  </div>
</template>

<script>
import SearchCard from "../components/SearchCard.vue";
import SearchInput from "./SearchInput.vue";
import { useSearchStore } from "../stores/SearchStore";

export default {
  name: "SearchComponent",
  components: {
    SearchCard,
    // SearchInput,
  },
  setup() {
    const searchStore = useSearchStore();

    function createDebounce() {
      let timeout = null;
      return function (fnc, delayMs) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fnc();
        }, delayMs || 500);
      };
    }

    return {
      debounce: createDebounce(),
      searchStore,
    };
  },
};
</script>

<style lang="scss">
@import "../css/quasar.variables.scss";
@import "../css/media-queries.scss";

.search-page__wrap {
  display: flex;
  flex-direction: column;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  &__wrap {
    position: relative;
    display: flex;
  }
  &__ico {
    position: absolute;
    left: 0;
    top: 4px;
    width: 40px;
  }
  &__input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 12px 20px 12px 35px;
    width: 400px;
    border-radius: 15px;
    font-size: 16px;
    @include tablet {
      width: auto;
    }
  }
  &__preloader,
  &__info {
    text-align: center;
    font-family: $myFont;
    font-size: 30px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @include tablet {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
