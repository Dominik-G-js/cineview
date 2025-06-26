import { useParams } from "react-router-dom";
import { useMovieDetail } from "@/services/useMovieDetail";
import ReviewForm from "@/components/ReviewForm";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;
 

  const { data: movie, isLoading, error } = useMovieDetail(id);

  if (isLoading) return <p className="text-center p-10">Načítám detaily...</p>;
  if (error) return <p className="text-center p-10 text-destructive">{(error as Error).message}</p>;
  if (!movie) return null;

  const imageUrl = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img src={imageUrl} alt={movie.title} className="rounded-lg shadow-xl w-full" />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold mb-3">{movie.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">{movie.release_date.substring(0, 4)} · {movie.runtime} min</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map(genre => (
              <span key={genre.id} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-xl mb-2 font-semibold">Přehled</p>
          <p className="text-muted-foreground leading-relaxed">{movie.overview}</p>
        </div>
        <ReviewForm />
      </div>
    </div>
  );
};

export default MovieDetailPage;