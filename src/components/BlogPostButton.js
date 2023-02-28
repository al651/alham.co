import '../styles/BlogPostButton.css'
import { TiTime } from "react-icons/ti";

function BlogPost(props){
    const title = props.title;
    const description = props.description;
    const img = props.img;
    const href = props.href;
    const alt = props.imgalt;
    const date = props.date;
    
    return (
        <div className="blog-post-wrapper">
            <img src={img} alt= {alt} className='postImg'></img>
            <div className='blog-post-content-wrapper'>
                <button href={href}>
                    {title}
                </button>
            <p className='description-text'>
                {description}
                <div className='post-details-wrapper'>
                    <TiTime/>
                    <span className='seperator'></span>
                    <time dateTime={date}>{date}</time>
                </div>
            </p>
            </div>

            
            
            

            {/* <div className="buttonWrap">
                <img className='buttonImage' background={img} alt={alt}></img>
                <div className="buttonContent">
                    <a draggable="false" className="blogPostButton" href={href}>
                    <div className="textWrap">
                        <span className="buttonTextTitle">
                            {title}
                        </span>
                        <span className="buttonTextDesc">
                            {description}
                        </span>
                    </div>
                </a>
            </div>
        </div> */}
    </div>
    );
}
             
export default BlogPost;