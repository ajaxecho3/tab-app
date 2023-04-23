import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode
  className?: string
}

export default function Button({ children, className }: ButtonProps) {
  return <ButtonUnstyled className={className}>{children}</ButtonUnstyled>;
}