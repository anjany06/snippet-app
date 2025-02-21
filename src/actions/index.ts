"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

//on-demand caching
import { revalidatePath } from "next/cache";


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
  revalidatePath("/");
  redirect('/')
}

export async function createSnippet(prevState: {message:string},formData: FormData) {

  // using error.tsx and try catch for error handling
  //and sath hi hme try catch use krnaa pdega thbi usi ui k bagl me ayega wrna ek new page me error.message ayega
  try {
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
  
    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    // throw new Error("Something went wrong")
    revalidatePath("/");
  } catch (error:unknown) {
    if ( error instanceof Error){
      return {message:error.message }
    }
    else{
      return {message:"Some interna server error" }
    }
  }
 

  redirect("/"); //yeh ssr comp hai
}