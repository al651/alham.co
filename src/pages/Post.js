import Markdown from 'react-markdown'

import '../styles/Post.css'

import PostData from "../posts.json"

import { TiArrowBack } from "react-icons/ti"

import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import NotFound from "../pages/NotFound"
import rehypeRaw from "rehype-raw"

import { Link, useParams } from "react-router-dom"

const Post = () => {
    const { id } = useParams()

    const fetchedPost = {}
    let postExists = false
    PostData.forEach((post,i) => {
        if (id === post.slug) {
            fetchedPost.title = post.title ? post.title : "No title provided"
            fetchedPost.date = post.date ? post.date : "No date provided"
            fetchedPost.content = post.content ? post.content : "Work in progress"
            postExists = true
        }
    })

    if (postExists === false){
        return <NotFound />
    }

    return(
        <div className="post-wrapper">
            <nav className="post-nav-buttons">
                <Link className='back-button' to={`/blog`}><TiArrowBack size="40" /></Link>
            </nav>
        
            <div className="post">
                <h1 className="actual-post-title">{fetchedPost.title}</h1>
                <small className="post-date">{fetchedPost.date}</small>

                <br></br>
                <br></br>
                
            <div className="post-content"></div>
                <Markdown key={fetchedPost.id} children={fetchedPost.content} rehypePlugins={[rehypeRaw]} components={{iframe: LiteYouTubeEmbed}}/> 
            </div>
        </div>
    )
}

export default Post;