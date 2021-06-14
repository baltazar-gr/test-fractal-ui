import React from 'react';
import {Box, useTheme, Text} from '@bma98/fractal-ui';

function TextFragment(): JSX.Element {
  const {spacings} = useTheme();

  return (
    <Box marginTop={spacings.s} marginBottom={spacings.xl}>
      <Text variant={'title'}>Title text.</Text>
      <Text variant={'label'}>Label text..</Text>
      {/*<Text variant={'small'} marginBottom={spacings.s}>
        Small text.
      </Text>
      <Text variant={'smallLabel'} marginBottom={spacings.s}>
        Small label text.
      </Text>
      <Text variant={'button'} marginBottom={spacings.s}>
        Button text.
      </Text>
      <Text variant={'textButton'} marginBottom={spacings.s}>
        Text button text.
      </Text>
      <Text variant={'normal'} selectable marginBottom={spacings.s}>
        Selectable text.
      </Text>
      <Text
        variant={'normal'}
        selectable
        selectionColor={colors.alternativeInteractiveColor}
        marginBottom={spacings.s}>
        Selectable text with different color (Only on Android).
      </Text>*/}
    </Box>
  );
}

export function TextsFragments(): JSX.Element {
  return (
    <>
      <Text variant={'title'}>Text Example</Text>
      <TextFragment />
    </>
  );
}
