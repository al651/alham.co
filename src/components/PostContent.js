import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import PostData from "../posts.json"

function PostContent(){
    return (
        <article className="content">
            {PostData.length &&
                PostData.map((post, i)=> {
                    return (
                        <Markdown children={post.content} rehypePlugins={[rehypeRaw]}/>
                    )
                })
            }
            
        </article>
    );
}

export default PostContent;

