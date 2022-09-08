import type { NextPage } from 'next';
import Image from 'next/image';
import { ContainedButton } from '@components/buttons';
import { HomeCard } from '@components/cards';

const Home: NextPage = () => {
  const cardInfo = [
    {
      title: 'Hakuswap',
      description: 'Premier DEX AMM on Avalanche Network',
      img: 'hakuswap.png',
      link: 'https://hakuswap.com/',
    },

    {
      title: 'Sahara DAO',
      description: 'Fractional-Algorithmic Synthetic Token',
      img: 'sahara.png',
      link: 'https://sahara-dao.vercel.app/',
    },
    {
      title: 'Collection Capitol',
      description: 'NFT Marketplace on the BNB Chain',
      img: 'collectioncapitol.png',
      link: 'https://collectioncapitol.com/',
    },
    {
      title: 'WeShip',
      description: 'E-Commerce Fulfillment, Storage & Logistics',
      img: 'weship.png',
      link: 'https://www.weship.eu/',
    },
  ];
  return (
    <div className="my-auto">
      <div>
        <h1 className="text-center text-4xl md:text-7xl  font-bold tracking-tighter mb-4 md:mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8] animate-fade1">Gabriel Morales</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#FF0080] animate-fade2">Software</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] animate-fade3">Dev</span>
        </h1>
        <p className="text-center mx-auto max-w-md text-xl md:text-2xl text-text mb-8 md:mb-8">A self-taught developer with an interest in Computer Science.</p>
      </div>
      <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row">
        <div className="w-full rounded-lg border bg-[#111] border-[#333] p-8 ">
          <h2 className="text-center text-4xl font-bold mb-8">About me</h2>
          <div className="w-full mb-4 max-w-[350px] mx-auto">
            <Image className="rounded-lg" src="/color.svg" alt="nerdo_me" layout="responsive" width={350} height={300} />
          </div>
          <p className="text-center mb-6 text-text mx-auto md:w-4/5">
            Passionate about education and technology, which leads me to be in constant learning and growth. I dedicated myself to create web applications and interfaces with functionality.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/gabbo-dam" target="_blank">
              Github
            </a>
            <a href="https://www.linkedin.com/in/gabbo-mv/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="w-full flex gap-4 lg:gap-0 flex-col justify-between">
          {cardInfo.map((e) => (
            <HomeCard className="" title={`${e.title}`} description={`${e.description}`} img={`/${e.img}`} link={e.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
