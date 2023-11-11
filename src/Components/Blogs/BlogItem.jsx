import PropTypes from 'prop-types';
import styles from './BlogItem.module.css';

const BlogItem = (props) => {
    console.log(props)
    return (
        <div className={styles.Blog}>
            <div className={styles.image}><img src={props.image} alt={props.title} /></div>
            <p><strong>{props.date}</strong></p>
            <span><strong><a href={props.link}>{props.title}</a></strong></span>

        </div>
    )
}
BlogItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    // Add more prop validations if needed
};

export default BlogItem