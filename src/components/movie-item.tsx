import type { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css";
import Image from "next/image";

export default function MovieItem({
  id,
  title,
  subTitle,
  description,
  releaseDate,
  company,
  genres,
  runtime,
  posterImgUrl,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <Image
        src={posterImgUrl}
        width={80}
        height={105}
        alt={`영화 ${title}의 표지 이미지`}
      />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.info}>
          {genres} | {releaseDate} 개봉 | {runtime}분
        </div>
      </div>
    </Link>
  );
}
