import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to='/'>
        <h2>MERN Blogger</h2>
      </Link>
      <Link to='/create/'>
        <button>
          <i className='material-icons'>note_add</i>
          <strong>New Article</strong>
        </button>
      </Link>
    </>
  );
};

export default Header;
