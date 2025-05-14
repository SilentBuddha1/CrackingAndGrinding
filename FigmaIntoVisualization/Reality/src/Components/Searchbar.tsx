 import { RiSearchLine } from "react-icons/ri";
 import { CiFilter } from "react-icons/ci";
 import { IoIosArrowDown } from "react-icons/io";
 import { MdOutlineCalendarToday } from "react-icons/md";
 import { IoMdCheckmark } from "react-icons/io";
 import { LiaSortSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <>
      <div
        id="frame428"
        className="bg-[#EBEBF8] items-center px-[24px] relative left-[248px] top-[80px]"
      >
        <div
          id="frame426 "
          className=" absolute left-[24px] top-[20px] w-[653px] h-[32px] gap-[20px] "
        >
           <div
            id="frame419"
            className="w-[220px] h-[32px] absolute gap-[6px] px-[8px] py-[6px] bg-[#D0D5DD] cursor-pointer"
          >
            <div
              id="search-lg"
              className="absolute left-[8px] top-[6px] w-[20px] h-[20px] "
            >
              <RiSearchLine className="h-full w-full"></RiSearchLine>
            </div>
            <input type="text" placeholder="Search Particular" className="absolute left-[34px] top-[7.5px] w-[98px] h-[17px] text-[12px] border-none outline-none cursor-pointer"/>
            
           </div> 
           <div className="absolute left-[240px] flex justify-between w-[413px] h-[32px] gap-[20px] ">
            <button className=" absolute w-[169px] h-[32px] gap-[8px] px-[8px] py-[6px] rounded-[4px] bg-[#D0D5DD] cursor-pointer ">
                <div className="absolute left-[8px] top-[7px] w-[125px] h-[18px] gap-[6px] flex justify-start overflow-hidden ">
                <CiFilter className="w-[18px] h-[18px] text-[#667085] " />
                <h3 className="text-[12px] text-[#667085]">Filter by assigned</h3>
                </div>
                <div className="absolute left-[141px] top-[6px] w-[20px] h-[20px]"><IoIosArrowDown className="w-full h-full text-[#667085] "/></div>
            </button>
            <button className=" absolute left-[189px] w-[97px] h-[32px] gap-[8px] px-[8px] py-[6px] rounded-[4px] bg-[#D0D5DD] cursor-pointer">
                <div className="absolute left-[8px] top-[7px] w-[53px] h-[18px] gap-[6px] flex justify-start overflow-hidden">
                <MdOutlineCalendarToday className="w-[15px] h-full text-[#667085] " />
                    <h3 className="text-[12px] text-[#667085]">Date</h3>
                </div>
                <div className="absolute left-[69px] top-[6px] w-[20px] h-[20px] "><IoIosArrowDown className="w-full h-full text-[#667085] "/></div>
            </button>
            <button className=" bg-[#D0D5DD] absolute left-[306px] w-[107px] h-[32px] gap-[8px] px-[8px] py-[6px] rounded-[4px] cursor-pointer">
                <div className="absolute left-[8px] top-[6px] w-[63px] h-[20px] gap-[6px] flex justify-start overflow-hidden">
                <IoMdCheckmark className="w-full h-full text-[#667085]"/>
                <h3 className="text-[12px] text-[#667085]">Status</h3>
                </div>
                <div className="absolute left-[79px] top-[6px] w-[20px] h-[20px] "><IoIosArrowDown className="w-full h-full text-[#667085] "/></div>
            </button>
           </div>
        </div>
        <div
          id="frame425"
          className="left-[821px] top-[26px] min-w-[347px] w-auto min-h-[20px] h-auto  flex absolute gap-[36px] "
        >
          <div
            id="frame424"
            className="min-w-[275px] w-auto min-h-[20px] h-auto justify-start flex gap-[20px] cursor-pointer"
          >
            <div
              id="frame422"
              className="top-[1px] min-w-[53px] w-auto min-h-[18px] justify-start gap-[6px] flex overflow-hidden cursor-pointer"
            >
                <CiFilter className="w-[18px] h-[18px] text-[#667085] " />
                <h3 className="text-[12px] text-[#667085]">Filter</h3>
            </div>
            <div
              id="vector10"
              className=" w-0.5 h-[20px] bg-[#667085] absolute left-[73px] top-0   items-center cursor-pointer"
            >
                
            </div>
            <div
              id="frame420"
              className="  absolute  left-[93px] min-w-[51px] w-auto min-h-[20px] h-auto flex justify-start gap-[6px] cursor-pointer"
            ><LiaSortSolid className="w-[20px] h-[20px] text-[#667085]"/>
            <h3 className="text-[12px] text-[#667085]">Sort</h3>
            </div>
            <div
              id="vector11"
              className="bg-[#667085] w-0.5 h-[20px]  absolute left-[164px] top-0   items-center cursor-pointer"
            ></div>
            <div
              id="frame423"
              className="position absolute left-[184px] top-[1px] min-w-[91px] w-auto min-h-[18px] flex align-center justify-start gap-[6px] cursor-pointer"
            >
                <CiFilter className="w-[18px] h-[18px] text-[#667085] " />
                <h3 className="text-[12px] text-[#667085]">Saved Filter</h3>
            </div>
          </div>
          <div
            id="text"
            className=" min-w-[36px] w-auto min-h-[20px] h-auto absolute left-[311px] items-center cursor-pointer"
          >
            <h3 className="text-[14px] text-[#4786E7]">Clear</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
