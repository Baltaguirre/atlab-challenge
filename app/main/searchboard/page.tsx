import { Card } from "../../ui/card";
import Search from "../../ui/search";
import Link from "next/link";

export default async function SearchBoard({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <div className="flex h-screen w-screen flex-auto flex-col items-center px-5 py-5">
       <h1 className="text-xl">Search github users!</h1>  
      <div className="object-top mx h-200 w-200 px-5 py-8 ">
        {" "}
        <Search placeholder="Enter github username..." />
      </div>{" "}
      <div className="w-full  md:w-auto">
        {" "}
        {query.length > 0 ? (
        <Link
          href={{ pathname: "/userRepos", query: { value: query } }}
          className={"mt-3.5 rounded-xl flex-none h-max "}
        >
          <Card value={{ query: query }}></Card>
        </Link>
      ) : null}
      </div>
    </div>
  );
}
