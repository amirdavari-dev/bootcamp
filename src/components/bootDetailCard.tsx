const BootDetailCard = ({title , value , subValue} : {title : string , value : string,subValue? : string}) =>{
    return(
        <div className="w-full md:w-[230px] h-[110px] bg-white text-blue-600 p-5 rounded-2xl">
              <div className="text-[30px] font-bold">
                {value} <span className="text-[16px]">{subValue}</span>
              </div>
              <div>
                <p className="text-[20px]">{title}</p>
              </div>
            </div>
    )
}
export default BootDetailCard