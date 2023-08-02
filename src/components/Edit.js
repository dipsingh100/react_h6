import React, { useContext , useState} from 'react'
import "../css/students.css";
import { useParams, useNavigate } from "react-router-dom";
import dataContext from '../Data';

const Edit = () => {
  const navigate = useNavigate()
  const id = parseInt(useParams().id)
  const [data, setdata] = useContext(dataContext);
  const [name, setName] = useState(data[id].name)
  const [age, setAge] = useState(data[id].age)
  const [course, setCourse] = useState(data[id].course)
  const [batch, setBatch] = useState(data[id].batch)
  const handleSubmit = () => {
    const newStudent = {
      name: name,
      age: age,
      course: course,
      batch: batch
    }
    data[id] = newStudent
    setdata(data)
    navigate('/students')
  }
  return (
    <>
    <div className="container">
      <h1>Update Student</h1>
        <form className="form-container">
          <div className="inp-container">
            <input type="text" name="name" value={name} required onChange={(e)=>setName(e.target.value)}/>
            <label>Name</label>
          </div>
          <div className="inp-container">
            <input type="text" name="age" value={age} required onChange={(e)=>setAge(e.target.value)}/>
            <label>Age</label>
          </div>
          <div className="inp-container">
            <input type="text" name="course" value={course} required onChange={(e)=>setCourse(e.target.value)}/>
            <label>Course</label>
          </div>
          <div className="inp-container">
            <input type="text" name="batch" value={batch} required onChange={(e)=>setBatch(e.target.value)}/>
            <label>Batch</label>
          </div>
        </form>
        <div className="buttons">
          <button onClick={()=>navigate('/students')}>Cancel</button>
          <button onClick={handleSubmit}>Update</button>
        </div>
    </div>
    </>
  )
}

export default Edit
