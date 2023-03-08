import { useState } from "react";
import InputText from "./component/InputText";
import LabelText from "./component/LabelText";
import SubmitButton from "./component/SubmitButton";
import TextArea from "./component/TextArea";
import InputFile from "./component/InputFile";
import uuid from "react-uuid";
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

    const [imageData, setImageData] = useState("");
    const handleFileChange = (value: string) => {
        setImageData(value);
    };

    return (
        <div className="newpost">
            <LabelText label="title" text="Title" />
            <InputText labelId="name" text={titleInputText} placeholderText="Enter your name" onChange={handleInput} />

            <LabelText label="content" text="Content" />
            <TextArea labelId="content" text={contentTextArea} placeholderText="Enter your content" onChange={handleTextArea} />

            <div className="uploadImageContent">
                {imageData && <img className="imagePreivew" src={imageData} alt="123" />}
                <InputFile labelId="image" placeholderText="Upload image" onChange={handleFileChange} />
            </div>

            <SubmitButton id={uuid()} title={titleInputText} content={contentTextArea} image={imageData} />
        </div>
    );
};
