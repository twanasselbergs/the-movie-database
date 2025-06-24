import { API_KEY } from "@env";

export async function fetchTrendingMovies() {
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Error");
  {
    return res.json();
  }
}

export async function search(query: string) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error("Error");
  {
    return res.json();
  }
}
