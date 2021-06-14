import {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';
import {FractalTheme} from '@bma98/fractal-ui';

export function useTheme(): FractalTheme {
  return useContext(ThemeContext);
}
