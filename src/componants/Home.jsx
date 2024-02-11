import React from 'react'
import gs from "../../public/goutamsirswa.png"
import "../css/home.css"
import useWindowWidth from '../windowWidth'

function Home() {
    const windowWidth = useWindowWidth();
    return (
        <div className="main container">
            <div className="st-profile d-flex justify-content-center align-items-center flex-column flex-md-row gap-5 p-4 py-5">
                <div className="st-img rounded-circle d-flex justify-content-center ">
                    <img src={gs} alt="profile img" />
                </div>
                <div className="discription text-white fs-1 fw-bold text-center text-md-start">
                    Pursuing Master of Computer Appliction(MCA) from Poornima University..
                </div>
            </div>

            <div className="section-2 d-flex flex-column flex-md-row py-5 ">
                <div className="inro-section w-100 d-flex justify-content-center align-items-center gap-5">
                    <p className={`${windowWidth < 786 ? 'd-none' : 'text-white border-top border-white w-25'}`}></p>
                    <p className='text-white fs-5 a'>
                        Intro
                    </p>
                </div>
                <div className="discription-section w-100 text-white fs-4">
                    With a Bachelor's degree in Computer Science and handson experience in various programming languages such as
                    Java, C++, and Python, I am well-equipped to take on
                    challenging coding tasks and contribute to innovative
                    projects. I am also proficient in web technologies including
                    HTML, CSS, and JavaScript, and have a good
                    understanding...
                </div>
            </div>
        </div>
    )
}

export default Home
