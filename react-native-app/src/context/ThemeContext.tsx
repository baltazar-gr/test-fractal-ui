import React, {createContext, ReactNode} from 'react';
import {FractalTheme, lightFractalTheme} from '@bma98/fractal-ui';

export const ThemeContext = createContext<FractalTheme>(lightFractalTheme);

export interface ThemeProviderProps {
  children: ReactNode | Array<ReactNode>;
  theme: FractalTheme;
}

export function ThemeProvider({
  children,
  theme,
}: ThemeProviderProps): JSX.Element {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
