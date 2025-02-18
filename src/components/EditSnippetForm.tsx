"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  // ab kyuki we uses use client directive so it becomes a client side component
  // so yha pe "use server" ni kr skte
  //1st method .toh kisi aur component me server side likna pdega and usko import
  //2nd method. ek server action create kro and us server action ko as a prop pass krdo client comp ko

  return (
    <div className="flex flex-col gap-4">
      <form action="" className="flex items-center justify-between">
        <h1>Your Code Editor : </h1>
        <Button type="submit">Save</Button>
      </form>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
      />
    </div>
  );
};

export default EditSnippetForm;
