import logo from "../assets/logo.png"

function Header(){
    return(
        <div className=" bg-white left-0 top-0 fixed w-full">
            <div className=" flex m-2 p-3">
                <img src={logo} className=" max-w-9 max-h-9"></img>
                <h1 className=" text-2xl ml-3 ">Gen AI</h1>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Header;