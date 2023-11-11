import styles from './Blogs.module.css';
import Blog from './Blogs/Blog';
const Blogs = () => {
  return (
    <div className={styles.Blogs}>
      <h2>Read my Post/Blogs</h2>
      <Blog />
    </div>
  )
}

export default Blogs