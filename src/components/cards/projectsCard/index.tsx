import type { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image';
import { CardProps } from '../types';

const ProjectCard: NextPage<CardProps> = ({ title, description, img, className }) => {
  return (
    <div className={`${className}`}>
      <div className={`flex flex-col-reverse justify-between rounded-lg bg-card border border-[#333]  `}>
        <div className="p-4">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-text">{description}</p>
        </div>
        <div className="w-full">
          <Image className="rounded-lg" src={img} alt={`${title}`} layout="responsive" width={1920} height={1080} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
