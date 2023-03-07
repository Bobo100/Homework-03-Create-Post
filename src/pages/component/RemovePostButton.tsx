// Remove Post Button Component
import { useContext } from "react";
import { PostContext } from "./PostContent";

export const RemovePostButton = () => {
    const { handleRemoveLastPost } = useContext(PostContext);
    return (
        <button className="post_btn" onClick={handleRemoveLastPost}>Remove</button>
    );
};
