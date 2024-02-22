import type { ReactNode } from 'react';

export type AnalyticsDrawerProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function AnalyticsDrawer({ children }: AnalyticsDrawerProps) {
  return (
    <div>
      {children}
    </div>
  );
}
