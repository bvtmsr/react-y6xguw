import React from 'react';

import { useLoaderData, useParams } from 'react-router-dom';

const UserDetails = () => {
  const userInfo = useLoaderData();
  // const { dynamicparams } = useParams();

  return (
    <div>
      <div>
        Hello{' '}
        <b className="udetails-b">
          {userInfo.name}--{userInfo.id}{' '}
        </b>
        <p className="loaderImg">
          {/* <img src="https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif" /> */}
          <img
            src="https://cdn.jsdelivr.net/gh/bvtmsr/react-y6xguw@main/public/loader.gif"
            alt=""
          />
          {/* <img
            src="https://media.giphy.com/media/csSISCKKS8ZEXPIDSG/giphy.gif"
            width="100"
            height="100"
          /> */}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;

export const loadUser = async ({ params, request }) => {
  //  Practice
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('uid');
  console.log(url.port, request.url);
  // end Practice
  const id = params.uid; //dynamicparams.params.uid;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userData = await res.json();
  console.log(typeof params.uid, 'in details');
  return userData;
};
