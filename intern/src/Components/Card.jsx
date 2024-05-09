

function Card(props){
    return(
        <div className=" bg-white max-w-xs min-h-40 flex justify-between flex-col rounded-md">
            <h2 className=" text-3xl mx-5">{props.name}</h2>
            <p className=" mx-5">{props.description}</p>
                <button className=" bg-white border-solid border-black border-2 rounded-md max-w-fit ml-5 mb-2 ">Edit Stack</button>
        </div>
    )
}

export default Card;