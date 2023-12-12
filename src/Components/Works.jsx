import styles from "./Works.module.css";
import Work from "./Works/Work";
import info from "../assets/projects";

const Works = () => {
  return (
    <div className={styles.Works}>
      <strong>
        <h3>Fruits of my labour</h3>
      </strong>
      <div className={styles.Projects}>
        {info.portfolio.map((project) => {
          return (
            <Work
              image={project.image}
              title={project.title}
              key={project.key}
              link={project.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
