import { isPersian, phoneNumberValidator } from "@persian-tools/persian-tools";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
type FormDataType = {
  fullName: string;
  phone_number: string;
};
const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormDataType>();
  const [loading, setLoading] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FormDataType> = async ({
    fullName,
    phone_number,
  }) => {
    if (!isPersian(fullName)) {
      setError("fullName", {
        type: "validate",
      });
      return;
    }
    if (!phoneNumberValidator(phone_number)) {
      setError("phone_number", {
        type: "validate",
      });
      return;
    }
    const response = axios.post("https://davarijs.ir/api/bootcamp/register", {
      full_name: fullName,
      phone_number: phone_number,
    });
    setLoading(true);
    toast.promise(
      response,
      {
        pending: "درحال انجام عملیات",
        success: {
          render() {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            setLoading(false);
            return "ثبت نام با موفقیت انجام شد";
          },
        },
        error: {
          render({ data }: any) {
            setLoading(false);
            console.log(data);
            if(data.status ===400){
              return "قبلا ثبت نام شده اید"
            }
            return "مشکلی رخ داده است , بعدا امتحان کنید";
          },
        },
      },
      {
        position: "top-center",
      }
    );
  };
  return (
    <div className="flex justify-center items-start my-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[350px] md:w-[500px] bg-white p-4 md:py-6 md:px-10 rounded-2xl h-[400px]"
      >
        <div className="mb-10">
          <h1 className="font-bold text-blue-600 text-center">
            فرم ثبت نام در بووت کمپ برنامه نویسی
          </h1>
        </div>
        <div className="mb-6">
          <label htmlFor="full">نام و نام خانوادگی:</label>
          <br />
          <input
            {...register("fullName", { required: true })}
            className="w-full mt-2 outline-none bg-slate-100 p-3 rounded-2xl"
            type="text"
            id="full"
            placeholder="امیر داوری"
          />
          {errors.fullName && errors.fullName.type === "required" && (
            <div>
              <p className="text-rose-600">
                لطفا نام و نام خانوادگی خود را وارد کنید
              </p>
            </div>
          )}
          {errors.fullName && errors.fullName.type === "validate" && (
            <div>
              <p className="text-rose-600">
                نام و نام خانوادگی خود را فارسی وارد کنید
              </p>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="phone">شماره همراه:</label>
          <br />
          <input
            {...register("phone_number", {
              required: true,
              maxLength: 11,
              minLength: 11,
            })}
            id="phone"
            className="w-full mt-2 outline-none bg-slate-100 p-3 rounded-2xl"
            type="text"
            placeholder="09034533725"
          />
          {errors.phone_number && errors.phone_number.type === "required" && (
            <div>
              <p className="text-rose-600">لطفا شماره همراه خود را وارد کنید</p>
            </div>
          )}
          {errors.phone_number && errors.phone_number.type === "validate" && (
            <div>
              <p className="text-rose-600">شماره همراه صحیح وارد کنید</p>
            </div>
          )}
          {errors.phone_number &&
            (errors.phone_number.type === "maxLength" ||
              errors.phone_number.type === "minLength") && (
              <div>
                <p className="text-rose-600">شماره همراه باید 11 رقم باشد</p>
              </div>
            )}
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-800 transition-all px-3 py-2 rounded-2xl text-white font-bold"
            type="submit"
          >
            {loading ? "انجام عملیات..." : "ثبت نام"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
