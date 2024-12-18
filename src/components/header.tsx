const Header = ({text} : {text : string}) =>{
    return <h2 className="font-bold w-fit h-[30px] relative text-blue-600 md:text-[28px] md:h-[45px]">{text}
    <span className="absolute bottom-0 right-0  w-full h-[2px] bg-blue-600"></span>
    </h2>
}
export default Header
// animation-header