import React from "react";
import OnePortoFolio from "./Oneportofolio";
class Portfolio extends React.Component {
    
    render() {
        return (
          

          <section className="py-5 text-center">
          <div className="container">
            <h2>Portfolio</h2>
            <div className="row">
              <div className="col-md-4 mb-3 d-flex align-items-center justify-content-around gap-3 w-100 ">
               
                  <OnePortoFolio 
                    name="WEB DESIGN"
                    description="Web design encompasses many different skills and disciplines in
                    the production and maintenance of websites. The different areas
                     "
                    img="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-photography.png"
                  />
                  <OnePortoFolio 
                    name="WEB DESIGN"
                    description="Web design encompasses many different skills and disciplines in
                    the production and maintenance of websites. The different areas
                     "
                    img="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-photography.png"
                  />
                  <OnePortoFolio 
                    name="WEB DESIGN"
                    description="Web design encompasses many different skills and disciplines in
                    the production and maintenance of websites. The different areas
                     "
                    img="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-photography.png"
                  />
                  <OnePortoFolio 
                    name="WEB DESIGN"
                    description="Web design encompasses many different skills and disciplines in
                    the production and maintenance of websites. The different areas
                     "
                    img="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-photography.png"
                  />
                
                
              </div>
             
            </div>
          </div>
        </section>

        );
    }
}

export default Portfolio;