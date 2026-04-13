import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonWithIconProps = {
  text?: string;
  onClick?: () => void;
  className?: string;
};

const ButtonWithIconDemo = ({ text = "Let's Collaborate", onClick, className }: ButtonWithIconProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full border border-black bg-black p-1 ps-6 pe-14 text-sm font-medium text-white transition-all duration-500 hover:bg-black/90 hover:ps-14 hover:pe-6',
        className
      )}
    >
      <span className='relative z-10 transition-all duration-500 group-hover:opacity-90'>{text}</span>
      <div className='absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45'>
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default ButtonWithIconDemo;
