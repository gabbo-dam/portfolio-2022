import type { NextPage } from 'next';
import Link from 'next/link';
import { ButtonProps } from '../types';

const Contained: NextPage<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Contained;
