import PostContent from "../components/PostContent"
import '../styles/Post.css'

import {useEffect, useState} from "react"

const Post = () => {
    const [postContent, setPostContent] = useState("");
    return(
        <div className="post-content">
            <PostContent content={postContent} />
        </div>
    )
}

export default Post;