import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [Onlinestatus, setOnlinestatus] = useState(true);

    useEffect(() => {
        const handleOffline = () => setOnlinestatus(false);
        const handleOnline = () => setOnlinestatus(true);

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return Onlinestatus;
}

export default useOnlineStatus;
