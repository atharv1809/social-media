import { createContext } from "react";

const PostList=createContext({});
function PostListProvider({children})
{
    const [postList,dispatchPostList]=useReducer();
    return <PostList.Provider value={[]}>
        {children}
    </PostList.Provider>
}
export default PostListProvider;