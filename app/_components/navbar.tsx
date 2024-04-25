import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import ProgressiveBlur from "./progressive-blur";

const Navbar = () => {
  return (
    <div className='flex justify-between py-6 items-center w-full gap-4'>
      <ThemeToggle />

      <div className='relative'>
        <p className='relative font-main text-2xl font-bold'>
          𒅴𒂠
          <span className='font-sans tracking-tighter  text-3xl'>Emegir</span>
        </p>
      </div>
      <Link href='https://github.com/andrewdoro/emegir' className='flex items-center space-x-2'>
        <Button variant='ghost' size='icon'>
          <GithubIcon />
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
