import React, { useState } from 'react';
import { useTheme, Box, MultiSelectInput } from '@bma98/fractal-ui';

interface Tag {
    id: string;
    value: string;
}

export function MultiSelectInputExample(): JSX.Element {
    const { spacings } = useTheme();
    const [tag, setTag] = useState('');
    const [tags, setTags] = useState<Array<Tag>>([
        { id: '0', value: 'enormout' },
        { id: '1', value: 'fun' },
        { id: '2', value: 'fast' },
        { id: '3', value: 'few' }
    ]);
    const [selectedTags, setSelectedTags] = useState<Array<Tag>>([]);

    const handleSubmitEditing = () => {
        addNewTag(tag);
    };

    const addNewTag = (tag: string) => {
        const newTag = { id: `${tags.length}`, value: tag };
        setTags((currentTags) => [...currentTags, newTag]);
        addSelectedTag(newTag);
        setTag('');
    };

    const addSelectedTag = (tag: Tag) => {
        setSelectedTags((currentTags) => [...currentTags, tag]);
    };

    const clearTags = () => {
        setSelectedTags([]);
    };

    const handleSelect = (values: Array<Tag>) => {
        setSelectedTags(values as Array<Tag>);
    };

    const removeTag = (tag: Tag) => {
        setSelectedTags((currentTags) => currentTags.filter((item) => item.id != tag.id));
    };

    return (
        <Box marginTop={spacings.s} marginBottom={spacings.xl} maxHeight={320}>
            <MultiSelectInput
                placeholder={'Escribe y da enter'}
                options={tags}
                getOptionLabel={(tag: Tag) => tag.value}
                onSelect={handleSelect}
                onDeletePress={removeTag}
                onClearPress={clearTags}
                clearButtonText='Limpiar'
                inputValue={tag}
                controllableSelectedOptions={selectedTags}
                onChangeText={setTag}
                onSubmitEditing={handleSubmitEditing}
            />
        </Box>
    );
}
