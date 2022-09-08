import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CardProps } from '../types';

const HomeCard: NextPage<CardProps> = ({ title, description, img, className, link }) => {
  return (
    <div className={`${className} cursor-pointer `}>
      <a href={link} target="_blank">
        <div className={`flex flex-col-reverse lg:flex-row justify-between rounded-lg bg-[#000] hover:border-white border border-[#333]  `}>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-text">{description}</p>
          </div>
          <div className="lg:clip-polygon w-full lg:max-w-[230px]  my-auto">
            <Image className="rounded-lg" src={img} alt={`${title}`} layout="responsive" width={1920} height={1080} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default HomeCard;

// <div className={`${className}`}>
// <div className={`flex flex-col-reverse lg:flex-row justify-between rounded-lg bg-card border border-[#333]  `}>
//   <div className="p-4">
//     <h3 className="text-xl font-bold mb-3">{title}</h3>
//     <p className="text-text">{description}</p>
//   </div>
//   <div className="lg:clip-polygon w-full lg:max-w-[200px]">
//     <Image className="rounded-lg" src={img} alt={`${title}`} layout="responsive" width={1920} height={1080} />
//   </div>
// </div>
// </div>
