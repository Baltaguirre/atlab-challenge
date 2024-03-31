import Link from "next/link";

export default async function Main() {
  return (
    <div className="flex h-screen w-screen flex-auto flex-col items-center px-5 py-32">
      <Link href="/main/searchboard">
        <h1 className="text-xl relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Search github users!
        </h1>{" "}
      </Link>
    </div>
  );
}
