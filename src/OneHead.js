import React from "react";

class OneHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="rounded-circle  bg-dark text-white mb-4  mx-auto">
                <img src={this.props.img} alt="" />
                </div>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <button className="btn btn-outline-light mt-3 w-25 mx-auto">{this.props.button}</button>
            </div>
        );
    }
}

export default OneHead;