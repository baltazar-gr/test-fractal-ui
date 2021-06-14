import React from 'react';
import {ThemeIdentifierProvider} from '../context/ThemeIdentifierContext';
import {ThemeContent, ThemeContentProps} from '../context/ThemeContent';

export type FractalAppRootProps = ThemeContentProps;

export function FractalAppRoot(props: FractalAppRootProps): JSX.Element {
  const {handleThemeManually = false} = props;

  return (
    <ThemeIdentifierProvider handleThemeManually={handleThemeManually}>
      {props.children}
    </ThemeIdentifierProvider>
  );
}
