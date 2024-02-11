import education from "../education.js";
import experience from "../experience.js"
import useWindowWidth from '../windowWidth.js';

function Resume() {
  const windowWidth=useWindowWidth(); 
  return (
    <>
     <div className={`container d-flex p-4 my-5 ${windowWidth < 768 ? 'flex-column' : 'flex-row'}`}>

        <div className='w-100'>
          <h1 className='fw-bolder py-3'>My Resume</h1>
          <a href="https://drive.google.com/file/d/1x-PY3IGcobMQc7kUpiLVMK8lZGNFQcYg/view?usp=sharing" target='_blank' className='nav-link icon-link'>Resume PDF</a>
        </div>
        <div className='w-100'>
        <hr />
          <details className='my-3'>
            <summary className='fs-2 fw-bold'>Education</summary>
            {education.map((edu, index) => (
              <ul key={index} className='nav py-3'>
                <li className='d-flex gap-5'>
                  <div className=''>
                    <p className='fw-bold'>{edu.C_name}</p>
                    <p>{edu.S_name}</p>
                  </div>
                  <div className='fw-bolder '>{edu.year}</div>
                </li>
              </ul>
            ))}

          </details>
<hr />
          <details>
            <summary className='fs-2 fw-bold'>Skils</summary>
            <p className='py-3'> 
              HTML+CSS,
              JavaScript,
              React,
              SQL,
              C-language,
              Core JAVA,
              Core Python,
              Mongo DB,
            </p>
          </details>
          <hr />
          <details className='my-3'>
            <summary className='fs-2 fw-bold'>Exprience</summary>
            {experience.map((exp, index) => (
              <ul key={index} className='nav py-3'>
                <li className='d-flex gap-5'>
                  <div className=''>
                    <p className='fw-bold'>{exp.C_name}</p>
                    <p>{exp.S_name}</p>
                  </div>
                  <div className='fw-bolder '>{exp.year}</div>
                </li>
              </ul>
            ))}

          </details>
          <hr />
        </div>
      </div>
      
    </>
  )
}

export default Resume