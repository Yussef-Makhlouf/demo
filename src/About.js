import React from "react";

class About extends React.Component {
    render() {
        return (
            // <div className="container py-5 d-flex flex">
            //     <h1 className="text-center ">About Me</h1>
            
            // </div>
                 <section className="py-5 text-center">
        <div className="container d-flex justify-content-around align-items-start ">
        <div className=" d-grid gap-5">
        <h2 className="mt-3">About me</h2>
             <a href="#" className=" mt-3 " download="resume.pdf" >
            <button className="btn btn-dark" >Download Resume</button>
          </a>
        </div>
        <p className="w-50 text-start lead ">
                    I am a web developer and designer with a passion for creating
                    beautiful and functional websites. I specialize in
                    front-end development using React and JavaScript. I have
                    experience with HTML, CSS, and JavaScript, and I am always looking for new technologies to learn. I am always looking for new challenges to
                    improve my skills and stay up-to-date with the latest
                    technologies. I am excited to work with you and help
                    you create a website that is both beautiful and functional
                    for your business.
                </p>
          {/* <p className="w-50 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p> */}
         
        </div>
     
      </section> 
        
        );
    }
}

export default About;