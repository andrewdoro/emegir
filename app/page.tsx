"use client";
import CuneiformIcon from "@/components/ui/cuneiform-icon";
import Editor from "@/components/ui/editor";
import { JSONContent } from "novel";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<JSONContent | null>(null);
  return (
    <div className='flex flex-col gap-12 p-8 w-full'>
      <div className='flex max-w-xl mx-auto flex-col gap-2 items-center'>
        <CuneiformIcon className='w-32 h-32' />
        <p className='text-5xl font-main font-semibold tracking-tight'>Emegir</p>
      </div>
      <div className='grid grid-cols-4 w-full gap-8 max-w-7xl mx-auto'>
        <Editor
          defaultContent={content}
          onContentChange={(val) => setContent(val)}
          className='min-h-[50vh] col-span-3 p-8 border rounded-xl'
        />
        <div>
          <pre className='whitespace-pre-line'>{JSON.stringify(content)}</pre>
        </div>
        <div className='w-full h-full bg-gray-100' />
      </div>
    </div>
  );
}
