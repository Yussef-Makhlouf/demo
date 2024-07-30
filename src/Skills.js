import React from "react";
import OneSkill from "./OneSkill";

class Skills extends React.Component {
  constructor() {
    super();
  }
    render() {
        return (
            <section className="bg-dark text-white py-5">

        <div className="container ">
          
         <div className="text-center py-4 mb-5">
         <h2>Skills</h2>
         <p>Lorem ipsum dolor sit amet...</p>
         </div>
          <div className="row">
        
            <div className="col-md-6 m-auto">
              <h4 className="mb-3 text-center">My Skills</h4>
              <ul className="list-unstyled">
                <OneSkill name="HTML" level="90%" />
                <OneSkill name="CSS" level="85%" />
                <OneSkill name="JavaScript" level="75%" />
                <OneSkill name="React" level="80%" />
                <OneSkill name="Photoshop" level="70%" />
                <OneSkill name="Adobe XD" level="60%" />
                <OneSkill name="Node.js" level="50%" />
                <OneSkill name="WordPress" level="65%" />
              </ul>
            </div>
          </div>
        </div>

      </section>
        );
    }
}

export default Skills;