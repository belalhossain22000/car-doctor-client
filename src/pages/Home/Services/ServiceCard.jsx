import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price,_id } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex  items-center">
          <p className="text-[#FF512E]">price: ${price}</p>
          <div className="card-actions">
           <Link to={`/book/${_id}`}> <button className="btn btn-full">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
