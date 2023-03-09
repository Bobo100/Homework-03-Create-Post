// Submit Button Component
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PostContext } from "./PostContent";
import { PostContent } from "./PostContent";
const SubmitButton: React.FC<PostContent> = ({ id, title, content, image }) => {

    const { handleSetPosts } = useContext(PostContext);
    const handleSubmit = () => {
        const data = {
            id: id,
            title: title,
            content: content,
            image: image
        }

        console.log(data)

        // 如果沒有資料就不要新增
        if (!title && !content) {
            return;
        }
        handleSetPosts(data)
    }

    return (
        <NavLink to="/" className="post_btn submitButton" onClick={handleSubmit}>Submit</NavLink>
    )
}

export default SubmitButton;