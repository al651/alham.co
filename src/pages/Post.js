import PostContent from "../components/PostContent"
import '../styles/Post.css'

import {useEffect, useState} from "react"

const Post = () => {
    const [postContent, setPostContent] = useState("");

    const markdown = ('2022-09-24-blog-post' + '.md');

    useEffect(() => {
        import("./markdown/" + markdown)
        .then(res => {
            fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err))
        })
    })

    return(
        <div className="post-content">
            <PostContent content={postContent} />
        </div>
    )
}

export default Post;