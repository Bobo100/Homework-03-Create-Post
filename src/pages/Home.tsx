import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RemovePostButton } from "./component/RemovePostButton";
import "./css/Home.css"
export const Home = () => {


    return (
        <div className="home">
            <div className="btn_containter">
                <NavLink to="/new-post" className="post_btn">Add Post</NavLink>
                <RemovePostButton />
            </div>
            <div className="post_containter">
            </div>

        </div>
    );
};
