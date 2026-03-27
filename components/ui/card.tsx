import Image from "next/image";

interface HerocardProps {
  title: string;
  description: string;
  image: string;
}

interface TestimonialcardProps {
  image: string;
  content: string;
  name: string;
}

export function Herocard({ title, description, image }: HerocardProps) {
  return (
    <div className='flex flex-col items-center p-6 gap-4 bg-white rounded-2xl h-full'>
      {/* Text Content */}

      <div className='flex flex-row w-full gap-3'>
        <div className='w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-1'>
          <Image
            src={image}
            alt='App Preview'
            width={300}
            height={300}
            className='rounded-lg shadow-lg'
          />
        </div>
        <h2 className='text-base font-montserrat font-bold mb-4'>{title}</h2>
      </div>

      <div className='flex gap-4 text-sm'>{description}</div>
    </div>
  );
}

export function Testimonialcard({ name, content, image }: TestimonialcardProps) {
  return (
    <div className='flex'>
      <div className='flex flex-col p-4 bg-white rounded-md'>
        <div className='flex flex-row w-full gap-3'>
          <div className='w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-1'>
            <Image
              src={image}
              alt='App Preview'
              width={300}
              height={300}
              className='rounded-lg shadow-lg'
            />
          </div>
          <p className='text-base font-medium mb-4'>{name}</p>
        </div>
        <div className='flex gap-4 text-sm'>{content}</div>
      </div>
    </div>
  );
}

export default Herocard;
Testimonialcard;
