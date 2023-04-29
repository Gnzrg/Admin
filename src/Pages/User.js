import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/user")
      .then((res) => setData(res.data.result));
  };
  console.log(data);
  return (
    <div className="w-100">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
