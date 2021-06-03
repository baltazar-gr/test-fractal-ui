import React, { useState } from 'react';
import {
    ActivityIndicator,
    Background,
    Box,
    Bubble,
    Button,
    CheckBox,
    Chip,
    ColorPicker,
    Dropzone,
    FractalAppRoot,
    Layer,
    PaddingLayer,
    Popover,
    RadioGroup,
    SegmentedControl,
    Separator,
    Slider,
    SocialMediaButtons,
    Switch,
    Text,
    useTheme,
    AudioPlayer
} from '@bma98/fractal-ui';
import { ThemeSwapper } from './examples/ThemeSwapper';
import { MultiSelectInputExample } from './examples/MultiSelectInputExample';
import { TextsFragments } from './fragments/Texts';
import { ContainersFragments } from './fragments/Containers';
import { ButtonsFragments } from './fragments/Buttons';
import { ModalsFragments } from './fragments/Modals';
import { MessagesFragments } from './fragments/Messages';
import { TablesFragments } from './fragments/Tables';
import { GridsFragments } from './fragments/Grids';
import { FileIcon } from './assets/FileIcon';

const tracks = [
    {
        title: 'Rubber Robot',
        //artist: 'Podington Bear',
        audioSrc: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
        image: 'https://picsum.photos/id/870/200/300'
        //color: 'lightblue'
    },
    {
        title: 'All Of Me',
        //artist: 'Mildred Bailey',
        audioSrc: 'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
        image: 'https://picsum.photos/id/872/200/300'
        //color: 'lightgreen'
    },
    {
        title: 'Instant Crush',
        //artist: 'Daft Punk ft. Julian Casablancas',
        audioSrc: require('./assets/song.mp3'),
        image: 'https://picsum.photos/id/875/200/300'
        //color: 'orange'
    }
];

function AudioPlayerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return <AudioPlayer tracks={tracks} marginTop={spacings.s} marginBottom={spacings.xl} />;
}

function SwapThemeFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ThemeSwapper />
        </Box>
    );
}

function DropZoneFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
            <Box marginBottom={spacings.s}>
                <Dropzone onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)} />
            </Box>
            <Box marginTop={spacings.s}>
                <Dropzone
                    text={'Dropzone pick multiple files '}
                    webTextButton={'to explore'}
                    pickMultipleFiles
                    onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                />
            </Box>
            <Box marginTop={spacings.s}>
                <Dropzone
                    text={'Dropzone with maximum number of files (5) '}
                    webTextButton={'to explore'}
                    pickMultipleFiles
                    maxNumberFiles={5}
                    onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                />
            </Box>
            <Box marginTop={spacings.s}>
                <Dropzone
                    text={'Dropzone with maximum number of file sizes (100 kB) '}
                    webTextButton={'to explore'}
                    pickMultipleFiles
                    maxFileSize={100000}
                    onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                />
            </Box>
        </Layer>
    );
}

function Chipfragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Chip marginRight={spacings.s} text={'Ver reportes'} />
            <Chip marginRight={spacings.s}>
                <FileIcon height={24} width={24} fill={colors.text} />
            </Chip>
        </Layer>
    );
}

function ActivityIndicatorFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    const width = 25;
    const height = 25;

    return (
        <Box alignContent={'center'} flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
            <ActivityIndicator width={width} height={height} color={colors.mainInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.alternativeInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.successInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.warningInteractiveColor} marginRight={spacings.m} />
            <ActivityIndicator width={width} height={height} color={colors.dangerInteractiveColor} marginRight={spacings.m} />
        </Box>
    );
}

function SegmentedControlFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <SegmentedControl
                selectedIndex={selectedIndex}
                values={['One', 'Two']}
                onChange={(value, index) => {
                    console.log(value);
                    setSelectedIndex(index);
                }}
                onValueChange={(value) => {
                    console.log('On Value Change: ', value);
                }}
            />
        </Box>
    );
}

function SliderFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [sliderValue, setSliderValue] = useState(0);
    const handleSliderValue = (value: number) => setSliderValue(value);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Slider onSlidingComplete={handleSliderValue} minimumValue={0} maximumValue={100} />
            <Text variant={'normal'}>{`Value: ${sliderValue}`}</Text>
        </Box>
    );
}

function SwitchFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Switch value={isEnabled} onValueChange={(value) => setIsEnabled(value)} />
        </Box>
    );
}

function CheckBoxFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <CheckBox value={isChecked} onValueChange={(value) => setIsChecked(value)} label={'Selectable'} />
        </Box>
    );
}

function RadioFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <RadioGroup
                radioButtons={[
                    { value: '1', label: 'Option One' },
                    { value: '2', label: 'Option Two' }
                ]}
                onValueChange={(value: string) => console.log(value)}
            />
        </Box>
    );
}

function BubbleFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Layer backgroundColor={colors.background} paddingTop={10} paddingBottom={10}>
                <Bubble
                    arrowPosition={'left'}
                    color={colors.foreground}
                    onLongPress={() => console.log('On Long Press')}
                    onPress={() => console.log('on Press')}
                >
                    <Text variant='normal'>Este es un mensaje dentro de una burbuja </Text>
                </Bubble>
                <Layer marginBottom={spacings.m} />
                <Bubble arrowPosition={'right'} color={colors.mainInteractiveColor}>
                    <Text variant='normal' color={'white'}>
                        Este es un mensaje dentro de una burbuja
                    </Text>
                </Bubble>
            </Layer>
        </Box>
    );
}

function SeparatorsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <Text variant={'normal'} marginBottom={spacings.s}>
                Below is the separator that is more visible with the isAtBackgroundLevel variable
            </Text>
            <Separator isAtBackgroundLevel marginBottom={spacings.s} />
            <Text variant={'normal'} marginBottom={spacings.s}>
                Below is the separator that is less visible without the isAtBackgroundLevel variable
            </Text>
            <Separator marginBottom={spacings.s} />
            <Text variant={'normal'}>Some text.</Text>
        </Box>
    );
}

function ColorPickerFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl}>
            <ColorPicker
                onColorChange={(color) => console.log(color)}
                colors={[
                    colors.mainInteractiveColor,
                    colors.alternativeInteractiveColor,
                    colors.dangerInteractiveColor,
                    colors.warningInteractiveColor,
                    colors.successInteractiveColor
                ]}
            />
        </Box>
    );
}

function PopoverContent(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Box marginTop={spacings.m} width={'100%'}>
            <Button variant='alternative' text='Pasion' />
        </Box>
    );
}

function PopoverFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [popoverVisible, setPopoverVisible] = useState(false);
    const togglePopover = () => setPopoverVisible((currentValue) => !currentValue);

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl} alignItems='center'>
            <Popover
                placement={'bottom'}
                active={popoverVisible}
                onRequestClose={() => setPopoverVisible(false)}
                popoverChildren={() => <PopoverContent />}
            >
                <Button variant={'main'} width={220} onPress={togglePopover} text={'Popover'} />
            </Popover>
        </Box>
    );
}

function SocialMediaButtonsFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <Layer marginTop={spacings.s} alignItems='center'>
            <SocialMediaButtons
                width={'100%'}
                marginTop={spacings.s}
                marginBottom={spacings.xl}
                onGooglePress={() => console.log('Google button pressed')}
                onFacebookPress={() => console.log('Facebook button pressed')}
                onApplePress={() => console.log('Apple button pressed')}
            />
            <Text variant={'normal'} alignItems={'center'}>
                Social Media Buttons without Apple button
            </Text>
            <SocialMediaButtons
                width={'100%'}
                removeAppleButton
                marginTop={spacings.s}
                marginBottom={spacings.xl}
                onGooglePress={() => console.log('Google button pressed')}
                onFacebookPress={() => console.log('Facebook button pressed')}
                onApplePress={() => console.log('Apple button pressed')}
            />
        </Layer>
    );
}

function Content(): JSX.Element {
    return (
        <PaddingLayer>
            <Text variant={'title'}>Audio Player</Text>
            <AudioPlayerFragment />
            <Text variant={'title'}>Swap Theme</Text>
            <SwapThemeFragment />
            <Text variant={'title'}>Dropzone Example</Text>
            <DropZoneFragment />
            <Text variant={'title'}>Chip Example</Text>
            <Chipfragment />
            <Text variant={'title'}>Multi Select Input Example</Text>
            <MultiSelectInputExample />
            <Text variant={'title'}>Activity Indicator Example</Text>
            <ActivityIndicatorFragment />
            <Text variant={'title'}>Segmented Control Example</Text>
            <SegmentedControlFragment />
            <Text variant={'title'}>Slider Example</Text>
            <SliderFragment />
            <Text variant={'title'}>Switch Example</Text>
            <SwitchFragment />
            <Text variant={'title'}>Check Box Example</Text>
            <CheckBoxFragment />
            <Text variant={'title'}>Radio Example</Text>
            <RadioFragment />
            <Text variant={'title'}>Bubble Example</Text>
            <BubbleFragment />
            <TextsFragments />
            <ContainersFragments />
            <Text variant={'title'}>Separator Example</Text>
            <SeparatorsFragment />
            <ButtonsFragments />
            <Text variant={'title'}>Color Picker Example</Text>
            <ColorPickerFragment />
            <ModalsFragments />
            <MessagesFragments />
            <Text variant={'title'}>PopoverView Example</Text>
            <PopoverFragment />
            <TablesFragments />
            <GridsFragments />
            <Text variant={'title'}>Social Media Buttons</Text>
            <SocialMediaButtonsFragment />
        </PaddingLayer>
    );
}

export default function App(): JSX.Element {
    return (
        <FractalAppRoot handleThemeManually>
            <Background>
                <Content />
            </Background>
        </FractalAppRoot>
    );
}
