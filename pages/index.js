import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>
        <Link href="/volumes">Volume Overview</Link>
      </h1>
    </div>
  );
}
