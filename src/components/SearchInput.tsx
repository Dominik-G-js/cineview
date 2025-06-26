// src/components/SearchInput.tsx
import { useState, useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";
import useMovieQueryStore from "@/store/useMovieQueryStore";
import { Input } from "./ui/input";

const SearchInput = () => {
  // Lokální stav pro okamžitou odezvu při psaní
  const [searchTerm, setSearchTerm] = useState('');
  // Získáme debouncovanou hodnotu (změní se až 500ms po dopsání)
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // Funkce pro nastavení globálního stavu
  const setSearchText = useMovieQueryStore(s => s.setSearchText);

  // Tento efekt se spustí, jen když se změní DEBOUNCOVANÁ hodnota
  useEffect(() => {
    setSearchText(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchText]);

  return (
    <Input 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="text-lg"
      placeholder="Vyhledat film..." 
    />
  );
};

export default SearchInput;