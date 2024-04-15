import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div className='sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between'>
      <Link href='https://vercel.com'>
        <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={24} priority />
      </Link>
      <Link
        href='https://github.com/vercel/examples/tree/main/storage/postgres-drizzle'
        className='flex items-center space-x-2'>
        <Image src='/github.svg' alt='GitHub Logo' width={24} height={24} priority />
        <p className='font-light'>Source</p>
      </Link>
    </div>
  );
};

export default FooterLinks;
