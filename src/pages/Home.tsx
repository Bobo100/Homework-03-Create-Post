import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RemovePostButton } from "./component/RemovePostButton";

import { PostContext } from "./component/PostContent";
import "./css/Home.css"
import uuid from "react-uuid";
export const Home = () => {

    const { posts } = useContext(PostContext);

    return (
        <div className="home">
            <div className="btn_containter">
                <NavLink to="/new-post" className="post_btn">Add Post</NavLink>
                <RemovePostButton />
            </div>
            <div className="post_containter">
                {posts && posts.map((post, index) => {
                    console.log(post.id)
                    return (
                        <div className="post" key={uuid()}>
                            <div className="post_title">{post.title}</div>
                            <div className="post_content">{post.content}</div>
                            {post.image && <img className="post_image imagePreivew" src={post.image} alt="123" />}
                            <NavLink to={`/modify-post/${post.id}`} className="post_btn">Modify</NavLink>
                        </div>
                    )
                })
                }
            </div>

        </div>
    );
};
