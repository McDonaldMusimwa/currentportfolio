import styles from "./Works.module.css";
import Work from "./Works/Work";
import info from '../assets/projects'

const Works = () => {
  return (
    <div className={`${styles.Works} lg:ml-80`} id="works">
      <strong>
        <h3>Project Experience</h3>
        <hr/>
      </strong>
      <div className={`${styles.Projects}`}>
        {info.portfolio.map((project) => {
          return (
            <Work
              image={project.image}
              title={project.title}
              key={project.key}
              link={project.live}
              sourcecode={project.source}
              build_process={project.build_process}
              description={project.description}
              tech={project.tech}
              challenges={project.challenges}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
