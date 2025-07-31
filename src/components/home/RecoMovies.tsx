import { MovieData } from "@/types";
import { delay } from "@/util/delay";
import MovieItem from "../movie-item";

export default async function RecoMovies() {
  await delay(3000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`, {
    next: { revalidate: 3 },
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const recoMovies: MovieData[] = await response.json();

  return (
    <div>
      {recoMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
