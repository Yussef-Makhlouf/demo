import React from "react";

class OnePortofolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mb-3 mb-4">
        <div className="card bg-success text-white   ">
          <div className="card-body">{this.props.name}</div>
          <div className="card-footer">{this.props.description}</div>
       
        </div>
        
           {/* <div className="col-md-4 mb-3">
            <div className="card bg-dark text-white">
              <div className="card-body">{this.props.name}</div>
            </div>
          </div> */}
     
        
      </div>
      
    );
  }
}

export default OnePortofolio;
