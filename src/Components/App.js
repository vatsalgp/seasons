import React from "react";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";
import ErrorDisplay from "./ErrorDisplay";
import useLocation from "./useLocation";

const App = () => {

    const { lat, err } = useLocation();
    let content;

    if (lat && !err)
        content = <SeasonDisplay lat={lat} />
    else if (!lat && err)
        content = <ErrorDisplay message={err} />
    else
        content = <Spinner message="Please accept location request" />

    return <div className="content">{content}</div>
};

export default App;