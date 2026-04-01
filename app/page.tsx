import Image from "next/image";
import Hero from "../components/homepage/Hero";
import Business_needs from "../components/homepage/BusinessNeeds";
import ProductOffering from "../components/homepage/ProductOffering";
import Testimonial from "../components/homepage/Testimonial";
import Nav from "../components/homepage/Nav";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Experience from "@/components/homepage/Experience";
import Footer from "@/components/homepage/Footer";
export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex flex-1 w-full flex-col'>
        <Nav />
        <Hero />
        <Business_needs />
        <ProductOffering />
        <Testimonial />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
