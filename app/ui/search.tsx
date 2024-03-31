"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const [query, setQuery] = useState("" as string);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div>
      {" "}
      <div className="relative flex flex-shrink-0">
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[5px] pl-10 pr-8 text-xs outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if ("Enter" === e.code) {
              handleSearch(query);
            }
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[12px] w-[12px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <div className="flex flex-col h-16 w-20  ml-20 pr-2 ">
        {" "}
        <button
          onClick={() => {
            if (query.length > 0) handleSearch(query);
          }}
          className="h-8 w-full justify-start text-lg relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          search
        </button>
      </div>
    </div>
  );
}
