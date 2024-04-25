import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CuneiformIcon from "@/components/ui/cuneiform-icon";
import { Terminal } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <Alert>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
      <div className='grid grid-cols-3 gap-4'>
        <Card className=''>
          <CardHeader>
            <CardTitle className='text-lg font-semibold tracking-wider'>
              Write your content using Novel, rich text editor and other tiptap extension
            </CardTitle>
            <CardDescription>
              Novel is a rich text editor that allows you to write your content in a simple and
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className=''>
          <CardHeader>
            <CardTitle className='text-lg font-semibold tracking-wider'>
              Write your content using Novel, rich text editor and other tiptap extension
            </CardTitle>
            <CardDescription>
              Novel is a rich text editor that allows you to write your content in a simple and
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className=''>
          <CardHeader>
            <CardTitle className='text-lg font-semibold tracking-wider'>
              Write your content using Novel, rich text editor and other tiptap extension
            </CardTitle>
            <CardDescription>
              Novel is a rich text editor that allows you to write your content in a simple and
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Hero;
