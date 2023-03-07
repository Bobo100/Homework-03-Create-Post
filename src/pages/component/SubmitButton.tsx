// Submit Button Component
import { useState } from "react";
const SubmitButton = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const handleSubmit = () => {
        setIsSubmit(true);
    };

    return (
        <button className="submitButton" onClick={handleSubmit}>Submit</button>
    );
};

export default SubmitButton;