import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card = ({ service }) => {
    const {_id, title, img, price} = service;
    return (
        <div className="card w-96 bg-gray-50 shadow-2xl space-y-5 mb-4">
        <figure><img className="h-64 max-h-auto w-full" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-2xl, font-bold text-orange-500"> ${price} / per hour</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
              <button className="btn bg-orange-500 border-none text-white">Book Now <FaArrowRightLong /> </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Card;