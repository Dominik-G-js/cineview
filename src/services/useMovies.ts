// src/services/useMovies.ts
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "./api-client";
import useMovieQueryStore from "@/store/useMovieQueryStore";

export const useMovies = () => {
  // Získáme celý objekt s filtry z našeho storu
  const movieQuery = useMovieQueryStore(s => s.movieQuery);

  return useQuery({
    // queryKey nyní obsahuje celý objekt s filtry
    // TanStack Query automaticky spustí dotaz znovu, když se tento objekt změní
    queryKey: ['movies', movieQuery],
    // queryFn nyní volá fetchMovies s aktuálním stavem filtrů
    queryFn: () => fetchMovies(movieQuery),
  });
}