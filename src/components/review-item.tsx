import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDeleteButton from "./review-item-delete-button";
import { formatDateTime } from "@/\butils/formatDateTime";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.profile_img}>
        <div>{author.charAt(0)}</div>
      </div>
      <div className={style.info}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>
          {formatDateTime(new Date(createdAt).toLocaleString())}
        </div>
        <div className={style.content}>{content}</div>
        <div className={style.bottom_container}></div>
      </div>
      <div className={style.delete_btn}>
        <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
      </div>
    </div>
  );
}
