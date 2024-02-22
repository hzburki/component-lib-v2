import type { ReactNode } from 'react';

export type ButtonsProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Buttons({ children }: ButtonsProps) {
  return (
    <div>
      {children}
    </div>
  );
}
