import { createContext, useReducer } from "react";
export const PostListContext=createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});
const postListReducer=(currPostList,action)=>
{
    return currPostList;
}
function PostListProvider({children})
{
    const addPost=()=>
    {

    }
    const deletePost=()=>
    {

    }
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
    return <PostListContext.Provider value={{postList: postList, addPost: addPost, deletePost: deletePost}}>
        {children}
    </PostListContext.Provider>
}
const DEFAULT_POST_LIST=[
    {
        id: "1",
        title: "Going to Mumbai",
        body: "MY body 1",
        reactions: 2,
        userId: "user-9",
        tags: ["vacation","Mumbai","Enjoying"],
    },
    {
        id: "2",
        title: "Going to Pune",
        body: "MY body 2",
        reactions: 100,
        userId: "user-5",
        tags: ["Internship","Pune","Enjoying"],
    },
];
export default PostListProvider;