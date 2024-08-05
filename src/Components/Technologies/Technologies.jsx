import styles from "./technologies.module.css";
import TechItem from "./TechItem";
import Data from "../../assets/projects";
const Technologies = () => {
  return (
    <div className={styles.Technologies}>
      <h3 className="m-2 md:text-center" style={{ textAlign: "çenter" }}><strong>Skills</strong></h3>
      <br />
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
