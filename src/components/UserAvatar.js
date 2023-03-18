import React from 'react';

function UserAvatar({ username, avatarUrl }) {
  return (
    <a target="_blank" href={`https://www.github.com/${username}`}>
      <img src={avatarUrl} alt="User Avatar" />
    </a>
  );
}

export default UserAvatar;
