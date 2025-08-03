"use client";

import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";
import Button from "@mui/material/Button";
import { useActionState, useEffect, useState } from "react";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);
  const [content, setContent] = useState("");
  const maxLength = 500;

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input name="movieId" value={movieId} hidden readOnly />
        <div className={style.name}>
          <div>작성자</div>
          <input disabled={isPending} required name="author" placeholder="작성자" />
        </div>
        <div className={style.content}>
          <div>리뷰 내용</div>
          <textarea
            disabled={isPending}
            required
            name="content"
            placeholder="영화에 대한 솔직한 감상을 들려주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={maxLength}
          />
          <div>
            {content.length}/{maxLength}자
          </div>
        </div>
        <div className={style.submit_container}>
          <Button disabled={isPending} type="submit">
            {isPending ? "..." : "등록하기"}
          </Button>
        </div>
      </form>
    </section>
  );
}
