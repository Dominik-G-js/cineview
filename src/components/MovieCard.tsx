import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Movie } from "@/types/Movie";
import { Link } from 'react-router-dom';


interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="overflow-hidden h-full hover:scale-105 hover:shadow-lg transition-transform duration-200">
        {/* Zbytek kódu zůstává stejný */}
        <CardHeader className="p-0">
          <img src={imageUrl} alt={movie.title} className="w-full h-auto object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg truncate">{movie.title}</CardTitle>
        </CardContent>
        <CardFooter className="p-4 pt-0">
        <p>Hodnocení: {movie.vote_average?.toFixed(1) ?? 'N/A'} / 10</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default MovieCard;