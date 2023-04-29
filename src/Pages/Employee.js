import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Employee() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/employee")
      .then((res) => setData(res.data.result));
  };
  return (
    <div className="w-100 d-flex flex-wrap">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Proffesional</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.job}</td>
                <td>{e.phone}</td>
                <td className="d-flex justify-content-between">
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
