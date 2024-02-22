import type { ReactNode } from 'react';

export type TextareaProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Textarea({ children }: TextareaProps) {
  return (
    <div>
      {children}
    </div>
  );
}
