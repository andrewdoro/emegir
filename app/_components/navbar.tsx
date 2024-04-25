import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className='flex justify-between py-6 items-center w-full gap-4'>
      <ThemeToggle />

      {/* <Link href='https://vercel.com'>
        <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={24} priority />
      </Link> */}
      <p className='font-main text-2xl font-bold'>
        𒅴𒂠
        <span className='text-primary/50 font-sans text-md'>(Emegir)</span>
      </p>
      <Link href='https://github.com/andrewdoro/emegir' className='flex items-center space-x-2'>
        <Button variant='ghost' size='icon'>
          <GithubIcon />
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
