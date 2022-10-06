import ProjectWrapper from './projectWrapper';

const ProjectsWrapper = ({ projects }) => {

  return (
    <div className='flex justify-around self-center'>
      {
        projects.map(project => (
          <ProjectWrapper key={project.id} {...project} />
        ))
      }
    </div>
  );
};

export default ProjectsWrapper;