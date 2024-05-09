import DropdownButton from "./DropdownButton";

function SideBar() {
  return (
    <div className=" h-screen w-1/6 bg-white grid grid-cols-1 gap-x-1">
      <DropdownButton Items={["Agent1", "Agent2", "Agent3"]}></DropdownButton>
      <DropdownButton Items={["Tool1", "Tool2", "Tool3"]}></DropdownButton>
      <DropdownButton Items={["LLM1", "LLM2", "LLM3"]}></DropdownButton>
    </div>
  );
}

export default SideBar;
