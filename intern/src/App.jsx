import { useState } from "react";
import Home from "./Pages/Home";
import WorkBench from "./Pages/WorkBench";

function App() {

  const [Entries, SetEntries] = useState([{
    name:"",
    description:""
  }]);

  // async function NewEntry(entry){

  //   await CreateEntry(entry);
  //   SetEntries((prev)=>{
  //     return[...prev, entry];
  //   })
  // }

  return (
    <div >
      <Home></Home>
    </div>
  );
}

export default App;
