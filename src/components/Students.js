import React, { useContext } from "react";
import "../css/students.css";
import { Link } from "react-router-dom";
import dataContext from "../Data";

const Students = () => {
  const [data] = useContext(dataContext);
  return (
    <>
      <div className="container">
        <div className="title-cont">
          <h1>Students Details</h1>
          <Link to='/new_student'>
            <button className="add-new-st">
              Add new student
            </button>
          </Link>
        </div>
        <div className="table-cont">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                      <Link to={'/edit/' + index}>Edit</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
