import fak from "@/assets/images/fakrm.png";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-900 pb-10 px-10 text-white grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <h3 className="mt-10 flex justify-start items-center gap-x-2 font-bold text-blue-600"><span><RiContactsLine size={20} /></span>
        <span>راه های ارتباطی</span></h3>
        <ul className="mt-5">
          <li className="flex justify-start items-center gap-x-2 mb-2">
            <p>ایمیل:</p>
            <Link className="font-bold text-blue-600 bg-white p-2 rounded-2xl" target="_blank" to="mailto:devamirdavari@gmail.com">devamirdavari@gmail.com</Link>
          </li>
          <li className="flex justify-start items-center gap-x-2 mb-2">
            <p>تلگرام:</p>
            <Link className="font-bold text-blue-600 bg-white p-2 rounded-2xl" target="_blank" to="https://t.me/amir_daav">Tel</Link>
          </li>
          <li className="flex justify-between md:justify-start items-center gap-x-2 mt-5">
            
            <Link className="font-bold text-blue-600 bg-white p-2 rounded-2xl text-[12px]" target="_blank" to="/register">ثبت نام در دوره ها</Link>
            <p className="text-[12px] text-end">امیر داوری | برنامه نویس جاوااسکریپت</p>
          </li>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-6 flex justify-end items-center gap-x-2">
        <div className="font-bold">
          <p>فیدار جی اس</p>
          <p>فیدار آرین کویر | شرکت فنی مهندسی - معدنی</p>
        </div>
        <div>
          <img
            src={fak}
            className="w-[200px] h-[150px]"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
