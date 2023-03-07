import { useState } from "react";
import InputText from "./component/InputText";
import LabelText from "./component/LabelText";
import TextArea from "./component/TextArea";
import ImageUpload from "./component/UploadImageButton";
import "./css/NewPost.css"
export const NewPost = () => {
    const [titleInputText, setTitleInputText] = useState('');
    const handleInput = (value: string) => {
        setTitleInputText(value);
    };

    const [contentTextArea, setContentTextArea] = useState('');
    const handleTextArea = (value: string) => {
        setContentTextArea(value);
    };

    return (
        <div className="newpost">
            <LabelText label="title" text="Title" />
            <InputText labelId="name" text={titleInputText} placeholderText="Enter your name" onChange={handleInput} />
            <LabelText label="content" text="Content" />
            <TextArea labelId="content" text={contentTextArea} placeholderText="Enter your content" onChange={handleTextArea} />
            <ImageUpload />
        </div>
    );
};
