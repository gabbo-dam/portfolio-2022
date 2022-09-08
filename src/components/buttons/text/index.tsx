import type { NextPage } from 'next';
import Link from 'next/link';
import { ButtonProps } from '../types';

const Text: NextPage<ButtonProps> = () => {
  return (
    <div>
      <button>Text</button>
    </div>
  );
};

export default Text;
