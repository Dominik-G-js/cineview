// src/store/useMovieQueryStore.ts
import { create } from 'zustand';

// OPRAVA č. 2: Přidali jsme 'export', aby byl tento typ viditelný i v jiných souborech.
export interface MovieQuery {
  searchText?: string;
  genreId?: number;
}

interface MovieQueryStore {
  movieQuery: MovieQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
}

const useMovieQueryStore = create<MovieQueryStore>((set) => ({
  movieQuery: {},
  setSearchText: (searchText) => set(() => ({ movieQuery: { searchText } })),
  // OPRAVA č. 1: Změnili jsme '...store.gameQuery' na správné '...store.movieQuery'.
  setGenreId: (genreId) => set((store) => ({ movieQuery: { ...store.movieQuery, genreId } })),
}));

export default useMovieQueryStore;