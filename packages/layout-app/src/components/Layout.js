import React from 'react'
import Sidebar from './Sidebar'
const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>
        {children || 'no children app'}
      </div>
    </div>
  );
}

export default Layout;