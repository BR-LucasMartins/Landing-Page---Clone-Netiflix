const API_KEY = "f4a3150543f834c79b6697565d9a6e7b";

const categories = [
    {
      name: "trending",
      title: "Em alta",
      path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR&_limit=50`,
      isLarge: true,
    },
    {
      name: "netflixOriginals",
      title: "Originais Netflix",
      path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      isLarge: false,
    },
    {
      name: "topRated",
      title: "Populares",
      path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
      isLarge: false,
    },
    {
      name: "series",
      title: "Séries",
      path: `/discover/tv?api_key=${API_KEY}`,
      isLarge: false,
    },
    {
      name: "action",
      title: "Ação",
      path: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      isLarge: false,
    },
    {
      name: "adventure",
      title: "Aventura",
      path: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
      isLarge: false,
    },
    {
      name: "comedy",
      title: "Comédias",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
      isLarge: false,
    },
    {
      name: "horror",
      title: "Terror",
      path: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      isLarge: false,
    },
    {
      name: "romances",
      title: "Romances",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
      isLarge: false,
    },
    {
      name: "documentaries",
      title: "Documentários",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
      isLarge: false,
    },
  ];


  export const getMovies = async(path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error)
    }
  }

export default categories;