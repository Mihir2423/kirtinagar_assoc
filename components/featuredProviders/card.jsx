import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Featured from '../../assets/svg/featured.svg';
import services from '../../assets/svg/services.svg';
import quote from '../../assets/svg/quote.svg';
import line from '../../assets/svg/line.svg';
import CardslideShow from './cardSwiper';

const Card = () => (
  <div className="card  md:w-[350px] w-[180px] bg-[#E5DFCF] shadow-2xl rounded-xl flex md:justify-center md:items-center">
    <CardslideShow />
    <Image src={Featured} alt="image" className="absolute top-6 left-0 w-1/2 md:w-1/4 h-1/4" />
    <span className="absolute top-0 flex justify-between border-b-2 border-[#D9D9D9] w-full md:px-16 px-6  items-center">
      <div className="hover:cursor-pointer">
        <Image src={services} alt="image" className="pt-1 " />
      </div>
      <div className="bg-[#E5DFCF] ">
        <Image src={line} alt="image" />
      </div>
      <div className="hover:cursor-pointer">
        <Image src={quote} alt="image" className="pt-1 " />
      </div>
    </span>
    <div className="bg-[#E5DFCF] text-black text-center md:p-4 rounded-b-xl shadow-2xl">
      <span className=" font-bold md:text-2xl ">WOODMAN FURNITURE INDIA PVT. LTD.</span>
      <p>New Delhi,India</p>
    </div>
  </div>
);

export default Card;