export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  }
  
  export interface FetchMoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }


  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface MovieDetail extends Movie {
    overview: string;
    genres: Genre[];
    runtime: number;
    release_date: string;
  }