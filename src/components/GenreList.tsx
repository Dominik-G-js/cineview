import { useGenres } from "@/services/useGenres";
import useMovieQueryStore from "@/store/useMovieQueryStore";
import { Button } from "./ui/button";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useMovieQueryStore(s => s.movieQuery.genreId);
  const setGenreId = useMovieQueryStore(s => s.setGenreId);

  if (error) return <p className="text-destructive">Chyba načítání žánrů.</p>;
  if (isLoading) return <p>Načítání...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Žánry</h2>
      <ul>
        {data?.genres.map(genre => (
          <li key={genre.id} className="mb-2">
            <Button
              variant={genre.id === selectedGenreId ? "secondary" : "ghost"}
              onClick={() => setGenreId(genre.id)}
              className="w-full justify-start font-semibold"
            >
              {genre.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;