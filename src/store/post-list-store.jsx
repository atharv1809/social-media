import { createContext, useReducer } from "react";
const PostList=createContext({
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
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);
    return <PostList.Provider value={{postList: postList, addPost: addPost, deletePost: deletePost}}>
        {children}
    </PostList.Provider>
}
export default PostListProvider;