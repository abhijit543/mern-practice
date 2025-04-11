import React, { useEffect, useState } from "react";

const StudentsNested = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/studentsNested")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <h2>Nested Students List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.fname}</strong> - {student.mobile} - {student.city?.name}, {student.city?.area} - {student.edu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsNested;
