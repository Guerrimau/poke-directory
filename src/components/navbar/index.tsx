"use client";

import { Spacer, colors } from "@nextui-org/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-start bg-zinc-900 px-4 py-1 ">
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="ditto"
        width={70}
        height={70}
      />
      <p className="text-xl">
        <span className="text-2xl">P</span>okemon
      </p>
      <Spacer className="flex-1" />
      <p>Favoritos</p>
    </div>
  );
};

export default Navbar;
