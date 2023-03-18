import React, { useState } from 'react';

function SearchUser({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputValue);
  }

  return (
    <form id="myForm" autoComplete="off">
      <div className="form-group">
        <input type="text" id="search" placeholder="Search Username" className="form-control" value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="form-group my-2">
        <button className="btn btn-danger btn-block btn-lg mt-2" onClick={handleSubmit}>Search User</button>
      </div>
    </form>
  );
}

export default SearchUser;
