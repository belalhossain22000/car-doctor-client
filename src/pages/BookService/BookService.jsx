import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const {user}=useContext(AuthContext)
  const { title, img, price, _id } = service;

  //handle book service

  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;


    const booking={
        coustomeName:name,
        email,
        img,
        date,
        service:title,
        service_id:_id,
        price:price
    }
    console.log(booking);

    fetch('http://localhost:5000/booking',{
        method: 'POST',
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(booking)
    })
    .then((res) => res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert('data inserted successfully')
        }
    })

  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center ">Service Name :{title}</h2>

      <form onSubmit={handleBookService} className="card-body ">
        <div className="grid grid-cols-2 gap-7">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={user?.name}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due </span>
            </label>
            <input
              type="text"
              name="price"
             defaultValue={"$ "+price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-full w-full">Login</button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
