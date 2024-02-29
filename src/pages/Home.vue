<template>
  <header class="header">
    <img src="@/img/vue.svg" alt="logo" class="header-logo" />
    <h2>My Favorite Movies</h2>
  </header>
  <div class="tabs">
    <button
      :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
      @click="setTab(1)"
    >
      Favorite
    </button>
    <button
      :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
      @click="setTab(2)"
    >
      Search
    </button>
  </div>
  <div class="movies" v-if="movieStore.activeTab === 1">
    <div>
      <h3>Watched movies (count: {{ movieStore.watchedMovies.length }})</h3>
      <Movie v-for="movie in movieStore.watchedMovies" :key="movie.id" :movie="movie" />
    </div>
    <h3>All movies (count: {{ movieStore.totalCountMovies }})</h3>
    <Movie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
  </div>
  <div class="search" v-else><Search /></div>
</template>

<script setup>
import { useMovieStore } from "@/stores/MovieStore.js";
const movieStore = useMovieStore();

const setTab = (id) => {
  movieStore.setActiveTab(id);
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.movies{
  width: 50%;
  margin: 0 auto;
}

.search{
  width: 50%;
  margin: 0 auto;
}
</style>
