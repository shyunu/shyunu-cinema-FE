import { notFound } from "next/navigation";
import style from "./page.module.css";
import { MovieData, ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";
import Image from "next/image";

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }
  const movie = await response.json();

  const {
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <section className={style.detail_container}>
      <div>
        홈 {">"} 영화 상세 {">"} {title}
      </div>
      <div>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${posterImgUrl}')` }}
        >
          <Image
            src={posterImgUrl}
            width={220}
            height={300}
            alt={`영화 ${title}의 표지 이미지`}
          />
        </div>
        <div className={style.info_container}>
          <div className={style.title}>{title}</div>
          <div className={style.date_genres}>
            {releaseDate} 개봉 • {genres}
          </div>
          <div className={style.subTitle}>{subTitle}</div>
          <div className={style.company_runtime}>
            <div>
              <div>제작사</div>
              <div>{company}</div>
            </div>
            <div>
              <div>러닝타임</div>
              <div>{runtime}분</div>
            </div>
          </div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
    </section>
  );
}

async function ReviewList({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`,
    {
      next: { tags: [`review-${movieId}`] },
    }
  );
  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }
  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id} `} {...review} />
      ))}
    </section>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${id}`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const movie: MovieData = await response.json();

  return {
    title: `${movie.title} - shyunu's cinema`,
    description: `${movie.description}`,
    openGraph: {
      title: `${movie.title} - shyunu's cinema`,
      description: `${movie.description}`,
      images: [movie.posterImgUrl],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className={style.container}>
      <MovieDetail movieId={id} />
      <ReviewEditor movieId={id} />
      <ReviewList movieId={id} />
    </div>
  );
}
