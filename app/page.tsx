"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Editor from "@/components/ui/editor";
import { JSONContent } from "novel";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Globe } from "lucide-react";
import { publishPage } from "./actions";
import { Input } from "@/components/ui/input";
import { demo } from "./content";

const formSchema = z.object({
  content: z.custom<JSONContent>(),
});
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: demo.content,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    publishPage({ title: "My Page", content: values.content });
    console.log(values);
  }

  const content = form.watch("content");
  console.log(content);
  return (
    <div className='flex gap-12 w-full'>
      <Form {...form}>
        <Card>
          <CardContent className='p-8'>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Editor
                        defaultContent={field.value}
                        onContentChange={field.onChange}
                        className='min-h-[50vh] '
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </CardContent>
        </Card>
        <Card className='h-fit sticky top-8'>
          <CardHeader>
            <CardTitle>Pubish to world</CardTitle>
            <CardDescription>
              We are only saving json. Once you create a note you can edit it. I could make this
              work but...(i..)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col gap-4'>
              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <pre className='overflow-hidden p-6 border rounded-lg w-96 h-48'>
                {JSON.stringify(content, null, 2)}
              </pre>
            </div>
          </CardContent>
          <CardFooter className='justify-between'>
            <Button>Preview</Button>
            <Button onClick={() => console.log("Button clicked")}>
              <Globe className='h-4 w-4' />
              Button
            </Button>
          </CardFooter>
        </Card>
      </Form>
    </div>
  );
}
