import { useState } from 'react';
import PlusCircle from '../../assets/PlusCircle.png';
import MinusCircle from '../../assets/MinusCircle.png';
import dot from '../../assets/dot.png';
import styles from './TechItem.module.css';
import PropTypes from 'prop-types';

const TechItem = (props) => {
  const [table, setTable] = useState(false);

  const TableHandler = () => {
    return {
      open: () => setTable(true),
      close: () => setTable(false),
    };
  };

  const techList = props.techs.map((tech, index) => (
    <li key={index}>{tech}</li>
  ));

  return (
    <div className={styles.TechItem}>
      <h3>
        <img src={dot} alt="dot" /> {props.title}
      </h3>
      <div>
        {props.description}
        <div className={styles.List}>{table ? techList : null}</div>
      </div>
      {table ? (
        <img className={styles.Click} src={MinusCircle} alt="click" onClick={TableHandler().close} />
      ) : (
        <img className={styles.Click} src={PlusCircle} alt="click" onClick={TableHandler().open} />
      )}
    </div>
  );
};

TechItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  // Add more prop validations if needed
};

export default TechItem;
