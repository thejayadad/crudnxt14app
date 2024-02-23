import Image from 'next/image';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi'; // Importing the down arrow icon
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex flex-col items-center">
        <div className='flex flex-col justify-center items-center'>
        <FiChevronDown className="text-primary animate-bounce" size={24} />
        <Link
        className="bg-primary hover:bg-orange-300 text-white font-bold py-2 px-4 rounded"
        href={'/login'}>
            Login Here
        </Link>
        <div className="mt-4 animate-pulse"> 
        </div>
        </div>
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/logo.png"
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
        </div>
   
      </div>
    </div>
  );
};

export default Hero;
