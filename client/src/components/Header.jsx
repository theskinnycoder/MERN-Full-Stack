import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <Link to='/' className='navbar-brand text-white' href='#'>
          <i className='fas fa-tired'></i> Ranterrr
        </Link>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/create/'>
              <i className='fas fa-file-medical mr-0'></i> New Rant
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
