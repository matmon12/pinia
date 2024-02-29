<template>
  <form >
    <input
      type="text"
      class="search-input"
      placeholder="Input movie"
      v-model="searchMovie"
      @input="updateInput"
    />
  </form>
  <Loader v-if="searchStore.loader"/>
  <div v-else>
    <Movie v-for="movie of searchStore.movies" :key="movie.id" :movie="movie" :isSearch="true"/>
  </div>
</template>

<script setup>
import debounce from "lodash.debounce";
import {useSearchStore} from "../stores/SearchStore";
import {ref} from 'vue';
const emit = defineEmits();

const searchStore = useSearchStore();
const searchMovie = ref('');
const updateInput = debounce((event) => {
  emit("update:modelValue", event.target.value);
  searchStore.getMovies(searchMovie.value);
}, 500);
</script>

<style lang="scss" scoped>
.search-input{
  border:  1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
