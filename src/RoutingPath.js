import { Outlet } from 'react-router-dom';

function RoutingPath() {
  return (
    <div className='emp-container'>
      <Outlet />
    </div>
  )
}

export default RoutingPath;