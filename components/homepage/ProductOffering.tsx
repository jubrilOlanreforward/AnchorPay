import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CARD_FRAME_HEIGHT,
  PRODUCT_OVERLAY_SIZE,
  PARTNER_LOGO_DIMENSIONS,
  SWIPER_MIN_HEIGHT,
  SWIPER_CARD_MIN_HEIGHT,
} from "@/components/homepage/layoutConstants";
import { IMAGES, PARTNER_LOGOS } from "@/components/homepage/imageAssets";

const products = [
  {
    minititle: "Loan",
    title: "Loan Marketplace",
    description:
      "Discover a diverse range of loan options from various lenders, all in one convenient marketplace. Whether you're seeking personal loans, business funding, or specialized financing, find the perfect solution tailored to your needs.",
    button: "Get Started",
    image: IMAGES.LoanMarketplace,
    image2: IMAGES.Percent,
    bg: "bg-blue-50",
    bg2: "bg-[#6AA7F1]",
    reverse: false,
  },
  {
    minititle: "P2P Lending",
    title: "Loan Out Your Excess Cash",
    description:
      "Our P2P lending empowers your to lend to friends, neighbours, or colleagues on your terms. With peer-to-peer lending, foster community support while earning returns on your investments, creating a win-win scenario for all parties involved.",
    button: "Get Started",
    image: IMAGES.LoanExcess,
    bg: "bg-pink-50",
    bg2: "bg-[#FBCAC6]",
    reverse: true,
  },
  {
    minititle: "Buy Now, Pay Later",
    title: "Own It Now & Pay Later",
    description:
      "Embrace the freedom of purchasing gadgets, electronics, and more in convenient installments with our Buy Now Pay Later feature. Shop with ease and flexibility, managing your payments effortlessly at your fingertips.",
    button: "Get Started",
    image: IMAGES.BuyNow,
    image2: IMAGES.BuyNow2,
    bg: "bg-blue-50",
    bg2: "bg-[#6AA7F1]",
    reverse: false,
  },
  {
    minititle: "Booster Savings",
    title: "Save Towards a Goal",
    description:
      "Start building your financial future with our savings platform. Whether you're saving for a rainy day, a dream vacation, or a major life milestone, our user-friendly savings tools make it easy to set aside funds and track your progress towards your goals.",
    button: "Get Started",
    image: IMAGES.SaveGoal1,
    bg: "bg-green-50",
    bg2: "bg-[#bfe6d5]",
    reverse: true,
  },
  {
    minititle: "Bills Payments",
    title: "Airtime & Bill payment",
    description:
      "Simplify your everyday transactions with our airtime and bills payment services. Recharge your mobile phone credits, settle utility bills, and manage your expenses seamlessly, all from the comfort of your home or on the go.",
    button: "Get Started",
    image: IMAGES.BillPayment,
    image2: IMAGES.BillPayment2,
    bg: "bg-gray-100",
    bg2: "bg-[#48494B]",
    reverse: false,
  },
];

export default function ProductOffering() {
  return (
    <section className='py-16 px-4 md:px-10 lg:px-20 bg-white relative'>
      {/* Header */}
      <div className='text-center mb-14'>
        <h2 className='text-2xl md:text-3xl font-montserrat font-bold text-gray-800'>
          Our Product Offering
        </h2>
      </div>

      {/* Cards */}
      <div className='space-y-10 overflow-hidden'>
        {products.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl flex flex-col-reverse ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-8 ${item.bg}`}
          >
            {/* TEXT */}
            <div
              className={`flex-1 relative p-6 ${CARD_FRAME_HEIGHT} w-full flex flex-col justify-center`}
            >
              <small>{item.minititle}</small>
              <h3 className='text-xl md:text-2xl font-montserrat font-bold mb-4 text-gray-800'>
                {item.title}
              </h3>

              <p className='text-gray-600 mb-6 leading-relaxed max-w-100'>{item.description}</p>

              <Button className='bg-primary text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700 transition w-32.25'>
                {item.button}
              </Button>

              <div
                className={`absolute z-10 -right-55 -bottom-20 ${PRODUCT_OVERLAY_SIZE} md:h-full items-center justify-center hidden md:flex`}
              >
                {item.image2 && (
                  <Image
                    src={item.image2 || ""}
                    alt={item.title}
                    fill
                    className='object-contain mt-4 md:mt-8'
                  />
                )}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className={`${item.bg2} px-4 md:px-0 relative w-full ${CARD_FRAME_HEIGHT} flex-1 flex justify-center items-center ${item.reverse ? "md:order-1 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl" : "md:order-2 rounded-t-2xl md:rounded-t-none md:rounded-r-2xl"} overflow-hidden`}
            >
              <div className={`relative min-w-full ${CARD_FRAME_HEIGHT}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-contain mt-4 md:mt-8'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partners */}
      <div className='mt-16 text-center'>
        <p className='text-gray-900 font-medium mb-6'>We partnered with</p>

        <div className='flex flex-wrap justify-center items-center gap-12 opacity-70'>
          {PARTNER_LOGOS.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`partner logo ${index + 1}`}
              width={PARTNER_LOGO_DIMENSIONS.width}
              height={PARTNER_LOGO_DIMENSIONS.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
