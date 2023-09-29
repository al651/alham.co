import '../styles/BlogPostCard.css'
import { TiTime } from "react-icons/ti";
import { Link } from "react-router-dom";

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
                        <Link to={`/blog/${post.slug}`}>
                            <img src={post.card_img} className="postImg" />
                        </Link>
                            <h3>
                                <Link className='post-title' to={`/blog/${post.slug}`}>{post.title}</Link>
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