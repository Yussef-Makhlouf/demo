import React from "react";

class OneSkill extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
           <div className="col-md-4 mb-3 OneSkill w-100">

               <h4>{this.props.name}</h4>
               <div className="progress mb-2">
                <div className="progress-bar" style={{ width: this.props.level }}>{this.props.name}</div>
              </div>

           </div>
        );
    }
}

export default OneSkill;