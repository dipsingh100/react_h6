import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import StudentInfo from './components/StudentInfo'
import Error from './components/Error';
import dataContext from './Data';
import { useState } from 'react';
import Edit from './components/Edit';

const data = [
  { id:0, name: "John", age: 26, course: "MERN", batch: "October" },
  { id:1, name: "Doe", age: 25, course: "MERN", batch: "November" },
  { id:2, name: "Biden", age: 26, course: "MERN", batch: "September" },
  { id:3, name: "Barar", age: 22, course: "MERN", batch: "September" },
  { id:4, name: "Chirst", age: 23, course: "MERN", batch: "October" },
  { id:5, name: "Elent", age: 24, course: "MERN", batch: "November" },
  { id:6, name: "Harshita Sharma", age: 24, course: "MERN", batch: "October" },
];

function AppRoutes() {
  const [studentData, setStudentData] = useState(data)
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/students' element={
        <dataContext.Provider value={[studentData, setStudentData]}>
          <Students />
        </dataContext.Provider>
      } />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/edit/:id' element={<>{
        <dataContext.Provider value={[studentData, setStudentData]}>
          <Edit />
        </dataContext.Provider>
      }</>} />
      <Route path='/new_student' element={<>{
        <dataContext.Provider value={[studentData, setStudentData]}>
          <StudentInfo />
        </dataContext.Provider>
      }</>} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
