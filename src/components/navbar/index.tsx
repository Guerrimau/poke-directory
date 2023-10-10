import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-start bg-zinc-900 px-6 py-4 ">
      <Link className="mr-auto text-xl" href="/">
        <p>
          <span className="text-2xl font-bold">P</span>okemon
        </p>
      </Link>
      <Link href="/favorites">
        Favorites
      </Link>
    </div>
  );
};

export default Navbar;
