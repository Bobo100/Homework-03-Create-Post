import { createContext } from 'react';

export interface SubmitButtonProps {
    title: string;
    content: string;
    image: string;
}

export interface IPostContext {
    posts: SubmitButtonProps[];
    handleSetPosts: (value: SubmitButtonProps) => void;
}

export const PostContext = createContext<IPostContext>({
    posts: [],
    handleSetPosts: () => { }
});