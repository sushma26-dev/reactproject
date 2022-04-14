import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ProductList from './ProductList';
import Cart from './Cart';
import { Link } from 'react-router-dom';

function AppProduct() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          {/* <marquee width="30%" direction="left" height="60px"> */}
          <span style={{ color: 'white', fontSize: '1.6rem' }}>AMADIS Welcomes You!!</span>
          {/* </marquee> */}
          <div id="navbarResponsive">
            <ul className="navbar-nav">
              <li className='nav-item mx-0 mx-lg-1' >
                <Link to={'/'} className='li' style={{ color: 'white' }}>Home</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      <div className='row'>
        <div className='col-6'>

          <ProductList />

        </div>
        <div className='col-6'>
          <Cart />

        </div>
      </div>

    </div>

  );
}

export default AppProduct;
