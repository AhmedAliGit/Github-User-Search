import React, { useState } from 'react';
import SearchForm from './SearchUser';
import UserAvatar from './UserAvatar';

function Main() {
  const [userData, setUserData] = useState(null);

  function handleSearchSubmit(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((result) => result.json())
      .then((data) => {
        setUserData({ username, avatarUrl: data.avatar_url });
      });
  }

  return (
    <>
      <div className="container">
        <h1 className='my-5' style={{ textAlign: "center" }}>Github Search User App</h1>
        <SearchForm onSubmit={handleSearchSubmit} />
      </div>
      <div id="result">
        {userData && <UserAvatar username={userData.username} avatarUrl={userData.avatarUrl} />}
      </div>
    </>
  );
}

export default Main;
