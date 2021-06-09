import React, { useCallback } from 'react';
import { useTheme, Box, Layer, Avatar, Image, ImageBackground, Text, ResizeModeType } from '@bma98/fractal-ui';

function AvatarImageFragment(): JSX.Element {
    const { spacings } = useTheme();

    const resizeModes: Array<ResizeModeType> = ['contain', 'center', 'repeat', 'cover', 'stretch'];

    const renderItem = useCallback(
        (resizeMode: ResizeModeType) => {
            const text = 'Image with ' + resizeMode + ' resize mode';

            return (
                <React.Fragment key={resizeMode}>
                    <Text variant={'subtitle'} alignItems={'center'} marginTop={spacings.m} marginBottom={spacings.xs}>
                        {text}
                    </Text>
                    <Box marginBottom={spacings.s} height={500}>
                        <Image
                            source={'https://picsum.photos/id/870/200/300'}
                            label={'Asset'}
                            resizeMode={resizeMode}
                            height={'100%'}
                            borderRadius={16}
                            marginTop={spacings.s}
                        />
                    </Box>
                </React.Fragment>
            );
        },
        [spacings.m, spacings.s, spacings.xs]
    );

    return (
        <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
            <Box marginBottom={spacings.s} flexDirection={'row'}>
                <Avatar source={'https://picsum.photos/id/370/200'} label={'Avatar'} />
                <Image
                    source={'https://picsum.photos/id/870/200/300'}
                    label='Asset'
                    width={100}
                    height={64}
                    borderRadius={16}
                    marginLeft={spacings.m}
                />
            </Box>
            {resizeModes.map(renderItem)}
        </Layer>
    );
}

function ImageBackgroundFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ImageBackground
                source={'https://picsum.photos/id/870/200/300'}
                width={200}
                height={200}
                borderRadius={16}
                justifyContent={'center'}
            >
                <Text variant={'button'}>Lorem Ipsum is simply dummy text.</Text>
            </ImageBackground>
        </Box>
    );
}

export function ImagesFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Avatar and Image Example</Text>
            <AvatarImageFragment />
            <Text variant={'title'}>ImageBackground Example</Text>
            <ImageBackgroundFragment />
        </>
    );
}
