import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CuneiformIcon from "@/components/ui/cuneiform-icon";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full gap-4 p-4'>
      <ThemeToggle />

      {/* <Link href='https://vercel.com'>
        <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={24} priority />
      </Link> */}
      <Link href='https://github.com/andrewdoro/emegir' className='flex items-center space-x-2'>
        <Button variant='ghost' size='icon'>
          <Image src='/github.svg' alt='GitHub Logo' width={24} height={24} priority />
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
