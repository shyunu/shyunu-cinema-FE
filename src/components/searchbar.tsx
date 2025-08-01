"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./serachbar.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
      <TextField
        id="standard-basic"
        variant="standard"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        className={style.textField}
      />
      <Button variant="contained" onClick={onSubmit}>
        검 색
      </Button>
    </div>
  );
}
