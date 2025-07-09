import React, { useContext } from 'react'
// import { Children } from 'react'
import { UserContext } from '../../context/UserContext'
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children , activeMenu}) => {

    const {user} = useContext(UserContext);
    // console.log("user from context:", user);

  return (
    <div className="">
        <Navbar activeMenu= {activeMenu}/>
        {/* <SideMenu activeMenu={activeMenu} /> */}
        {user && (
            <div className="flex">
                {/* <div className="max-[1080]:hidden"> */}
                <div className="hidden lg:block">
                    <SideMenu activeMenu={activeMenu} />
                </div>
                <div className="grow mx-5">{children}</div>
            </div>
        )}
    </div>
  )
}

export default DashboardLayout



