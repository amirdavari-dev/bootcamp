import { Link } from "react-router-dom";

const CourseCard = ({
  classCount,
  desc,
  start,
  price,
  title,
  images,
}: {
  images: string;
  title: string;
  desc: string;
  start: string;
  price: number;
  classCount: number;
}) => {
  return (
    <div className="group col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-white rounded-[20px] overflow-hidden">
      <div>
        <img src={images} className="w-full h-[200px] rounded-[20px]" alt="" />
      </div>
      <div className="my-5 px-4">
        <h2 className="font-bold text-lg mb-2 h-12">{title}</h2>
        <p className="line-clamp-3">{desc}</p>
        <div className="flex justify-between items-center mt-5 bg-blue-600 p-2 rounded-[20px] text-white font-bold">
          <div>
            <p>
              <span>تاریخ شروع:</span>
              <span>{start}</span>
            </p>
          </div>
          <div>
            <p>
              <span>تعداد جلسات:</span>
              <span>{classCount}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="font-bold p-1 rounded-[20px]">
              <span>قیمت: </span>
              <span className="text-blue-600">
                {price.toLocaleString("en-US")}T
              </span>
            </p>
          </div>
          <div>
            <p className="font-bold p-1 rounded-[20px]">
              <span>ظرفیت باقی مانده: </span>
              <span className="text-blue-600">
                15
              </span>
            </p>
          </div>
        </div>
        <div className="mt-2">
          <Link
            className="w-full block text-center font-bold text-blue-600 border-[2px] border-blue-600 rounded-[20px] p-1 group-hover:bg-blue-600 group-hover:text-white transition-all"
            to="/register"
          >
            ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
