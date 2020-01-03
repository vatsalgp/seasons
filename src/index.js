import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorDisplay from "./ErrorDisplay";

class App extends React.Component {

    state = { lat: null, errMsg: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({ lat: pos.coords.latitude }),
            err => this.setState({ errMsg: err.message })
        );
    }

    renderContent() {
        const lat = this.state.lat, err = this.state.errMsg;

        if (lat && !err)
            return <SeasonDisplay lat={lat} />
        else if (!lat && err)
            return <ErrorDisplay message={err} />
        else
            return <Spinner message="Please accept location request" />
    }

    render() {
        return <div className="content">{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));