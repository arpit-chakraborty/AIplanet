import React, { useState } from "react";
import cross from "../assets/cross.png";
import axios from "axios";
import querystring from "querystring";


function NewStack(props) {

  const [Entry, SetEntry] = useState({
    name:"",
    description:""
  })

  function handelChange(event){
    const {name, value} = event.target;
    SetEntry(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function NewStack(){
    axios.post(`http://localhost:3000/newstack`,querystring.stringify(Entry), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res=>{console.log(res)});

    props.ShowStack(Entry);

    props.Clicked();
  }

  return (
    <div className=" flex justify-center m-20">
      <div className=" flex flex-col w-6/12 h-3/6 bg-slate-50 justify-between rounded-sm ">
        <div className=" flex justify-between bg-slate-100">
            <p className=" ml-1">Create New Stack</p>
            <div>
                <img src={cross} onClick={props.Clicked} className=" float-right size-3 mt-2 mr-2 hover:bg-slate-400"></img>
            </div>
        </div>
        <div className=" flex flex-col mx-16 my-4">
            <p>Name</p>
            <input name="name" onChange={handelChange} className=" rounded-sm" value={Entry.name}></input>
        </div>
        <div className=" flex flex-col mx-16 my-4">
            <p>Description</p>
            <textarea name="description" onChange={handelChange} value={Entry.description} rows="6" cols="80"></textarea>
        </div>
        <div className=" flex justify-end">
            <button onClick={props.Clicked} className=" bg-slate-100 m-3 rounded-md w-12">Cancel</button>
            <button onClick={NewStack} className=" bg-green-600 m-3 rounded-md w-12">Create</button>
        </div>
      </div>
    </div>
  );
}

export default NewStack;
