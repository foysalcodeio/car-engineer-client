import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .then(error => {
                console.log(error)
            })

    }



    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <h1 className="text-3xl font-bold text-center text-black">Sign-Up</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input bg-white text-black input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input bg-white text-black input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input bg-white text-black input-bordered" autoComplete="current-password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link text-black link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-error text-white" type="submit" value="register" />
                        </div>
                    </form>
                    <p className='my-2 text-center'>Already have an account ?
                        <Link to="/login" className='text-orange-600 font-bold'> Login </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
