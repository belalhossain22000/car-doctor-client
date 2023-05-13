import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname||"/"

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)
            navigate(from,{replace:true})
        })
        .catch(err => console.error(err.message));
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center items-center my-7 gap-6">
        <button onClick={handleGoogleLogin} class="btn btn-circle btn-outline  w-20 ">Google</button>
        <button class="btn btn-circle btn-full w-20 ">Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
