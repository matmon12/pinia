import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
export const useMovieStore = defineStore("movieStore", () => {
  // state
  const movies = ref([]);
  const activeTab = ref(1);

  const moviesInLocalStorage = localStorage.getItem("movies");
  if(moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)._value;
  }

  // getters
  const watchedMovies = computed(() => movies.value.filter((el) => el.isHit));
  const totalCountMovies = computed(() => movies.value.length);

  // actions
  const setActiveTab = (id) => {
    activeTab.value = id;
  };
  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id);
    movies.value[idx].isHit = !movies.value[idx].isHit;
  };
  const deleteMovie = (id) => {
    movies.value = movies.value.filter((el) => el.id !== id);
  };

  watch(() => movies, (state) => {
    localStorage.setItem('movies', JSON.stringify(state))
  }, {deep: true})

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    setActiveTab,
    toggleWatched,
    deleteMovie,
  };
});
