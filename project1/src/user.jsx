import { useState, useEffect } from "react";
const ManageUser = () => {
  let [alluser, setAllUser] = useState([]);
  const getUser = () => {
    fetch("http://localhost:1111/manageuser")
      .then((response) => response.json())
      .then((userArray) => {
        setAllUser(userArray);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-12">
          <h3>Manage User:{alluser.length}</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Fullname</th>
                <th>Mobile No</th>
                <th>EDmail</th>
                <th>Password</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {alluser.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.fullname}</td>
                    <td>{user.mobile}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.address}</td>
                    <td>
                      <button className="btn btn-warning me-2 btn-sm">Edit</button>
                      <button className="btn btn-danger me-2 btn-sm">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
