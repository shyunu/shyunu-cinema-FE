import { notFound } from "next/navigation";
import style from "./page.module.css";
import { createReviewAction } from "@/actions/create-review.action";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`);
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }
  const movie = await response.json();

  const { title, subTitle, description, releaseDate, company, genres, runtime, posterImgUrl } = movie;

  return (
    <section>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${posterImgUrl}')` }}>
        <img src={posterImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {genres} | {runtime}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form action={createReviewAction}>
        <input name="movieId" value={movieId} hidden readOnly />
        <input required name="content" placeholder="리뷰 내용" />
        <input required name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className={style.container}>
      <MovieDetail movieId={id} />
      <ReviewEditor movieId={id} />
    </div>
  );
}
