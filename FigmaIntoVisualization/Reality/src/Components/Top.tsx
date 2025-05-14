import { TbGridDots } from "react-icons/tb";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiBellSimpleLight } from "react-icons/pi";
import { RiNumber2 } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Top = () => {
    return (

        <div className="relative flex bg-[#ffffff] w-[1440px] h-[72px] items-center px-[30px]">
        {/* Left div */}
        <div className="flex absolute left-[30px] top-[18px] w-[635.75px] h-auto min-h-[36px] gap-[16px] p-[6px]">
          {/* Dot grid */}
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <TbGridDots />
          </div>
          {/* Project name and search bar */}
          <div className="flex items-center w-auto min-w-[527px] h-[24px] gap-[36px]">
            <div className="w-auto min-w-[527px] h-auto min-h-[36px] flex items-center gap-[8px] left-[40px]">
                <div className="gap-[36px] flex items-center w-auto min-w-[148px] h-auto min-h-[28px]">
            <h1 className="font-inter font-semibold text-[20px] leading-[28px] text-[#101828]">
              Test Project
            </h1>
            <div className="w-[343px] h-[36px] px-[8px] py-[6px]">
              <input
                className="bg-transparent border-none outline-none w-full h-full font-inter font-semibold text-[20px] leading-[28px] text-[#101828] placeholder-[#ffffff]"
                placeholder="Search by keywords"
                type="text"
              />
            </div>
            </div>
            </div>
          </div>
        </div>
  
        {/* Right div */}
        <div className=" flex absolute right-[30px] top-[15.75px] w-auto min-w-[332.5px] h-auto min-h-[40.5px] rounded">
            <div className="absolute w-[24px] h-[24px] flex items-center justify-center rounded-[360] left-0 top-[8.25px]">
                <IoIosAddCircleOutline className="w-full h-full" />
            </div>
            <div className="absolute w-[24px] h-[24px] items-center gap-10 rounded-[360] left-[48px] top-[8.25px] "><PiBellSimpleLight className="w-full h-full"/></div>
            <div className="bg-green-400 absolute w-[14px] h-[14px] items-center gap-10 left-[59.5px] top-[3.25px] rounded-[50%] "><RiNumber2 className="w-full h-full"/></div>
            <div className="absolute w-[24px] h-[24px] left-[96px] top-[8.25px]"><CiMail className="w-full h-full"/></div>
            <div className="absolute left-[144px] top-[8.25px] w-[24px] h-[24px] "><SlSettings className="w-full h-full"/></div>
            <div className=" absolute left-[192px] w-auto h-auto min-w-[140.5px] min-h-[40.5px] gap-[4px] ">
                <div className="absolute w-auto h-auto min-w-[112.5px] min-h-[40.5px] gap-[24px]">
                    <div className="bg-black absolute top-[6.25px] w-0.5 h-[28px] "></div>
                    <div className=" absolute left-[24px] top-[8.25px] w-[24px] h-[24px] ">
                    <IoMoonOutline className="w-full h-full"/>
                    </div>
                    <img src="" className="absolute left-[72px] w-[40.5px] h-[40.5px] rounded-[50%] " alt="profile-pic" />

                </div>
                <div className="absolute w-[24px] h-[24px] left-[116.5px] top-[8.25px] ">
                <IoIosArrowDown className="w-full h-full"/>
                </div>

            </div>
        </div>
      </div>
    );
};

export default Top;