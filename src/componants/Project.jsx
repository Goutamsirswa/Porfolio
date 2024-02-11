import React from 'react';
import projects from '../projectsDetail.js';
import useWindowWidth from '../windowWidth.js';
function Project() {
  const windowWidth=useWindowWidth();
  return (
    <>
      <div className='container'>
        <h1 className='text-white fw-bold py-5'>My Projects</h1>
        {projects.map((project, index) => (
          <div key={index} className={`d-flex  border-bottom ${windowWidth<786? 'flex-column py-3 my-2':'flex-row py-5 my-4 '}`}>
            <div className={`${windowWidth<786?'w-100 py-3 ':'w-75'}`}>
              <h3 className='py-2'>{project.P_name}</h3>
              <a className='btn btn-light' href={project.P_link} target='_blank' rel='noopener noreferrer'>Click to Show</a>
            </div>
            <div className='w-100'>
              {project.P_dis}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;