import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButton(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu className=' flex flex-col'>
        {props.Items.map((item) => {
            return <Dropdown.Item >{item}</Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;