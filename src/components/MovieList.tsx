import { useMovies } from "@/services/useMovies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { data, error, isLoading } = useMovies();

  if (isLoading) return <p className="text-center p-10">Načítám filmy...</p>;
  if (error) return <p className="text-center p-10 text-destructive">{error.message}</p>;

  return (
    <div className="p-4 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;