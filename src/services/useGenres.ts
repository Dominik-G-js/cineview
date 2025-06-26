import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "./api-client";

export const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    // Žánry se nemění často, proto nastavíme delší cache a "stale" čas
    staleTime: 24 * 60 * 60 * 1000, // 24 hodin
  });
};