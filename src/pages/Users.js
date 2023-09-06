import React from 'react';
import { useLoaderData, Link, Outlet } from 'react-router-dom';
const Users = () => {
  const myList = useLoaderData();
  return (
    <>
      <ul>
        {myList != undefined &&
          myList.map((item) => (
            <li key={item.id}>
              Users {item.id} - {item.name}
              <Link to={`edit/${item.id}`}>Detail</Link>
            </li>
          ))}
        {/* <li>Users 1 </li>
        <li>Users 1 </li>
        <li>Users 1 </li> */}
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Users;

export async function loadUsersList() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersList = await res.json();
  console.log(usersList);
  return usersList;
}
