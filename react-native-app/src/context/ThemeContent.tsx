import React, {ReactNode} from 'react';
import {
  lightFractalTheme,
  darkFractalTheme,
  FractalTheme,
} from '@bma98/fractal-ui';
import {PlatformAppearanceDetails} from '@bma98/fractal-ui/dist/components/PlatformAppearanceDetails';
import {useThemeIdentifier} from '../context/hooks/useThemeIdentifier';
import {ThemeProvider} from '../context/ThemeContext';

export interface ThemeContentProps {
  children: ReactNode;
  handleThemeManually?: boolean;
  lightTheme?: FractalTheme;
  darkTheme?: FractalTheme;
}

export function ThemeContent({
  children,
  lightTheme,
  darkTheme,
}: ThemeContentProps): JSX.Element {
  const themeIdentifier = useThemeIdentifier();
  const finalLightTheme = lightTheme ?? lightFractalTheme;
  const finalDarkTheme = darkTheme ?? darkFractalTheme;
  const theme = themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;

  return (
    <ThemeProvider theme={theme}>
      <PlatformAppearanceDetails />
      {children}
    </ThemeProvider>
  );
}
