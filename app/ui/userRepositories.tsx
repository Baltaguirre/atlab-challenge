import { fetchUserGithubProfileRepos } from "../lib/data";
import { Suspense } from "react";
import { TableRowSkeleton } from "../skeletons";
import { notFound } from "next/navigation";

export async function UserView(searchParams: any) {
  const { value } = searchParams.searchParams;

  const userRepos = await fetchUserGithubProfileRepos({ query: value });

  if (userRepos?.length === 0) {
    notFound();
  }
  return (
    <div className="flex rounded-xl border-2 border-black  bg-gray-200 flex-col items-center shadow-sm ">
      <div className="flex p-4">
        <h1>{`${value}'s repos`}</h1>
      </div>
      <div className="h-full flex max-h-screen overflow-y-auto flex-col flex-grow bg-white-50 px-5 py-5">
        {" "}
        <Suspense key={userRepos} fallback={<TableRowSkeleton />}>
          <ul className="p-5  list-disc">
            {" "}
            {userRepos?.map((repo: any) => {
              return (
                <a
                  href={`https://github.com/${repo.full_name}`}
                  target="blank"
                  className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {" "}
                  <li key={repo.id}>{repo?.name}</li>
                </a>
              );
            })}
          </ul>
        </Suspense>
      </div>
    </div>
  );
}
