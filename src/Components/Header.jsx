import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className=' flex justify-between text-center
     text-red-500 text-3xl p-3 border-b-2
      border-gray-400'>
            <span>
                Filmy <span className=' text-white'>knus</span>
            </span>
            <h1 className=' text-lg cursor-pointer text-white flex items-center'>
                    <span className=' text-white'>
                       <Link to={'/addmovie'}>
                       Add New
                       </Link>
                    </span>
            </h1>
        </div>
    )
}
export default Header;