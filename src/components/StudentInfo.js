import React, { useContext, useState } from "react";
import "../css/students.css";
import { Link } from "react-router-dom";
import dataContext from "../Data";

const StudentInfo = () => {
  const [data, setdata] = useContext(dataContext);
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
  const [batch, setBranch] = useState("")
  const handleSubmit = () => {
    const newStudent = {
      name: name,
      age: age,
      course: course,
      batch: batch
    }
    data.push(newStudent)
    setdata(data)
  }
  return (
    <>
      <form className="form-container">
        <div className="inp-container">
          <input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value)} />
          <label>Name</label>
        </div>
        <div className="inp-container">
          <input type="text" name="age" value={age} required onChange={(e) => setAge(e.target.value)} />
          <label>Age</label>
        </div>
        <div className="inp-container">
          <input type="text" name="course" value={course} required onChange={(e) => setCourse(e.target.value)} />
          <label>Course</label>
        </div>
        <div className="inp-container">
          <input type="text" name="batch" value={batch} required onChange={(e) => setBranch(e.target.value)} />
          <label>Batch</label>
        </div>
      </form>
      <div className="buttons">
        <button>Cancel</button>
        <Link to={'/students'}><button onClick={handleSubmit}>Submit</button></Link>
      </div>
    </>
  );
};

export default StudentInfo;
