import { GiFamilyHouse } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="flex justify-between">
        {/* logo */}
        <Link to={'/'}>
              <a href="" className="flex gap-2 items-center">
          <GiFamilyHouse size={24} />
          <span className="font-bold text-xl text-primary">Travel-NT</span>
        </a>
        </Link>
    
        {/* search */}
        <div className="flex gap-2 shadow-md shadow-gray-300 border border-gray-200 rounded-full px-4 py-2">
          <div>anywhere</div>
          <div className="border-l border-gray-200"></div>
          <div>any week</div>
          <div className="border-l border-gray-200"></div>
          <div>add guests</div>
          <button className="bg-primary text-white p-1 rounded-full">
            <FaSearch size={24} />
          </button>
        </div>
        {/* user */}
        <Link to={'/login'} className="flex gap-2 border border-gray-200 rounded-full px-4 py-2 items-center overflow-hidden">
          <GiHamburgerMenu size={24}/>
          <div className='bg-gray-500 p-1 rounded-full text-white relative '>
              <FaRegUser size={18} className="m-1" />
          </div>
        
        </Link>
      </header>
    </div>
  );
};

export default Header;
