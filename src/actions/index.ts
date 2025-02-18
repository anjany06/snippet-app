"use server"

import { prisma } from "@/lib/prisma"

// this is basically our server action

export const saveSnippet = async(id:number, code: string ) =>{
  await prisma.snippet.update({
    where:{
      id
    },data:{
      code
    }
  })
}