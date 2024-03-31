import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-96 flex flex-col items-center justify-evenly p-20">
        <Link href="/main" className={"rounded-xl flex-none h-max relative relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"}>
          Atlab Challenge
        </Link>
      </div>
    </main>
  );
}
