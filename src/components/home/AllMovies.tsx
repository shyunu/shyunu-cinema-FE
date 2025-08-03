import { MovieData } from "@/types";
import { delay } from "@/utils/delay";
import MovieItem from "../movie-item";

export default async function AllMovies() {
  await delay(1500);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allMovies: MovieData[] = await response.json();

  return (
    <div>
      {allMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
