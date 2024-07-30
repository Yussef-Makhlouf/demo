import React from "react";

class ClassAppComp extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "John",
        }

        this.changeName = this.changeName.bind(this);
        
    }

    render() {
        return <h1>Hello, {this.state}</h1>;
    }
}
export default ClassAppComp;
