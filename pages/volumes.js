import { introduction, volumes } from "@/resources/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const { slug } = router.query;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((book) => (
          <li key={volumes.slug}>
            <Link href={`/${book.slug}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const randomBook = getRandomElement(volumes);
          router.push(`/${randomBook.slug}`);
        }}
      >
        Random Book
      </button>
    </>
  );
}
