import React from 'react';
import {useTheme, Box, Text} from '@bma98/fractal-ui';

function TextFragment(): JSX.Element {
  const {colors, spacings} = useTheme();

  return (
    <Box marginTop={spacings.s} marginBottom={spacings.xl}>
      <Text variant={'title'} marginBottom={spacings.s}>
        Title text.
      </Text>
      <Text variant={'title2'} marginBottom={spacings.s}>
        Title2 text.
      </Text>
      <Text variant={'title3'} marginBottom={spacings.s}>
        Title3 text.
      </Text>
      <Text variant={'subtitle'} marginBottom={spacings.s}>
        Subtitle text.
      </Text>
      <Text variant={'placeholder'} marginBottom={spacings.s}>
        Placeholder text.
      </Text>
      <Text variant={'normal'} marginBottom={spacings.s}>
        Normal text.
      </Text>
      <Text variant={'label'} marginBottom={spacings.s}>
        Label text..
      </Text>
      <Text variant={'small'} marginBottom={spacings.s}>
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
      </Text>
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
