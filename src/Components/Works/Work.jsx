//import React from 'react';
import PropTypes from 'prop-types';
import styles from './Work.module.css'
//import arrow from '../../assets/arrow.png'

const Work = (props) => {

  return (
    <div className={`flex-col block w-full text-base p-4`}>



      <h3 className='m-1 p-2'>{props.title}</h3>

      <p>{props.description}</p>
      <div className={styles.work}>
      <img src={props.image} alt={props.title} className={styles.workimage} />
      <ul className='text-center md:text-left m-2 text-black'>
        <h4><strong>Tech stack used</strong></h4>
        <strong> <hr></hr></strong>
        {props.tech.map((item, index) => (
          <li key={index} className='block'>{item}</li>
        ))}
      </ul>
    </div>


      <h3 className='m-1 p-2'>Thought Process</h3>
      <p>{props.build_process}</p>
   
      <h3 className='m-1 p-2'>Challenges</h3>
      <p className='text-black'>{props.challenges}</p>
        {props.wip ? <em>Work in Progress not yet live</em> : null}
          <div className='flex text-black'>
          <a href={props.sourcecode} className='m-2'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Source Code</button></a>
          <a className='m-2' href={props.link}><button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} >Live</button></a>
          </div>

    </div>
  );
};

Work.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  sourcecode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  build_process: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  challenges:PropTypes.string.isRequired

};

export default Work;
