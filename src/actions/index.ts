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