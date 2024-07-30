import React from "react";
class OneProgress extends React.Component {
    render() {
        return (
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: this.props.progress + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {this.props.progress}%
                </div>
            </div>
        );
    }
}

export default OneProgress;