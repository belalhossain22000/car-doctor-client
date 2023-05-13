import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BokingCard from "./BokingCard";
import { useNavigate } from "react-router-dom";

const Bokings = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const [bokings, setBokings] = useState([]);
  console.log(user)

  useEffect(() => {
    const url = `http://localhost:5000/boking?email=${user?.email}`;
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data?.error) {
          setBokings(data);
        } else {
          navigate("/");
        }
      });
  }, [ navigate,user]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete success");
            const remaining = bokings.filter((booking) => booking._id !== id);
            setBokings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modified) {
          alert("modified");
          const remaining = bokings.filter((booking) => booking._id !== id);
          const updated = bokings.find((boking) => boking._id === id);
          updated.status = "confirm";
          const newBokings = [updated, ...remaining];
          console.log(newBokings);
          setBokings(newBokings);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5">
        Your bokings:{bokings.length}
      </h1>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Image</th>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bokings.map((boking) => (
                <BokingCard
                  key={boking._id}
                  boking={boking}
                  handleDelete={handleDelete}
                  handleBookingConfirm={handleBookingConfirm}
                ></BokingCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bokings;
