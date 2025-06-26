import Header from "@/components/Header";
import MovieList from "@/components/MovieList";
import GenreList from "@/components/GenreList"; // Import

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 px-4 md:px-0">
        <aside className="hidden md:block">
          <GenreList />
        </aside>
        <main>
          <h1 className="text-3xl font-extrabold text-center my-8">
            Filmy
          </h1>
          <MovieList />
        </main>
      </div>
    </>
  );
};

export default HomePage;