// Remove Post Button Component
import { useState } from "react";

export const RemovePostButton = () => {
    const [isRemove, setIsRemove] = useState(false);
    const handleRemove = () => {
        setIsRemove(true);
    };

    return (
        <button className="post_btn" onClick={handleRemove}>Remove</button>
    );
};