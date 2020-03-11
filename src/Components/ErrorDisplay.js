import React from "react";

const ErrorDisplay = props =>
    <div className="ui active dimmer">
        <h1 style={{ color: "white" }}>{"Error " + props.message}</h1>
    </div>

export default ErrorDisplay;