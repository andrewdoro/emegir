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
import Hero from "./_components/hero";

const formSchema = z.object({
  content: z.custom<JSONContent>(),
  slug: z.string().min(3),
});
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: demo,
      slug: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const id = await publishPage({ title: "My Page", slug: values.slug, content: values.content });
  };

  const content = form.watch("content");
  return (
    <div className='flex flex-col gap-4'>
      <Hero />
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <Form {...form}>
          <Card>
            <CardContent className='p-8'>
              <form id='page' onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
                <FormField
                  control={form.control}
                  name='content'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Editor
                          defaultContent={field.value}
                          onContentChange={field.onChange}
                          className='min-h-[50vh]'
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
                  name='slug'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Will use this to generate your page</FormDescription>

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
              <Button type='submit' form='page'>
                <Globe />
                Publish
              </Button>
            </CardFooter>
          </Card>
        </Form>
      </div>
    </div>
  );
}
