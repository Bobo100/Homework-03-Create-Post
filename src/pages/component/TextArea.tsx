// textarea component
import React from 'react';

interface TextAreaProps {
    labelId: string;
    text: string;
    placeholderText: string;
    onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ labelId, text, placeholderText, onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <textarea id={labelId} value={text} placeholder={placeholderText} onChange={handleInputChange} />
    );
};

export default TextArea;