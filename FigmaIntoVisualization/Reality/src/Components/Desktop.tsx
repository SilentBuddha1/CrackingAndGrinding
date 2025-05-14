import SearchBar from './Searchbar';
import SideBar from './SideBar';
import Top from './Top';

const Desktop = () => {
  return (
    <div className='bg-[#EDEDF3] w-[1440px] h-[1080px] align-center border-amber-300 m-auto'>
      <Top/>
      <SideBar/>
      <SearchBar/>
    </div>
  )
}

export default Desktop;