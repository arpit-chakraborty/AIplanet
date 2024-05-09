

function Stack(props){


    return(
        <div className=" pt-20 my-16 md:mx-24 sm:m-16 flex flex-wrap justify-between border-b-black border-solid border-b-2">
            <div className=" text-3xl ">
                My Stack
            </div>
            <div>
                <button className=" bg-green-600 m-3 rounded-md w-24" onClick={props.Clicked}>New Stack</button>
            </div>
        </div>
    );
}

export default Stack;