"use client";
import React, { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { prisma } from "@/lib/prisma";
// import { redirect } from "next/navigation";
import * as actions from "@/actions";

const CreateSnippetPage = () => {
  const [formStateData, action] = useActionState(actions.createSnippet, {
    message: "",
  });

  //server action 2 things return kr rha h 1st)data returned by server actions
  //2nd) action - yeh hamara updated action hai kuch bhi naam rkh skte hai
  return (
    <form action={action}>
      <div>
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {formStateData.message && (
        <div className="p-2 m-2 bg-red-300 border-2 border-red-600">
          {formStateData.message}
        </div>
      )}
      <Button type="submit" className="my-5">
        New
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
