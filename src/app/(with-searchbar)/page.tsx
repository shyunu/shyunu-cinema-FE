import style from "./page.module.css";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton";
import { Metadata } from "next";
import AllMovies from "@/components/home/AllMovies";
import RecoMovies from "@/components/home/RecoMovies";
import { RiMovieLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { LuThumbsUp } from "react-icons/lu";

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
        <h3>추천 영화</h3>
        <Suspense fallback={<MovieListSkeleton count={3} />}>
          <RecoMovies />
        </Suspense>
      </section>
      <section>
        <h3>모든 영화</h3>
        <Suspense fallback={<MovieListSkeleton count={10} />}>
          <AllMovies />
        </Suspense>
      </section>
      <section>
        <div className={style.text}>
          <h3>shyunu&apos;s cinema 특징</h3>
          <h5>영화 애호가들을 위한 완벽한 플랫폼</h5>
        </div>
        <div className={style.feat_wrap}>
          <div className={style.feat_box}>
            <div className={`${style.icon} ${style.iconBlue}`}>
              <RiMovieLine />
            </div>
            <h4>다양한 영화</h4>
            <h5>최신 블록버스터부터 독립 영화까지 다양한 장르의 영화를 만나보세요.</h5>
          </div>
          <div className={style.feat_box}>
            <div className={`${style.icon} ${style.iconGreen}`}>
              <FaRegStar />
            </div>
            <h4>리뷰 공유</h4>
            <h5>다른 사용자들과 영화 리뷰를 공유하고 소통할 수 있습니다.</h5>
          </div>
          <div className={style.feat_box}>
            <div className={`${style.icon} ${style.iconPurple}`}>
              <LuThumbsUp />
            </div>
            <h4>맞춤 추천</h4>
            <h5>취향에 맞는 영화를 추천받고 새로운 작품을 발견해보세요.</h5>
          </div>
        </div>
      </section>
    </div>
  );
}
