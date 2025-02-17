import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { log } from "console";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between p-2">
        <h1>Snippets</h1>
        <Link href={"/snippet/new"}>
          <Button>New</Button>
        </Link>
      </div>
      {snippets.map((snippet) => (
        <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
          <h1>{snippet.title}</h1>
          <Link href={`snippet/${snippet.id}`}>
            <Button variant={'link'}>View</Button>
          </Link>
        </div>
        // one imp thing about map jb bhi use krenge Link ko usko ek parent element ne wrap krna h (div me kr rkha hai yha)..
      ))}
    </div>
  );
}
