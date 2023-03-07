import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RemovePostButton } from "./component/RemovePostButton";

import { PostContext } from "./component/PostContent";
import "./css/Home.css"
export const Home = () => {

    const { posts } = useContext(PostContext);

    return (
        <div className="home">
            <div className="btn_containter">
                <NavLink to="/new-post" className="post_btn">Add Post</NavLink>
                <RemovePostButton />
            </div>
            <div className="post_containter">
                {posts.map((post, index) => {
                    return (
                        <div className="post" key={index}>
                            <div className="post_title">{post.title}</div>
                            <div className="post_content">{post.content}</div>
                            {post.image && <img className="post_image imagePreivew" src={post.image} alt="123" />}
                        </div>
                    )
                })
                }
            </div>

        </div>
    );
};
