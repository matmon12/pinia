import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import {useMovieStore} from "./MovieStore"
const url =
  "https://c2ff7a8de0a119c8.mokky.dev/items?title=*";

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    try {
      loader.value = true;
      const {data} = await axios(`${url}${search}*`);
      movies.value = data;
    } catch(err) {
      console.log(err);
    } finally {
      loader.value = false;
    }
  }

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({...object, isHit: false});
    movieStore.activeTab = 1;
  }

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies
  }
})
