import Link from "next/link";
import Image from "next/image";

export default function BookFunction({ book }) {
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <h2>Books in the Volume</h2>
      <ul>
        {book.books.map((book) => (
          <li key={book.title}>
            {book.ordinal}, {book.title}
          </li>
        ))}
        <h2>Details</h2>
        <Image src={book.cover} height={230} width={140} alt={book.title} />
      </ul>
    </>
  );
}
