import styles from './Blog.module.css';
import Data from '../../assets/projects'
import BlogItem from './BlogItem';

const Blog = () => {
    return (
        <div className={styles.Blog}>
            {Data.posts.map((post) => {
                return <BlogItem title={post.title} image={post.image} date={post.date} key={post.key} link={post.link}/>
            })}
        </div>
    )
}

export default Blog