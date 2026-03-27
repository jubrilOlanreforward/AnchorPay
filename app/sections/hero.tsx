import Image from "next/image";
// components--
import { Button } from "@/components/ui/button";
// icons--
import PlayIcon from "../../public/icons/play.svg";
import AppelIcon from "../../public/icons/apple_icon.svg";
import CardIcon from "../../public/icons/ion_card-outline.svg";

// images--
import HeroImage from "../../public/images/hero-img1.png";

export const Hero = () => {
  return (
    <section className='w-full relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-6  mt-12 '>
      {/* Background Glow */}
      <div className='overflow-hidden'>
        <div className='absolute left-[20%] w-[800px] h-[800px] bg-primary/40 z-1 blur-3xl rounded-full opacity-40 mt-40'></div>
        <div className='max-w-7xl w-full mt-10  md:mt-4 grid md:grid-cols-2 gap-10 items-center relative z-3'>
          {/* LEFT CONTENT */}
          <div className='flex flex-col items-center md:items-start text-center ml-0 md:text-left  gap-14 md:ml-10 animate__animated animate__fadeInLeft'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-montserrat'>
              Quick loan at a <br /> competitive rate
            </h1>

            <p className='text-gray-600 max-w-md'>
              Booster connects you with a diverse network of lenders, ensuring competitive rates and
              flexible terms.
            </p>

            <div className='flex flex-wrap items-center justify-center bg-gradient-to-r from-button-primary/10 to-button-primary/5 p-2 rounded-lg w-fit animate_animated animate__zoomIn'>
              <p className='py-3 px-3 text-sm font-semibold text-gray-900'>Download App</p>
              <div className='button_wrapper py-2'>
                <Button className='py-6 px-3 mx-2 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-700 transition cursor-pointer ml-4'>
                  <Image src={AppelIcon} alt='apple icon' width={18} className='mr-1' /> On iPhone
                </Button>

                <Button className='py-6 px-3 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-600 transition cursor-pointer'>
                  <Image src={PlayIcon} alt='play store icon' width={14} className='mr-1' /> On
                  Android
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className='relative flex justify-center items-center animate__animated animate__zoomIn transition-all pb-5'>
            {/* <div className='absolute bottom-10 -left-28 z-4'>
            <div className='flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer'>
              <div className='w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full'>
                <Image src={CardIcon} alt='card icon' width={16} />
              </div>
              <p className='font-semibold text-gray-800 text-sm  text-left text-primary'>
                Apply for a loan <br />
                <span className='text-xs font-small text-gray-400'>
                  Get credits for your business
                </span>
              </p>
            </div>
          </div> */}

            {/* Phone 2 */}
            <div className='relative w-[350px] md:w-[650px] mt-10'>
              <Image src={HeroImage} alt='phone' className='top-10 z-2' />
            </div>

            {/* Floating Badge */}
            <div className='absolute top-6 left-[30%] bg-white px-4 py-3 rounded-full shadow text-sm font-medium z-10'>
              Select your preferred provider
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
