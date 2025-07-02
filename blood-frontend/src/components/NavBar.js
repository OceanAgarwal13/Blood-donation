import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('userId');

  const hideProfileOnPaths = [
    '/', '/login', '/register', '/emergency-login', '/emergency-register',
    '/about', '/blood/:group', '/gallery', '/contact', '/help',
    '/dashboard', '/profile', '/forgot-password'
  ];

  const hideBackButtonPaths = ['/', '/donor-homepage', '/receiver-homepage'];

  const showProfile = isLoggedIn && !hideProfileOnPaths.includes(location.pathname);
  const showBackButton = !hideBackButtonPaths.includes(location.pathname);

  const menuLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
    { path: '/help', label: 'Help' }
  ];

  const filteredMenuLinks = menuLinks.filter(item => item.path !== location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center w-100">

{/* Brand with Logo */}
<Link
  className="navbar-brand d-flex align-items-center flex-grow-1"
  to="/"
  style={{ fontSize: '1.8rem', marginTop: '3px', marginLeft: '140px' }}
>
  <img
    src="./images/logo.png" // Replace with actual path to your logo (e.g. 'assets/logo.png')
    alt="Logo"
    style={{ height: '45px', marginRight: '15px' , borderRadius:'30%', border:'1px solid red', boxShadow:'0 0 10px red'}}
  />
  𝓑𝓛𝓞²𝓓 𝓥𝓘𝓣𝓐𝓛
</Link>


        {/* Back button */}
        {showBackButton && (
          <button
            className="btn"
            onClick={() => navigate(-1)}
            style={{
              fontWeight: 'bolder',
              color: 'white',
              fontSize: '1.4rem',
              marginLeft: '620px'
            }}
          >
            Back
          </button>
        )}

        {/* Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-white"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: 'bold', fontSize: '1.4rem', marginRight: '60px' }}
              >
                Menu
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
                style={{ marginRight: '30px', background: 'wheat', color: 'black' }}
              >
                {filteredMenuLinks.map((item, index) => (
                  <React.Fragment key={item.path}>
                    <li><Link className="dropdown-item" to={item.path}>{item.label}</Link></li>
                    {index < filteredMenuLinks.length - 1 && <hr />}
                  </React.Fragment>
                ))}

                {showProfile && location.pathname !== '/profile' && (
                  <>
                    {filteredMenuLinks.length > 0 && <hr />}
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
