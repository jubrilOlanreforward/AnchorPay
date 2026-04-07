import { Button } from "../ui/button";
import Image from "next/image";
import { ICONS, IMAGES } from "@/components/homepage/imageAssets";
import { CARD_FRAME_HEIGHT, BUTTON_ICON_WIDTHS } from "@/components/homepage/layoutConstants";
const Experience = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto  p-2 md:p-14  relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl gap-6 bg-[linear-gradient(135deg,rgba(31,122,234,0.9)_34%,rgba(138,184,241,0.7)_79%),url("/particle.png")] bg-blend-hard-light bg-cover bg-center pt-8 px-8'>
          <div className='flex flex-col items-start justify-center md:items-start ml-0 text-left px-2 gap-4 md:ml-10 animate__animated animate__zoomIn'>
            <p className='text-gray-100 max-w-md text-base'>Join the Booster Family</p>

            <h2 className='text-2xl md:text-4xl font-bold text-white leading-tight font-poppins'>
              Experiance Flexible & <br /> Competetive Lending
            </h2>

            <div className='flex flex-wrap items-center backdrop-blur-lg justify-center bg-linear-to-r from-white/40 to-white/10 p-2 rounded-lg w-fit animate_animated animate__zoomIn mt-2'>
              <p className='py-3 px-3 text-sm font-semibold text-primary'>Download App</p>
              <div className='button_wrapper py-2'>
                <Button className='py-6 px-3 mx-2 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-700 transition cursor-pointer ml-4'>
                  <Image
                    src={ICONS.AppelIcon}
                    alt='apple icon'
                    width={BUTTON_ICON_WIDTHS.apple || 18}
                    className='mr-1'
                  />{" "}
                  On iPhone
                </Button>

                <Button className='py-6 px-3 bg-button-primary text-white rounded-lg font-medium shadow hover:bg-blue-600 transition cursor-pointer'>
                  <Image
                    src={ICONS.PlayIcon}
                    alt='play store icon'
                    width={BUTTON_ICON_WIDTHS.play || 14}
                    className='mr-1'
                  />{" "}
                  On Android
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`px-4 md:px-0 relative w-full ${CARD_FRAME_HEIGHT} flex-1 flex justify-center items-center overflow-hidden`}
            >
              <div className='relative min-w-full h-102.5 md:h-full'>
                <Image
                  src={IMAGES.LoanMarketplace}
                  alt='loan experience'
                  fill
                  className='object-contain mt-4 md:mt-8 animate_animated animate__zoomIn'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
