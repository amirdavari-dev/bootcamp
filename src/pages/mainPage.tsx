import vector from "@/assets/images/main-vector.png";
import { TbHandLoveYou } from "react-icons/tb";
import { Link } from "react-router-dom";
import amir from "@/assets/images/myself.png";
import Header from "../components/header";
import ServiceCard from "../components/serviceCard";
import { GoProjectSymlink } from "react-icons/go";
import { FaCompressArrowsAlt, FaHeadset } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdAttachMoney, MdOutlineOnlinePrediction } from "react-icons/md";
import CourseCard from "../components/courseCard";
import html from "@/assets/images/htmlcss.jpg";
import BootDetailCard from "../components/bootDetailCard";
import { Suspense } from "react";
import Loading from "../components/loading";
import CourseSortCard from "../components/courseSortCard";
import { IoIosArrowBack } from "react-icons/io";
const MainPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mb-20">
        <div className="grid grid-cols-12 mb-20">
          <div className="col-span-12 md:col-span-6 flex-cen">
            <img
              src={vector}
              alt=""
              className="w-[300px] h-[250px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px]"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:flex md:flex-col md:justify-center md:items-center">
            <h1 className="font-bold flex-cen gap-x-2 text-lg">
              <span className="bg-blue-600 p-1 rounded-2xl text-white">
                <TbHandLoveYou size={25} />
              </span>
              <span className="text-blue-600 lg:text-[36px]">خوش اومدید</span>
            </h1>
            <p className="text-center mt-2 text-lg lg:text-[25px] lg:mt-5">
              با دوره های فشرده{" "}
              <strong className="text-blue-600">جاوااسکریپت</strong> و پروژه
              محور من همراه شوید
            </p>
            <p className="font-extralight text-center mt-1 p-1 lg:text-[20px]">
              برنامه نویسی شغل نیست! سبک زندگی ست
            </p>
            <div className="flex-cen mt-1 gap-x-2">
              <a
                href="#bootcamp"
                className="bg-blue-600 text-white rounded-2xl lg:text-[19px] p-2 hover:bg-blue-800 transition-all hover:scale-95"
              >
                دوره ها
              </a>
              <a
                href="#myself"
                className="bg-blue-600 text-white rounded-2xl lg:text-[19px] p-2 hover:bg-blue-800 transition-all hover:scale-95"
              >
                درباره من
              </a>
            </div>
          </div>
        </div>
        {/* world */}
        <div id="myself" className="grid grid-cols-12">
          <div className="col-span-12 flex-cen">
            <Header text="صحبت من با شما !" />
          </div>
          <div className="col-span-12 mt-10 mb-2 flex-cen">
            <p className="p-5 bg-white font-medium leading-8 text-lg text-justify rounded-2xl">
              در این بوتکمپ جامع، با{" "}
              <strong className="text-blue-600">جاوااسکریپت</strong> هر کاری
              ممکن است! تمرکز ما بر توسعه وب است و شما را برای آیندهای پر درآمد
              و شغلهای ریموت و فریلنسری آماده میکنم. با تجربه ۵ ساله من، ترفندها
              و نکات آموزشی بینظیری را خواهید آموخت. تمامی دوره ها توسط خودم
              تدریس میشوند و به صورت حضوری برگزار میشوند. هزینه ای که میکنید
              بیهوده نیست و سرمایهگذاری در آینده شماست. به دنیای برنامهنویسی وب
              خوش آمدید!
              <strong className="text-yellow-500">
                برنامه نویس جاوااسکریپت
              </strong>{" "}
              حرفهای بردارید!
            </p>
          </div>
          <div className="col-span-12 flex-cen mb-10">
            <Link
              to="/"
              className="bg-blue-600 w-[200px] block p-2 rounded-2xl text-white text-center hover:bg-blue-700 transition-all"
            >
              ثبت نام
            </Link>
          </div>
        </div>
        <div id="myself" className="grid grid-cols-12">
          <div className="col-span-12 flex-cen">
            <Header text="درباره من !" />
          </div>
          <div className="col-span-12 lg:col-span-6 flex-cen">
            <img
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
              src={amir}
              alt=""
            />
          </div>
          <div className="col-span-12 lg:col-span-6 p-2 flex-cen">
            <div className="bg-blue-600 rounded-2xl p-4 w-full 2xl:w-[800px] text-white">
              <div className="mb-5">
                <h2 className="border-s-4 border-white ps-2 md:text-[30px]">
                  امیر داوری | <strong>برنامه نویس جاوااسکریپت</strong>
                </h2>
              </div>
              <div>
                <p className="md:text-[20px]">
                  من با سابقه 5 ساله فعالیتم با زبان برنامه نویسی{" "}
                  <strong>جاوااسکریپت</strong> تصمیم گرفتم که کسایی که علاقه به
                  برنامه نویسی دارن رو فضایی رو براشون به وجود بیارم که بتونن
                  بلاخره یادبگیرند و وارد بازار <strong>بازار کار</strong> بشن.{" "}
                  <br /> تجربه من در این حوزه نمونه کارهایی رو به ارمغان اورده
                  که پروژه شرکت طب پرداز شرق مشهد{" "}
                  <Link
                    className="bg-white px-1 rounded-2xl text-blue-600"
                    target="_blank"
                    to="tebpardaz.ir"
                  >
                    Link
                  </Link>{" "}
                  و فعالیت در حال حاضر من در شرکت Azpo در برلین{" "}
                  <Link
                    className="bg-white px-1 rounded-2xl text-blue-600"
                    to="https://azpo.vercel.app"
                  >
                    Link
                  </Link>{" "}
                  هستش. <br /> اگه علاقه به برنامه نویسی داری دوره ها و توضیحات
                  اون ها رو خوب بخون و{" "}
                  <Link
                    to="/"
                    className="bg-white px-1 rounded-2xl text-blue-600"
                  >
                    ثبت نام
                  </Link>{" "}
                  تو انجام بده
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* services */}
        <div className="mt-10">
          <div className="col-span-12 flex-cen">
            <Header text="ویژگی های دوره ها!" />
          </div>
          <div className="grid grid-cols-12 gap-4 mt-5">
            <ServiceCard
              icon={<GoProjectSymlink size={30} />}
              text="وقتی روی پروژه های واقعی کار می کنید ، سرعت یادگیری شما چند برابر میشه"
              title="کار روی پروژه های واقعی"
            />
            <ServiceCard
              icon={<FaHeadset size={30} />}
              title="منتورینگ اختصاصی"
              text="در تمام مسیر یک منتور حرفه ای و کاربلد رو در کنار خودتون دارید که راهنمایی تون می کنه"
            />
            <ServiceCard
              icon={<HiUserGroup size={30} />}
              text="در کنار افرادی مانند خودتون از تجربه های همدیگه مهارت یادمیگیرید"
              title="یادگیری گروهی"
            />
            <ServiceCard
              icon={<FaCompressArrowsAlt size={30} />}
              title="دوره های فشرده"
              text="خیلی سریع و فشرده مهارت های لازم رو بهت آموزش میدیم و نیازی نیست ماه ها دوره بدون فایده ببینی"
            />
            <ServiceCard
              title="جلسات آنلاین رفع ابهام"
              text="بعد از هر جلسه در گروه پشتیبانی تایم جلسه رفع ابهام مشخص و مشکلات شما حل میشه"
              icon={<MdOutlineOnlinePrediction size={30} />}
            />
            <ServiceCard
              title="نکات ورود به بازار کار"
              text="در طول دوره نکات ورود به بازار و پروژه گرفتن گرفته میشه تا شما پول و وقت خودتونو الکی هدر ندین"
              icon={<MdAttachMoney size={30} />}
            />
          </div>
        </div>
        {/* dependency */}
        <div className="mt-10">
          <div className="flex-cen">
            <Header text="وابستگی های دوره ها" />
          </div>
          <div className="grid grid-cols-12 gap-4 bg-white p-5 rounded-2xl">
            <div className="col-span-12">
              <h2 className="text-[25px] font-bold text-blue-600">
                تبدیل شدن به یک برنامه نویسی حرفه ای سایت
              </h2>
              <p>
                برای اینکه تبدیل به برنامه نویس سایت بشی باید ترتیب دوره ها رو
                رعایت کنی و با این معیار یادبگیری چون اگر دوره ای رو جا بزنی در
                دوره انتخابی خودت چونکه دوره قبلشو نگذروندی به مشکل میخوری
                (درصورتی که اون دوره رو بلدی میتونی دوره بعدشو ببینی)
              </p>
            </div>
            <div className="col-span-12">
              <h3 className="font-bold">فرانت اند:</h3>
            </div>
            <div className="col-span-12 flex justify-start items-center gap-4 flex-wrap">
              <CourseSortCard count={1}>HTML CSS</CourseSortCard>
              <div>
                <IoIosArrowBack className="text-blue-600" size={20} />
              </div>
              <CourseSortCard count={2}>JAVASCRIPT</CourseSortCard>
              <div>
                <IoIosArrowBack className="text-blue-600" size={20} />
              </div>
              <CourseSortCard count={3}>NODE.JS | REACT.JS</CourseSortCard>
              <div>
                <IoIosArrowBack className="text-blue-600" size={20} />
              </div>
              <CourseSortCard count={3}>NEXT.JS</CourseSortCard>
            </div>
            <div className="col-span-12">
              <h3 className="font-bold">بکند اند:</h3>
            </div>
            <div className="col-span-12 flex justify-start items-center gap-4 flex-wrap">
              <CourseSortCard count={4}>MYSQL</CourseSortCard>
              <div>
                <IoIosArrowBack className="text-blue-600" size={20} />
              </div>
              <CourseSortCard count={5}>EXPRESS.JS</CourseSortCard>
            </div>
            <div className="col-span-12">
              <h3 className="font-bold">
                ابزار هایی که یک برنامه نویس باید بدونه:
              </h3>
            </div>
            <div className="col-span-12 flex justify-start items-center gap-4 flex-wrap">
              <CourseSortCard count={6}>GIT | GITHUB</CourseSortCard>
              <div>
                <IoIosArrowBack className="text-blue-600" size={20} />
              </div>
              <CourseSortCard count={7}>DEPLOY SERVER</CourseSortCard>
            </div>
            <div className="col-span-12">
              <div>
                <p className="text-center font-bold text-lg text-blue-600">
                  از هیچی نترس من در جلسه <strong className="bg-blue-600 text-white p-2 rounded-2xl">رایگان</strong> اولیه همه چیو
                  و مسیرو بهت توضیح میدم
                </p>
             
              </div>
              <div className="flex-cen mt-5">
                <Link to="/" className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700 transition-all">
                  ثبت نامتو انجام بده
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* courses */}
        <div className="mt-10">
          <div className="col-span-12 flex-cen mt-10 mb-5">
            <Header text="دوره های بووت کمپ !!!" />
          </div>
          <div className="grid grid-cols-12 gap-5">
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
            <CourseCard
              classCount={6}
              price={400}
              start="1403/10/20"
              title="آموزش Html css مقدماتی تا پیشرفته"
              images={html}
              desc="در این دوره به شما آموخته میشود که سایت چیست؟وچگونه یک سایت زیبا را کدنویسی کرده و آن را به عنوان نمونه کار در نظر بگیرید"
            />
          </div>
        </div>
        <div>
          <div className="col-span-12 flex-cen mt-10 mb-5">
            <Header text="دیدگاه کلی درباره بووت کمپ!!" />
          </div>
          <div className="bg-stone-950 text-white rounded-2xl p-5 flex justify-center items-center flex-wrap gap-4">
            <BootDetailCard title="ظرفیت هر دوره" value="15" />
            <BootDetailCard title="تعداد دوره ها" value="9" />
            <BootDetailCard title="برگزاری دوره ها" value="حضوری" />
            <BootDetailCard title="مدرس" value="امیر داوری" />
            <BootDetailCard
              title="مکان برگزاری"
              value="بردسکن"
              subValue="آکادمی بایا"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default MainPage;
