"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

// this is basically our server action

export const saveSnippet = async(id:number, code: string ) =>{
  await prisma.snippet.update({
    where:{
      id
    },data:{
      code
    }
  })

  redirect(`/snippet/${id}`)
}

export const deleteSnippet = async(id:number)=>{
  await prisma.snippet.delete({
    where:{
      id,
    }
  });
  redirect('/')
}

export async function createSnippet(prevState: {message:string},formData: FormData) {
  const title = formData.get("title");
  const code = formData.get("code");

  if(typeof title !== "string" || title.length< 4){
    return{message:"Title is required and must be longer"};
  }
  if(typeof code !== "string" || code.length< 4){
    return {message:"Code is required and must be longer"};
  }

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