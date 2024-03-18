import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function ReturnKing() {
  const book = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );
  return (
    <>
      <Link href="/volumes">All volumes</Link>
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
        <Image
          src={book.cover}
          height={230}
          width={140}
          alt="The Return of the King"
        />
        <h2>
          <button>
            <Link href="/the-two-towers">Previous</Link>
          </button>
        </h2>
      </ul>
    </>
  );
}
