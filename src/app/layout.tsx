import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { MovieData } from "@/types";
import { ReactNode } from "react";

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    return <div>제작 @shyunu</div>;
  }
  const movies: MovieData[] = await response.json();
  const movieCount = movies.length;
  return (
    <footer>
      <div>{movieCount}개의 영화가 등록되어 있습니다</div>
      <div>제작 @shyunu</div>
    </footer>
  );
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🎬 shyunu&apos;s cinema</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
