import { createContext, useReducer } from "react";
export const PostListContext=createContext({
    postList: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {},
});
const postListReducer=(currPostList,action)=>
{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
    }
    else if(action.type==='ADD_POST'){
        action.payload.tags=action.payload.tags.filter((tag)=>tag!==' ');
        newPostList=[action.payload,...currPostList];
    }
    else if(action.type==='ADD_INITIAL_POSTS'){
        newPostList=action.payload.posts;
    }
    return newPostList;
}
function PostListProvider({children})
{
    const addPost=(userId, postTitle, postBody, reactions, tags)=>
    {
        dispatchPostList({type: 'ADD_POST',payload: {
            id: Date.now(),
            title: postTitle,
            body: postBody,
            reactions: reactions,
            userId: userId,
            tags: tags,
        }});
    }
    const addInitialPosts=(posts)=>
    {
        dispatchPostList({type: 'ADD_INITIAL_POSTS',payload: {
            posts: posts,
        }})
    }
    const deletePost=(postId)=>
    {
        dispatchPostList({type: 'DELETE_POST',payload: {postId: postId}});
    }
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);
    return <PostListContext.Provider value={{postList: postList, addPost: addPost, deletePost: deletePost, addInitialPosts: addInitialPosts}}>
        {children}
    </PostListContext.Provider>
}
export default PostListProvider;