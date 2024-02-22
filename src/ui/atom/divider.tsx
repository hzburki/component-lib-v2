import type { ReactNode } from 'react';

export type DividerProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Divider({ children }: DividerProps) {
  return (
    <div>
      {children}
    </div>
  );
}
