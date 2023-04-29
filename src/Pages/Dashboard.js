import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/data")
      .then((res) => setData(res.data.result));
  };
  const create = () => {
    axios.post("http://localhost:8000/api/data");
  };
  console.log(data);
  return (
    <div className="w-100">
      <table className="w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">Car Model</th>
            <th scope="col">Car Number</th>
            <th scope="col">Phone</th>
            <th scope="col">Mechanic</th>
            <th scope="col">Work</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Total</th>
            <th scope="col">Payment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr className="border-bottom">
                <td>{i + 1}</td>
                <td>{e.date}</td>
                <td>{e.name}</td>
                <td>{e.carModel}</td>
                <td>{e.carNumber}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.mechanic}</td>
                <td>{e.work}</td>
                <td>{e.startTime}</td>
                <td>{e.endTime}</td>
                <td>{e.totalPrice}</td>
                <td>{e.payment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
