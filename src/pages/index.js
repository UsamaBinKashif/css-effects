import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1 className=" text-[50px] lg:text-[100px] font-bold tracking-[2px]">PAPU EFFECTS.</h1>
    </main>
  );
}
