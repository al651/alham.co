import React from "react";
import ReactMarkdown from "react-markdown";

function PostContent(post){
    const content = post.content;
    
    return (
        <article className="content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}

export default PostContent;

