import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null || user.role !== 'recruiter') {
            navigate("/", { replace: true });  // Adding 'replace' prevents going back to the protected route using the back button
        }
    }, [user, navigate]);  // add user and navigate to the dependency array

    // return null or a loading state while checking the user status
    if (user === null || user.role !== 'recruiter') {
        return null;  // you could show a loading indicator here!!
    }

    return <>{children}</>;
};

export default ProtectedRoute;
