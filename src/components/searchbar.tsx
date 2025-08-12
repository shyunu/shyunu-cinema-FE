"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./serachbar.module.css";
import { IoIosSearch } from "react-icons/io";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <input
        id="standard-basic"
        placeholder="영화 제목, 감독, 장르로 검색해보세요 ..."
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        className={style.textField}
      />
      <IoIosSearch className={style.searchBtn} onClick={onSubmit} />
    </div>
  );
}
