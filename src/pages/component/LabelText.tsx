// Label component
import React from 'react';

interface LabelTextProps {
    label: string;
    text: string;
}

const LabelText: React.FC<LabelTextProps> = ({ label, text }) => {
    return (
        // <div className="label-text">
        //     <span className="label">{label}</span>
        //     <span className="text">{text}</span>
        // </div>
        <label htmlFor={label}>{text}</label>
    );
};

export default LabelText;
