import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  
  useEffect(() => {
    if (user?.email) {
      axios.get(url, {withCredentials: true})
        .then(response => {
          setBookings(response.data); // use response.data to set the bookings
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    }
  }, [url, user?.email]);

  // useEffect(() => {
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setBookings(data)
  //   })
  // })

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('Deleted successfully');
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch(error => {
          console.error('Error deleting booking:', error);
        });
    }
  }

  /*
  Advanced system
  
   const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: 'confirm' })
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount > 0) {
        const updatedBookings = bookings.map(booking =>
          booking._id === id ? { ...booking, status: 'confirm' } : booking
        );
        setBookings(updatedBookings);
      }
    })
    .catch(error => {
      console.error('Error updating booking:', error);
    });
  }
  */
  



  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
}

  return (
    <div className="my-auto text-black">
      <h2 className="text-3xl mt-5 mb-5">Your Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-black text-bold">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Job Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.length > 0 ? (
                bookings.map(booking => (
                  <BookingRow
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6">No bookings found</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
