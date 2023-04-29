import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Order() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/order")
      .then((res) => setData(res.data.result));
  };
  const deleteOrder = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/order/${id}`)
      .then(console.log("Amjilttai ustgalaa"));
    getData();
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Work</th>
            <th scope="col">Mechanic</th>
            <th scope="col">Phone</th>
            <th scope="col">Car Number</th>
            <th scope="col">Car Model </th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>
                  {item.date}...
                  {item.time}
                </td>
                <td>{item.work}</td>
                <td>{item.Mechanic}</td>
                <td>{item.Phone}</td>
                <td>{item.carNum}</td>
                <td>{item.carModel}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteOrder(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
