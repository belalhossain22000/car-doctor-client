import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const Login = () => {
 const {singnin}=useContext(AuthContext)

  const handleLogin=event =>{
    event.preventDefault();
    const form= event.target;
   
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    singnin(email, password)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="text-center lg:text-left">
         <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-5 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-full">Login</button>
            </div>
          </form>
          <p className="ml-7 mb-7 text-center">New to Car doctor <Link className="text-[#FF3811]" to="/signup">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
