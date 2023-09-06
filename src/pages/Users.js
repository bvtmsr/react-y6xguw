import React from 'react';
import { useLoaderData, Link, Outlet } from 'react-router-dom';
const Users = () => {
  const myList = useLoaderData();
  const style = {
    display: 'flex',
    flexDirection: 'row',
    gap: '5rem',
  };
  return (
    <>
      {myList != undefined &&
        myList.map((item) => (
          <div style={style} key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>
              <Link to={`edit/${item.id}`}>Detail</Link>
            </div>
          </div>
        ))}
      {/* <ul>
        {myList != undefined &&
          myList.map((item) => (
            <li key={item.id}>
              Users {item.id} - {item.name}
              <Link to={`edit/${item.id}`}>Detail</Link>
            </li>
          ))}
      </ul> */}
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
 // console.log(usersList);
  return usersList;
}
