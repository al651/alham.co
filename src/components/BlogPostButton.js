import '../styles/BlogPostButton.css'
import { TiTime } from "react-icons/ti";

function BlogPost(props){
    const title = props.title;
    const description = props.description;
    const img = props.img;
    const href = ('blog' + props.href);
    const alt = props.imgalt;
    const date = props.date;
    
    return (
        <div className='blog-post-wrapper'>
            <div className="blog-card">
            <a href={href}><img src={img} alt= {alt} className='postImg'></img></a>
            <h3><a class='blog-title' href={href}>{title}</a></h3>
            <div className='blog-post-content-wrapper'>
            <p className='description-text'>
                {description}
            </p>
            </div>
            <div className='post-details-wrapper'>
                <TiTime/>
                <span className='seperator'></span>
                <time dateTime={date}>{date}</time>
            </div>
        </div>
    </div>
    );
}
             
export default BlogPost;