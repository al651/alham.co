import '../styles/Blog.css';
import websiteIcon from '../images/website-icon.png'
import hammerImage from '../images/develop-hammer-image.png'
import BlogPostButton from "../components/BlogPostButton"

const blogPosts = [ /* boilerplate table format: { title: '', description: '', img:  , imgalt: '', slug: '' } */
    { title: 'The Development of This Website', description: 'Welcome to my website! It took a lot of effort to create as I wanted the website to not use a template so I had to make everything from scratch.', img: websiteIcon, imgalt: 'A computer cursor clicking a rounded edge rectangle that has the text "WWW." inside.', slug: '/2022-09-24-blog-post', date: '2022-09-24', file: '2022-09-24-blog-post'},
    { title: 'Second Test Post', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ullamcorper metus, porttitor cursus ligula. Duis eu ultrices mauris. Aenean congue laoreet nulla, pulvinar varius quam condimentum in. Nullam sed fermentum urna. In elementum volutpat porttitor. Vivamus at vestibulum sapien. Vivamus commodo porta elit. Suspendisse posuere ipsum vitae condimentum volutpat. Donec vel leo consequat, efficitur sapien at, scelerisque leo. Morbi placerat ligula quis nulla fermentum, quis sodales dolor feugiat. Praesent sed commodo augue. Pellentesque imperdiet ante eget risus dictum, molestie mattis tellus elementum. Donec dapibus, quam non interdum viverra, tortor libero mollis erat, quis sagittis justo risus sed nulla. Suspendisse sed ullamcorper erat. Duis elementum est nisl, ac maximus lacus euismod sed.', img: hammerImage, imgalt: 'A drawing of a hammer.', slug: '/lorem', date: '2021-05-23'}
]

function Blog() {
    return (
        <div className="blog-posts">
        {
            blogPosts.map((post) => 
            <BlogPostButton title={post.title} description={post.description} img={post.img} slug={post.slug} alt={post.imgalt} date={post.date} />
            )
        }
        </div>
    );
}

export default Blog;