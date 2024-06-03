import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
const Login = () => {
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log('location is ', location)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        

        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = { email };

            // get access token
            axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                .then(res => {
                    console.log(res.data)
                    if (res.data.success) {
                        navigate(location?.state ? location?.state : '/')
                    }
                })

        })
        .catch(error => console.log(error));
    }


    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                <img src={img} alt="" />
            </div>

            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center text-black">Login</h1>

                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input bg-white text-black input-bordered" required autoComplete="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input bg-white text-black input-bordered" required autoComplete="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link text-black link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-error text-white" type="submit" value="login" />
                        </div>
                    </form>
                </div>
                <p className='my-2 text-center'>New to Car Engineers?
                    <Link to="/signup" className='text-orange-600 font-bold'> Sign Up</Link>
                </p>

            </div>
        </div>
    </div>
    );
};

export default Login;   