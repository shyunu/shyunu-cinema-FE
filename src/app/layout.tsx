import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { MovieData } from "@/types";

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`, { cache: "force-cache" });
  if (!response.ok) {
    return <div>제작 @shyunu</div>;
  }
  const movies: MovieData[] = await response.json();
  const movieCount = movies.length;
  return (
    <footer>
      <div>제작 @shyunu</div>
      <div>{movieCount}개의 영화가 등록되어 있습니다.</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>🎬 shyunu&apos;s Cinema</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
