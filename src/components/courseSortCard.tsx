import { ReactNode } from "react";

const CourseSortCard = ({
  children,
  count,
}: {
  count: number;
  children: ReactNode;
}) => {
  return (
    <div>
      <p className="text-center w-fit p-2 bg-blue-600 text-white font-bold rounded-2xl flex-cen gap-x-3">
        <span className="bg-white p-1 px-3 rounded-2xl text-blue-600">{count}</span>
        <span>{children}</span>
      </p>
    </div>
  );
};
export default CourseSortCard;
