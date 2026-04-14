import Image from "next/image";
// components--
import { Button } from "@/components/ui/button";
import { HERO_PHONE_SIZE, BUTTON_ICON_WIDTHS } from "@/components/homepage/layoutConstants";
// assets--
import { ICONS, IMAGES } from "@/components/homepage/imageAssets";

export const Hero = () => {
  return (
    <section className='w-full relative min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-6  mt-12 overflow-hidden'>
      {/* Background Glow */}
      <div className='overflow-hidden max-w-full w-full '>
        <div className='absolute left-[20%] w-full h-full bg-primary/40 z-1 blur-3xl rounded-full opacity-40 mt-40'></div>
        <div className='max-w-7xl mx-auto w-full mt-10  md:mt-4 grid md:grid-cols-2 gap-10 items-center relative z-3'>
          {/* LEFT CONTENT */}
          <div className='flex flex-col items-start  ml-0 text-left  gap-[34px] md:ml-10 animate__animated animate__zoomIn'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-montserrat'>
              Quick loan at a <br /> competitive rate
            </h1>

            <p className='text-gray-600 max-w-md text-lg md:text-2xl max-w-[500px]'>
              Booster connects you with a diverse network of lenders, ensuring competitive rates and
              flexible terms.
            </p>

            <div className='hidden md:flex flex-wrap items-center justify-center bg-gradient-to-r from-button-primary/10 to-button-primary/5 p-2 rounded-lg w-fit animate_animated animate__zoomIn'>
              <p className='py-3 px-3 text-base font-semibold text-gray-900'>Download App</p>
              <div className='button_wrapper py-2'>
                <Button className='py-6 px-3 mx-2 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-700 transition cursor-pointer ml-4'>
                  <Image
                    src={ICONS.AppelIcon}
                    alt='apple icon'
                    width={BUTTON_ICON_WIDTHS.apple}
                    className='mr-1'
                  />{" "}
                  On iPhone
                </Button>

                <Button className='py-6 px-3 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-600 transition cursor-pointer'>
                  <Image
                    src={ICONS.PlayIcon}
                    alt='play store icon'
                    width={BUTTON_ICON_WIDTHS.play}
                    className='mr-1'
                  />{" "}
                  On Android
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className='relative flex justify-center items-center  transition-all pb-5'>
            <div
              className='absolute bottom-3 md:bottom-18 left-0 md:-left-21 z-4 animate__animated animate__fadeInLeft'
              style={{ animationDelay: ".2s" }}
            >
              <div className='flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-md hover:shadow-lg transition cursor-pointer'>
                <div className='w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full'>
                  <Image src={ICONS.CardIcon} alt='card icon' width={BUTTON_ICON_WIDTHS.card} />
                </div>
                <div className='flex flex-col'>
                  {" "}
                  <p className='font-semibold text-gray-800 text-sm  text-left text-primary'>
                    Apply for a loan
                  </p>
                  <small className='text-xs font-small text-gray-400 pr-2'>
                    Get credits for your business
                  </small>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div
              className='relative w-full mt-10 flex items-center justify-center animate__animated animate__zoomIn'
              style={{ animationDelay: ".1s", animationTimeline: "auto" }}
            >
              <Image
                src={IMAGES.HeroImage}
                alt='phone'
                className={`top-10 z-2 ${HERO_PHONE_SIZE}`}
              />
            </div>

            {/* Floating Badge */}
            <div
              className='absolute top-6 left-[30%] bg-white px-4 py-3 rounded-full shadow text-sm font-medium z-10 animate__animated animate__fadeInRight'
              style={{ animationDelay: ".3s" }}
            >
              Select your preferred provider
            </div>
          </div>
          <div className='md:hidden flex flex-wrap items-center justify-center bg-gradient-to-r from-button-primary/10 to-button-primary/5 p-2 rounded-lg w-fit animate_animated animate__zoomIn mb-4'>
            <p className='py-3 px-3 text-sm font-semibold text-gray-900'>Download App</p>
            <div className='button_wrapper py-2'>
              <Button className='py-6 px-3 mx-2 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-700 transition cursor-pointer ml-4'>
                <Image
                  src={ICONS.AppelIcon}
                  alt='apple icon'
                  width={BUTTON_ICON_WIDTHS.apple}
                  className='mr-1'
                />{" "}
                On iPhone
              </Button>

              <Button className='py-6 px-3 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-600 transition cursor-pointer'>
                <Image
                  src={ICONS.PlayIcon}
                  alt='play store icon'
                  width={BUTTON_ICON_WIDTHS.play}
                  className='mr-1'
                />{" "}
                On Android
              </Button>
            </div>
          </div>
        </div>
        {/* Bottom trust strip */}
        <div className='relative w-full mt-8 flex flex-col gap-3 items-center justify-center py-4 px-4 md:px-8 z-8'>
          <div className='flex flex-col md:flex-row gap-4 items-center justify-center text-sm text-gray-600 font-medium'>
            <div className='flex items-center gap-2 px-10 py-4 rounded-full bg-white border border-gray-200'>
              <p className='text-base whitespace-nowrap'>Powered by Union Bank of Nigeria</p>
              <span className='inline-block h-6 w-6 rounded-full text-blue-600 font-bold flex items-center justify-center'>
                <Image src={IMAGES.UnionBankLogo} alt='union bank logo' width={24} height={24} />
              </span>
            </div>

            <div className='flex items-center gap-2 px-10 py-4 rounded-full bg-white border border-gray-200'>
              <p className='text-base whitespace-nowrap'>Licensed by the Central Bank of Nigeria</p>
              <span className='inline-block h-6 w-6 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center'>
                <Image
                  src={IMAGES.CentralBankLogo}
                  alt='central bank logo'
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
