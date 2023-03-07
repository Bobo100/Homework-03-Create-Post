// input component
import React from 'react';

interface InputTextProps {
    labelId: string;
    text: string;
    placeholderText: string;
    onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ labelId, text, placeholderText, onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input type="text" id={labelId} value={text} placeholder={placeholderText} onChange={handleInputChange} />
    );
};

export default InputText;