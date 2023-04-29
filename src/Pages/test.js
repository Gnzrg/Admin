import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
  const [mechData, setMechData] = useState([]);
  const [dateVal, setDateVal] = useState("");
  const [test, setTest] = useState([]);
  const [time, setTime] = useState([]);
  const [dateData, setDateData] = useState([]);
  const [workData, setWorkData] = useState([]);
  const [timeVal, setTimeVal] = useState("");
  const [workVal, setWorkVal] = useState("");
  const [mechVal, setMechVal] = useState("");
  const [phone, setPhone] = useState("");
  const [carNumVal, setCarNumVal] = useState("");
  const [carModelVal, setCarModelVal] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8000/api/employee")
      .then((res) => setMechData(res.data.result));
    axios
      .get("http://localhost:8000/api/time")
      .then((res) => setDateData(res.data.result));
    axios
      .get("http://localhost:8000/api/work")
      .then((res) => setWorkData(res.data.result));
  };
  console.log(carModelVal);
  const createOrder = () => {
    if (phone.length == 8) {
      axios.post("http://localhost:8000/api/order", {
        date: dateVal,
        time: timeVal,
        work: workVal,
        Mechanic: mechVal,
        Phone: phone,
        carNum: carNumVal,
        carModel: carModelVal,
      });
      console.log("Success");
    } else {
      console.log("Wrongd");
    }
  };
  const getTime = () => {
    if (dateVal) {
      axios.get("http://localhost:8000/api/order").then((res) => {
        test.map((item) => {
          setTest(res.data.result);
          let newArr = [];
          if (item.date === dateVal) {
            console.log("Eq");
            newArr.push(item.time);
            console.log(newArr);
          }
        });
      });
    }
  };

  return (
    <div className="">
      <div className="d-flex">
        <select
          className="form-control"
          onChange={(e) => setWorkVal(e.target.value)}
        >
          <option value="0">Select Wotk</option>
          {workData.map((e, index) => {
            if (!e.parent) {
              return (
                <option key={index} value={e.name}>
                  {e.name}
                </option>
              );
            }
          })}
        </select>
        <select className="form-control">
          <option value="0">Select</option>
          {workData.map((e, index) => {
            if (e.parent) {
              return (
                <option key={index} value={e.name}>
                  {e.name}
                </option>
              );
            }
          })}
        </select>
        <select
          className="form-control"
          onChange={(e) => setMechVal(e.target.value)}
        >
          <option value="0">Mechanic</option>
          {mechData.map((e, index) => {
            return (
              <option key={index} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <input
          type="date"
          className="form-control"
          onChange={(e) => {
            setDateVal(e.target.value);
          }}
        />
        <select
          className="form-control"
          onChange={(e) => setTimeVal(e.target.value)}
        >
          <option value="0">Time</option>
          {dateData.map((e, index) => {
            return (
              <option key={index} value={e.time}>
                {e.time}
              </option>
            );
          })}
        </select>
        <select
          className="form-control"
          onChange={(e) => setCarModelVal(e.target.value)}
        >
          <option value="Prius20">Prius 20</option>
          <option value="Prius30">Prius 30</option>
        </select>
        <input
          type="text"
          placeholder="Car Number"
          className="form-control"
          onChange={(e) => setCarNumVal(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number "
          className="form-control"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button onChange={createOrder} className="btn btn-primary">
        Add
      </button>
      <div className="d-flex justify-content-center mt-5"></div>
    </div>
  );
}
