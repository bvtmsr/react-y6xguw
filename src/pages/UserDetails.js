import React from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import loaimg from './../../public/loader.gif';

const UserDetails = () => {
  const userInfo = useLoaderData();
  const { dynamicparams } = useParams();

  return (
    <div>
      <div>
        Hello{' '}
        <b className="udetails-b">
          {userInfo.name}--{userInfo.id}{' '}
        </b>
        <p>
          {/* <img src="https://media.giphy.com/media/OiC5BKaPVLl60/giphy.gif" /> */}
          <img src="./loader.gif" alt="" />
          <img
            src="https://media.giphy.com/media/csSISCKKS8ZEXPIDSG/giphy.gif"
            width="100"
            height="100"
          />
        </p>
      </div>
    </div>
  );
};

export default UserDetails;

export const loadUser = async (dynamicparams) => {
  //console.log('IN details page ');
  const id = dynamicparams.params.uid;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userData = await res.json();
  console.log(dynamicparams.params.uid);
  return userData;
};
