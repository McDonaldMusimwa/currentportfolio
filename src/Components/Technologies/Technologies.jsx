import styles from "./technologies.module.css";
import TechItem from "./TechItem";
import Data from "../../assets/projects";
const Technologies = () => {
  return (
    <div className={styles.Technologies}>
      <h3 style={{ textAlign: "çenter" }}>My Specialities</h3>
      <div className={styles.techs}>
        {Data.skills.map((tech) => {
          return (
            <TechItem
              title={tech.title}
              description={tech.description}
              key={tech.key}
              techs={tech.techs}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
