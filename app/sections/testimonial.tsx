import { Testimonialcard } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cardData = [
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: "/images/teststimonials/avatar1.png",
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: "/images/teststimonials/avatar1.png",
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: "/images/teststimonials/avatar1.png",
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: "/images/teststimonials/avatar1.png",
  },
  {
    name: "Jessica Ajudua",
    content:
      "I love the Buy Now Pay Later feature! It's transformed my budgeting by allowing me to purchase a new laptop in instalments. No more stressing about a big upfront payment. The flexibility in managing payments is fantastic.",
    image: "/images/teststimonials/avatar1.png",
  },
];

const Testimonial = () => {
  return (
    <section>
      <div className='max-w-7xl  w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-3 p-2 md:p-14 bg-gradient-to-br from-white to-transparent'>
        <div className='absolute left-[30%] w-[500px] h-[500px] bg-primary/30 z-1 blur-3xl rounded-full opacity-40'></div>
        <div className='relative z-3'>
          <div className='grid md:grid-cols-2 max-h-[800px] place-content-center place-items-center content-baseline flex-wrap justify-center gap-4 '>
            {cardData.map((item, index) => (
              <Testimonialcard
                key={index}
                name={item.name}
                content={item.content}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div>
          <div className='max-w-2xl bg-green p-6 w-[435px]'>
            <h1 className='text-4xl  font-montserrat font-bold'>Our Customers love what we do</h1>
            <p className='text-bace text-gray-500 mt-4 md:mt-6'>
              We have provided a platform that provide solution with our unique features. Read
              testimonial from our customers.
            </p>
            <Button className='md:mt-6 bg-button-primary text-white mt-4 md:mt-8'>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
