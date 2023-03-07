// 上傳圖片的button
import { useState } from "react";
import InputFile from "./InputFile";
import "./css/UploadImageButton.css";
const ImageUpload = () => {
    const [imageData, setImageData] = useState("");
    const handleFileChange = (value: string) => {
        setImageData(value);
    };

    return (
        <div className="uploadImageContent">
            {imageData && <img className="imagePreivew" src={imageData} alt="123" />}
            <InputFile labelId="image" placeholderText="Upload image" onChange={handleFileChange} />
        </div>
    );
};

export default ImageUpload;