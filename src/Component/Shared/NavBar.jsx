import { Link, NavLink } from "react-router-dom";

const NavBar = ()=>{
    return (
        <div className="py-4 md:py-8 flex flex-col md:flex-row items-center justify-between">
           <div>
           <Link to='/'>
           <h2 className="text-lg md:text-xl font-semibold text-blue-500">User App</h2></Link>
           </div>
           <div className="mx-auto">
            <ul className="flex flex-col md:flex-row gap-y-2 md:gap-x-10 items-center">
                <NavLink to='/home' className='text-center'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/add'>
                    Add Users
                </NavLink>
            </ul>
           </div>
        </div>
    )
};

export default NavBar;