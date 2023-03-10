import { createContext } from 'react';

export interface PostContent {
    id: string;
    title: string;
    content: string;
    image: string;
}

export interface IPostContext {
    posts: PostContent[];
    handleSetPosts: (value: PostContent) => void;
    handleRemoveLastPost: () => void;
    updatePost: (id: string, updatedPosts: PostContent) => void;
}

export const PostContext = createContext<IPostContext>({
    posts: [],
    handleSetPosts: () => { },
    handleRemoveLastPost: () => { },
    updatePost: () => { }
});


// export const PostContext = createContext({
//     posts: [] as PostContent[],
//     handleSetPosts: (value: PostContent) => { },
//     handleRemoveLastPost: () => { },
//     updatePost: (id: string, updatedPosts: PostContent) => { }
// });
