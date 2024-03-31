import { UserView } from "../ui/userRepositories";

export default function User({ searchParams }: { searchParams: any }) {
  return (
    <main className="flex h-screen w-screen flex-col items-center px-9 py-9">
      {" "}
      <UserView searchParams={searchParams} />
    </main>
  );
}
