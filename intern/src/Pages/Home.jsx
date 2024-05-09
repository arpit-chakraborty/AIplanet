import Header from "../Components/Header";
import Stack from "../Components/Stack";
import NewStack from "../Components/NewStack";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [NewStackClicked, SetNewStackClicked]  = useState(false);
  const [Stacks, SetStacks] = useState([{
    name:"",
    description:"",
  }])

  function clicked(){
    SetNewStackClicked(prev => {return !prev});
  }

  function ShowStack(EnteredStack){
    SetStacks(prev => {
      return[...prev, EnteredStack]
    })
  }

  useEffect(()=>{
    axios.get(`http://localhost:3000/stacks`).then((res)=>{
      console.log(res.data);
      SetStacks(res.data);
    })

  },[])

  return (
    <div className=" bg-slate-200 h-screen">
      <Header></Header>
      <Stack Clicked={clicked}></Stack>
      {NewStackClicked && <NewStack ShowStack={ShowStack} Clicked={clicked} />}
      <div className=" bg-slate-200 m-5 grid xl:grid-cols-5 lg:grid-cols-4 gap-y-8 gap-x-5 md:grid-cols-3 sm:grid-cols-2">
        {Stacks.map((Stack,index)=>{
          return(
            <Card className=" w-1/4 box-border" key={index} name={Stack.name} description={Stack.description}></Card>
          )
        })}
        
      </div>
    </div>
  );
}

export default Home;
