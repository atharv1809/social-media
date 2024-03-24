import { createContext, useReducer } from "react";
export const PostListContext=createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});
const postListReducer=(currPostList,action)=>
{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId);
    }
    else{
        action.payload.tags=action.payload.tags.filter((tag)=>tag!==' ');
        newPostList=[action.payload,...currPostList];
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
    const deletePost=(postId)=>
    {
        dispatchPostList({type: 'DELETE_POST',payload: {postId: postId}});
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
        body: "My body 1",
        reactions: 2,
        userId: "user-9",
        tags: ["Vacation","Mumbai","Enjoying"],
    },
    {
        id: "2",
        title: "Going to Pune",
        body: "My body 2",
        reactions: 100,
        userId: "user-5",
        tags: ["Internship","Pune","Enjoying"],
    },
];
export default PostListProvider;