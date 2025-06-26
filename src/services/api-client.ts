// src/services/api-client.ts
import { Genre, MovieDetail, FetchMoviesResponse } from "@/types/Movie";
import { MovieQuery } from "@/store/useMovieQueryStore";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';


export const fetchMovies = async (query: MovieQuery): Promise<FetchMoviesResponse> => {
  let endpoint = '/movie/popular';
  const params = new URLSearchParams({
    api_key: API_KEY!,
    language: 'en-US',
  });

  if (query.searchText) {
    endpoint = '/search/movie';
    params.append('query', query.searchText);
  } else if (query.genreId) {
    endpoint = '/discover/movie'; // Pro filtrování podle žánru použijeme endpoint "discover"
    params.append('with_genres', query.genreId.toString());
  }
  
  const url = `${BASE_URL}${endpoint}?${params.toString()}`;
  console.log('Odesílám požadavek na URL:', url);
  
  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error('Nepodařilo se načíst filmy.');
  }
  return res.json();
}

export const fetchMovieDetail = async (id: string): Promise<MovieDetail> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

  if (!res.ok) {
    throw new Error(`Nepodařilo se načíst detaily filmu s id ${id}.`);
  }
  return res.json();
}

export interface FetchGenresResponse {
  genres: Genre[];
}



export const fetchGenres = async (): Promise<FetchGenresResponse> => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) {
    throw new Error('Nepodařilo se načíst žánry.');
  }
  return res.json();
};