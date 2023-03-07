// Submit Button Component
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PostContext } from "./PostContent";

interface SubmitButtonProps {
    title: string;
    content: string;
    image: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, content, image }) => {

    const { handleSetPosts } = useContext(PostContext);
    const handleSubmit = () => {
        const data = {
            title: title,
            content: content,
            image: image
        }
        handleSetPosts(data)
    }


    return (
        <NavLink to="/" className="post_btn submitButton" onClick={handleSubmit}>Submit</NavLink>
    )
}

export default SubmitButton;