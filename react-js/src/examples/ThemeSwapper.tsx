import React, { useCallback } from 'react';
import { Button, useSetThemeIdentifier } from '@bma98/fractal-ui';

export function ThemeSwapper(): JSX.Element {
    const setThemeIdentifier = useSetThemeIdentifier();
    const handlePress = useCallback(() => setThemeIdentifier((current: 'dark' | 'light') => (current === 'light' ? 'dark' : 'light')), [setThemeIdentifier]);

    return <Button onPress={handlePress} variant='alternative' text='Swap Theme' />;
}
