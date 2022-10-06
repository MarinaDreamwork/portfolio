import './App.css';
import Arrows from './components/arrows';
import ContactContainer from './components/contactContainer';
import ProjectsWrapper from './components/projectsWrapper';
import SectionWrapper from './components/sectionWrapper';
import { useEffect, useState } from 'react';
import { data } from './db/data';

const App = () => {
  const [projects, setProjects] = useState(data);

  const [activePage, setActivePage] = useState(null);

  const changeActive = () => {
    const changed = projects.map(elem => {
      if (elem.id === activePage) {
        if (!elem.isActive) {
          return { ...elem, isActive: true }
        } else {
          return { ...elem, isActive: false }
        }
      } 
      return { ...elem, isActive: false }
    });
    return changed;
  };

  const handleChoose = ({ currentTarget }) => {
    const lastProject = projects.length;
    const side = currentTarget.getAttribute('data-direction');
    if (activePage === 1) {
      if (side === 'right') {
        setActivePage(prevState => ++prevState);
      } 
    } else if(activePage === lastProject) {
      if (side === 'left') {
        setActivePage(prevState => --prevState);
      }
    } else {
      checkDirection(currentTarget);
    }
  };

  const checkDirection = (currentTarget) => {
    const side = currentTarget.getAttribute('data-direction');
    if (side === 'right') {
      setActivePage(prevState => ++prevState);
    } else if(side === 'left') {
      setActivePage(prevState => --prevState)
    }
  };

  useEffect(() => {
    setActivePage(3);
  }, [])

  useEffect(() => {
    setProjects(changeActive());
  }, [activePage]);

  return (
    <div className="App">
      <SectionWrapper background='bg-[#F5EFE6]' titleText='My projects'>
        <ProjectsWrapper projects={projects} activePage={activePage}/>
        <Arrows onChoose={handleChoose} activePage={activePage}/>
      </SectionWrapper>
      <SectionWrapper background='bg-[#9368332a]' titleText='Contact info'>
        <ContactContainer />
      </SectionWrapper>
    </div>
  );
};

export default App;
