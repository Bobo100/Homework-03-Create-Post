// textarea component
import React from 'react';

interface TextAreaProps {
    labelId: string;
    value: string;
    placeholderText: string;
    onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ labelId, value, placeholderText, onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <textarea id={labelId} value={value} placeholder={placeholderText} onChange={handleInputChange} />
    );
};

export default TextArea;