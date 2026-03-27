import Image from "next/image";
import Hero from "./sections/hero";
import Business_needs from "./sections/business_needs";
import ProductOffering from "./sections/ProductOffering";
import Testimonial from "./sections/testimonial";

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex flex-1 w-full flex-col'>
        <Hero />
        <Business_needs />
        <ProductOffering />
        <Testimonial />
      </main>
    </div>
  );
}
