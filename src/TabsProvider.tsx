import React from 'react';
import { TabsContext } from './context';
import type { TabsProviderProps } from './utils';

export function TabsProvider({
  children,
  onChangeIndex,
  defaultIndex,
}: TabsProviderProps) {
  const index = React.useMemo(() => defaultIndex || 0, [defaultIndex]);

  const goTo = React.useCallback(
    (ind: number) => {
      onChangeIndex?.(ind);
    },
    [onChangeIndex]
  );

  const value = React.useMemo(() => ({ goTo, index }), [goTo, index]);

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}
