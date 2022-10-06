import Badge from './common/badge';
import Button from './common/button';
import ButtonContainer from './common/buttonContainer';
import ProjectTagsContainer from './projectTagsContainer';

const ProjectWrapper = ({ buttonLinks, description, imgPath, isActive, projectTitle, tags }) => {

  return (
    <div className='m-2 animate-appearence'>
      <div className={'bg-white rounded-2xl ' + (!isActive && 'opacity-50')} style={isActive ? { height: '570px', width: '350px' } : { height: '510px', width: '310px' }}>
        <div className='m-2 pt-2'>
          <img alt='e-commerce book shop' className='object-cover rounded-lg' style={isActive ? { width: '334px', height: '300px' } : { width: '300px', height: '270px' }} src={imgPath} />
        </div>
        <div className='m-2'>
          <h2 className={isActive ? 'text-2xl' : 'text-lg'}>{projectTitle}</h2>
          <ProjectTagsContainer>
            {
              tags.map(tag => (
                <Badge
                  isActive={isActive}
                  key={tag.id}
                  text={tag.text}
                  background={tag.background}
                />
              ))}
          </ProjectTagsContainer>
          <p className={isActive ? 'mb-16' : 'mb-6 text-sm'}>{description}</p>
        </div>
        <ButtonContainer>
          {
            buttonLinks.map(button => (
              <Button
                isActive={isActive}
                key={button.id}
                text={button.name}
                href={button.link}
                background={button.background}
              />
            ))
          }
        </ButtonContainer>
      </div>
    </div>
  );
}

export default ProjectWrapper;