import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  // console.log(process.env.MONGO_URL)
  return (
   <div className="bg-none">

     <Hero />
   </div>

  );
}
