import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl">
                    <form className="card-body">
                    <h1 className="text-3xl font-bold text-center text-black">Login</h1>

                        <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='name' className="input bg-white text-black input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" placeholder="password"  name='password' className="input bg-white text-black input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link text-black link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error text-white" type="submit" value="login" />
                        </div>
                        </form>
                    </form>
                    <p className='my-2 text-center'>New to Car Engineers? 
                        <Link to="/signup" className='text-orange-600 font-bold'> Sign Up</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;   