import fak from "@/assets/images/fakrm.png";
import { TbSmartHome, TbTransform } from "react-icons/tb";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="bg-white border-b p-5 grid grid-cols-12 rounded-b-[50px]">
        <div className="col-span-8 flex-right">
          <ul className="flex-right gap-x-6 font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-blue-600" : ""
                  } flex-cen gap-x-2 text-sm md:text-balance hover:text-blue-600 transition-all lg:text-lg`;
                }}
              >
                <span>
                  <TbSmartHome size={18} />
                </span>
                <span>خانه</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses-reserve"
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-blue-600" : ""
                  } flex-cen gap-x-2 text-sm md:text-balance hover:text-blue-600 transition-all lg:text-lg`;
                }}
              >
                <span>
                  <TbTransform size={18} />
                </span>
                <span>ثبت نام</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-4 flex-left">
          <p className="font-bold text-blue-600">Fidar JS</p>
          <img src={fak} className="w-[40px] h-[40px]" alt="" />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
