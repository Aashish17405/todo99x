import { useNavigate } from "react-router-dom";
import { checkAndRemoveExpiredToken } from "../../server/tokenService.js";
import { useEffect } from "react";
function PageNotFound(){
    const navigate = useNavigate();

    function isLoggedIn() {
        if (checkAndRemoveExpiredToken()) {
            navigate('/');
        }
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);
    return <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <p className="text-xl text-gray-600 mt-2">The page you requested does not exist.</p>
    </div>
}
export default PageNotFound;