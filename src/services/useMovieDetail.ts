import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "./api-client";

export const useMovieDetail = (id: string) => {
  return useQuery({
    // Klíč je pole, které obsahuje ID, aby byl unikátní pro každý film
    queryKey: ['movie', id],
    // Funkce zavolá náš fetcher s daným ID
    queryFn: () => fetchMovieDetail(id),
  });
};