import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const book = volumes.find((volume) => volume.slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <h2>Books in the Volume</h2>
      <ul>
        <li>
          {book.books[0].ordinal}, {book.books[0].title}
        </li>
        <li>
          {book.books[1].ordinal}, {book.books[1].title}
        </li>
        <h2>Details</h2>
        <Image src={book.cover} height={230} width={140} alt="The Two Towers" />
        <h2>
          <button>
            <Link href="/the-fellowship-of-the-ring">Previous</Link>
          </button>
          <button>
            <Link href="/the-return-of-the-king">Next</Link>
          </button>
        </h2>
      </ul>
    </>
  );
}
