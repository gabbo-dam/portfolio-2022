import type { NextPage } from 'next';
import { ButtonProps } from '../types';

const Contained: NextPage<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Contained;
