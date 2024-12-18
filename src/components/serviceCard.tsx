import { ReactNode } from "react";

const ServiceCard = ({
  title,
  icon,
  text,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-blue-600 text-white p-4 rounded-2xl">
      <div className="flex-left">
        <div className="flex-cen bg-white p-2 text-blue-600 rounded-2xl">{icon}</div>
      </div>
      <div>
        <h3 className="font-bold text-[25px]">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
