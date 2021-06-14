import React from 'react';
import {SafeAreaView, ScrollView, Text as RNText} from 'react-native';
import {Background} from '@bma98/fractal-ui';
import {FractalAppRoot} from './src/core/FractalAppRoot';

export default function App(): JSX.Element {
  return (
    <FractalAppRoot>
      <Background>
        <SafeAreaView />
        <ScrollView>
          <RNText>Hola</RNText>
        </ScrollView>
      </Background>
    </FractalAppRoot>
  );
}
