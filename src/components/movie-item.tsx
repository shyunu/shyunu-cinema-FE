import type { MovieData } from "@/types";
import Link from "next/link";
import style from "./movie-item.module.css";
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
      <img src={posterImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>{/* {author} | {publisher} */}</div>
      </div>
    </Link>
  );
}
