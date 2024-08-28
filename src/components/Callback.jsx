import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";

const Callback = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/alltodos");
    }
  }, [isAuthenticated, navigate]);

  return <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center">
    <ThreeDots
        visible={true}
        height={80}
        width={80}
        color="#74F0ED"
        radius={9}
        ariaLabel="three-dots-loading"
    />
    </div>
};

export default Callback;
