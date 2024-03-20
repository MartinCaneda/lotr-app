import { useRouter } from "next/router";
import { volumes } from "../resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import BookFunction from "./bookfunction";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const book = volumes.find((book) => slug === book.slug);

  return (
    <>
      <BookFunction book={book} />
    </>
  );
}
