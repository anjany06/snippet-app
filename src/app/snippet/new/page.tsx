import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server"; // use server directive
    const title = formData.get("title") as string; // typeAssertion kiya h kyuki ts h toh yeh keh rha h ki yeh null bhi ho skta hai but hme sure kiya ki isme 100 per data string hi ayega
    const code = formData.get("code") as string;

    // ab hme data ko db me save krna hai / ya migrate krna h
    // toh ek cmd use krenge npx prisma migrate dev --name added snippet model

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("created snippet: ", snippet);

    redirect("/"); //yeh ssr comp hai
  }
  return (
    <form action={createSnippet}>
      <div>
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      <Button type="submit" className="my-5">
        New
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
