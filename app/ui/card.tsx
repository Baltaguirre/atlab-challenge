import Image from "next/image";
import { lusitana } from "../fonts";
import { fetchUserGithubProfile } from "../lib/data";
import { fetchUserGithubProfileParams} from "../lib/types";
import avatarDefault from "../../public/avatarDefault.jpg";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CardSkeleton2 } from "../skeletons";

export async function Card({ value }: { value: fetchUserGithubProfileParams }) {
  
  const query = value?.query || "";
  const userProfile = await fetchUserGithubProfile({ query: query });
  if (userProfile?.message != undefined && userProfile?.message?.length > 0) {
    notFound();
  }
  return (
    <Suspense key={query} fallback={<CardSkeleton2 />}>
      {" "}
      <div className="flex rounded-xl bg-gray-200 shadow-sm flex-col align-center justify-between  pr-6 py-4 transform h-max bg-gray-200   w-full transition duration-700 hover:scale-125 hover:bg-gray-400 ">
        <div className="object-top w-full flex p-4 flex-row justify-between">
          <div className="h-20 w-full ml-3 flex flex-col align-center justify-evenly">
            {" "}
            <h3 className="h-8 w-full text-md">Name: {userProfile?.name}</h3>
            <h3 className="h-8 w-full text-md">
              Username: {userProfile?.login}
            </h3>
          </div>

          <Image
            src={userProfile?.avatar_url ?? avatarDefault}
            className="h-28 w-28 rounded-lg shadow-lg border-2 border-black"
            alt="Avatar"
            width={100}
            height={100}
          />
        </div>
        <p
          className="ml-7 text-md 
            "
        >
          User Bio:{" "}
        </p>
        <div className="h-4/5 w-full ml-3 mt-2 rounded-xl bg-white   py-8 text-left">
          {" "}
          <p
            className={`${lusitana.className} text-md h-28 w-96 mx-4 text-gray-800 
            `}
          >
            {userProfile?.bio ?? "No bio available..."}
          </p>
        </div>
      </div>
    </Suspense>
  );
}
