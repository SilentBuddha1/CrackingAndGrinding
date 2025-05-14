import { IoIosArrowDown } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiDotsThreeBold } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiHome6Line } from "react-icons/ri";
import { LuCopyCheck } from "react-icons/lu";
import { TbUserHexagon } from "react-icons/tb";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";

const SideBar = () => {
  return (
    <div className="absolute bg-[#ffffff] w-[240px] h-[1000px] top-[80px] flex flex-col">
        <div className="absolute w-[240px] h-[46px] pl-[24px] flex justify-between">
            <div className="absolute left-[24px] w-[65px] h-[46px] gap-[8px] py-[12px] flex items-center justify-between">
                <h1>CRM</h1>
                <IoIosArrowDown className="w-full h-full"/>

            </div>
            <div className="bg-[#9696A4] absolute left-[212px] w-[28px] h-[28px] gap-[10px] items-center"><MdArrowBackIos className="h-[20px] w-4 absolute left-[9px] top-[5px]"/></div>
        </div>
        <div className=" absolute top-[46px] w-[240px] h-[348px] gap-[10px] px-[24px] pt-[8px] pb-[24px]">
            <div className="absolute left-[24px] top-[8px] flex flex-col w-[192px] h-[316px] gap-[24px] ">
                    <div className="absolute w-[192px] h-[40px] items-center px-[12px] py-[8px] rounded-[4px] shadow-amber-50 border ">
                        <div className="absolute left-[12px] top-[8px] w-[83px] h-[24px] gap-[12px] flex">
                            <CiSearch className="w-full h-full absolute left-[-30px] text-gray-500" />
                            <input type="text" placeholder="Search" className="w-full h-full absolute left-[30px] bg-transparent outline-none left" />
                        </div>
                        <div className="absolute  left-[160px] top-[10px] w-[20px] h-[20px]  "><PiDotsThreeBold className="w-full h-full"/></div>
                    </div>
                    
                    


                    <div className="absolute top-[64px] flex flex-col w-[192px] h-[252px]">
                        <div className="bg-[#EBEBF8] absolute w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px] flex justify-between">
                            <LuLayoutDashboard />
                            <h4 className="absolute left-[32px] top[1.5px]">Dashboard</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>

                            </div>
                        <div className="absolute top-[36px] w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px] flex justify-between">
                        <RiHome6Line />
                            <h4 className="absolute left-[32px] top[1.5px]">Office Check</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>
                        </div>
                        <div className="absolute top-[72px] w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px] flex justify-between">
                        <LuCopyCheck />
                            <h4 className="absolute left-[32px] top[1.5px]">Enquiries</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>
                        </div>
                        <div className="absolute top-[108px] w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px] flex justify-between">
                        <TbUserHexagon />
                            <h4 className="absolute left-[32px] top[1.5px]">Clients</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>
                        </div>
                        <div className="absolute top-[144px] w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px]  flex justify-between">
                        <RiVerifiedBadgeLine />
                            <h4 className="absolute left-[32px] top[1.5px]">Services</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>
                        </div>
                        <div className="absolute top-[180px] w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px]  flex justify-between">
                        <FiFileText />
                            <h4 className="absolute left-[32px] top[1.5px]">Quotation</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>
                        </div>
                        <div className="absolute top-[216px] w-[192px] h-[36px] items-center px-[12px] py-[8px] rounded-[2px] flex justify-between">
                        <GoTasklist />
                            <h4 className="absolute left-[32px] top[1.5px]">Tasks</h4>
                            <PiDotsThreeBold className="absolute left-[160px] top-[8px]"/>
                        </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default SideBar