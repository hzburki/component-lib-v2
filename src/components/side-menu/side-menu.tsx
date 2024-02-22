import type { ReactNode } from 'react';

export type SideMenuProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function SideMenu({ children }: SideMenuProps) {
  return (
    <div>
      {children}
    </div>
  );
}
