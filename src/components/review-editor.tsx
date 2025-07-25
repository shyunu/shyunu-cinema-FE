import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";
import Button from "@mui/material/Button";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        <input name="movieId" value={movieId} hidden readOnly />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <Button type="submit">작성하기</Button>
        </div>
      </form>
    </section>
  );
}
