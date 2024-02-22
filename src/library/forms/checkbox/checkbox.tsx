import type { ReactNode } from 'react';

export type CheckboxProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Checkbox({ children }: CheckboxProps) {
  return (
    <div>
      {children}
    </div>
  );
}
