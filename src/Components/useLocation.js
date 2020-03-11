import { useState, useEffect } from "react";

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [err, setErr] = useState("");

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            pos => setLat(pos.coords.latitude),
            err => setErr(err.message)
        )
    });

    return { lat, err };
};

export default useLocation;