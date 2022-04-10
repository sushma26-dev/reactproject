import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ProductList from './ProductList';
import Cart from './Cart';

function AppProduct() {
  return (
    <div className="App">
        

          <div className='row'>
            <div className='col-6'>
              {/* <ListData/> */}
              {/* <List/> */}
              <ProductList/>
              {/* <LeftSide/> */}
            </div>
            <div className='col-6'>
              <Cart/>
              {/* <RightSide/> */}
            </div>
          </div>
        
      </div>

  );
}

export default AppProduct;
