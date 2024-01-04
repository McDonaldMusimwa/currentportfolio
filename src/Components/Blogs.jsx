import styles from './Blogs.module.css';
import Blog from './Blogs/Blog';
const Blogs = () => {
  return (
    <div className={styles.Blogs}>
      <h3>Read my Post/Blogs</h3>
      <Blog />
    </div>
  )
}

export default Blogs