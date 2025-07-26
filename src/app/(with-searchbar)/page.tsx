import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import MovieItemSkeleton from "@/components/skeleton/movie-item-skeleton";
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton";
import { Metadata } from "next";

async function AllMovies() {
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

async function RecoMovies() {
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

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "shyunu's cinema",
  description: "shyunu's cinema에 등록된 모든 영화를 만나보세요!",
  openGraph: {
    title: "shyunu's cinema",
    description: "shyunu's cinema에 등록된 모든 영화를 만나보세요!",
    images: ["/thumbnail.png"],
  },
};

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 영화</h3>
        <Suspense fallback={<MovieListSkeleton count={3} />}>
          <RecoMovies />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <Suspense fallback={<MovieListSkeleton count={10} />}>
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
}
