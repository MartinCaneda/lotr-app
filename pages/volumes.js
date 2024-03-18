import { introduction } from "@/resources/lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/the-fellowship-of-the-ring">
            The Fellowship of The Ring
          </Link>
        </li>
        <li>
          <Link href="the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="the-return-of-the-king">The Return of the King</Link>
        </li>
      </ul>
    </>
  );
}
