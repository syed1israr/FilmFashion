import React from 'react';
import SideNav from '../Templates/SideNav';
import Topnav from '../Templates/Topnav';

const Home = () => {
  return (
     <>
      <SideNav/>
      <div className="w-[80%] h-full">
        <Topnav/>
      </div>
      </>
  );
};

export default Home;
