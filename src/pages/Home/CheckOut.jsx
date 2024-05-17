import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    return (
        <div>
            <img src="https://i.ibb.co/RS9w3TQ/checkout.png" alt="" />
            <h2>Book Service : {title} </h2>

            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="email" placeholder="First Name" className="input input-bordered" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <input type="password" placeholder="Last Name" className="input input-bordered" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    
                </div>


                </div>
                <div className="form-control mt-6 mb-3">
                    <input className="btn text-white bg-orange-500 border-none btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>

        </div>
    );
};

export default CheckOut;