import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import bgImage from '../public/uber-eats.svg';

function Barre() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ zIndex: '500' }}
    >
      <div className="container-fluid" id="top_brand">
        <div style={{ backgroundColor: '#fff', width: 50, marginLeft: 10 }}>
          <i
            className="bi bi-list toggle-sidebar-btn  fa-lg"
            style={{
              fontSize: 25,
              fontWeight: 400,
              height: 100,
            }}
          ></i>
        </div>
        <div>
          <a
            id="company_logo"
            href="#"
            className="logo d-flex align-items-center"
          >
            <Image
              src={bgImage}
              width={134}
              height={24}
              alt="Image not found"
              id="image_logo"
            ></Image>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-1">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
          </ul>
          <button className="btn btn-lg" type="button">
            Help ?
          </button>
          <form className="d-flex" role="search">
            <button className="btn btn-lg" type="submit">
              Log out
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Barre;
