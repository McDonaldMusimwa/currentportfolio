//import React from 'react';
import PropTypes from 'prop-types';
import styles from './Work.module.css';
import arrow from '../../assets/arrow.png'

const Work = (props) => {

  return (
    <div className={styles.Card}>

      <div className={styles.Text}>
        <span><strong>Project</strong> </span>
        <p>{props.title}</p>
        <a href={props.link}><img src={arrow} alt="arrow" /></a>
      </div>

      <img src={props.image} alt={props.title} />
    </div>
  );
};

Work.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link:PropTypes.string.isRequired

};

export default Work;
