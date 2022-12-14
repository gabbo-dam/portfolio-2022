import { Fragment } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { NavProps } from '../types';
import { menu } from '../menu';

const DesktopNav: NextPage<NavProps> = () => {
  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <nav className="flex  items-center justify-center h-16 mb-8">
        {menu.map((e) => (
          <Fragment key={e.name}>
            <span className="text-text p-2">
              <Link href={e.src}>{e.name}</Link>
            </span>
          </Fragment>
        ))}
      </nav>
      <div>Media</div>
    </div>
  );
};

export default DesktopNav;
