
import styles from './Technologies.module.css';
import TechItem from './TechItem';
import Data from '../../assets/projects';
const Technologies = () => {
 

    return (
        <div className={styles.Technologies}>
            <h2>My Specialities</h2>
            <div className={styles.techs}>
                {Data.skills.map((tech)=>{
                    return <TechItem title={tech.title} description={tech.description} key={tech.key} techs={tech.techs} />
                })}
            </div>
        </div>
    )
}

export default Technologies