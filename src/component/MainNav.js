import React from 'react';
import { Link } from 'react-router-dom';
const MainNav = () => {
  return (
    <>
      <div id="sidebar">
        {/* <h1>Main Nav</h1> */}
        {/* <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div> */}
        <nav>
          <ul className="main-nav-ul">
            <li>
              <Link to="/">Home</Link>
              {/* <a href={`/contacts/1`}>Your Name</a> */}
            </li>
            <li>
              <Link to="/users">Users</Link>
              {/* <a href={`/contacts/2`}>Your Friend</a> */}
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default MainNav;
