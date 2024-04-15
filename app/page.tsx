import { Suspense } from "react";
import FooterLinks from "./_components/footer-links";
import Editor from "@/components/ui/editor";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='h-[50vh] w-full p-4 border rounded-xl'>
        <Editor />
      </div>
      <FooterLinks />
    </div>
  );
}
