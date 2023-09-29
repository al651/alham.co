import '../styles/BlogPostCard.css'
import { TiTime } from "react-icons/ti";

import React from "react";

import PostData from "../posts.json"

const BlogPostCard = () => {
    return (
        <div className="post-list">
        {PostData.length &&
            PostData.map((post, i)=> {
                return (
                    <div key={post.id} className='post-card-wrapper'>
                        <div className="post-card">
                            <a href={"/blog"+post.slug}><img src={post.card_img} className='postImg'></img></a>
                            <h3>
                                <a className='post-title' href={"/blog" + post.slug}>{post.title}</a>
                            </h3>
                            <p>
                            </p>
                                <div className='post-details-wrapper'>
                                    <TiTime/>
                                    <span className='icon-seperator'></span>
                                    <time dateTime={post.date}>{post.date}</time>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}
                   
export default BlogPostCard;