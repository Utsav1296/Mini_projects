import React from 'react'
import "./TableData.css"

const TableData = ({ data, fetchData }) => {
   const deleteUser = (userId) => {
      console.log("Delete User")
      fetch(`http://localhost:8080/api/users/${userId}`, {
         method: 'DELETE'
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
         .catch(err => console.log(err));
   }

   return (
      <div>
         <table className="table table-bordered ">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
               </tr>
            </thead>
            <tbody>
               {data && (data.map((row) => (
                  <tr key={row?._id}>
                     <td>{row?.username}</td>
                     <td>{row?.age}</td>
                     <td>{row?.gender}</td>
                     <button onClick={() => deleteUser(row._id)}>Delete</button>
                  </tr>
               )))}
            </tbody>
         </table>
      </div>
   )
}

export default TableData