import React, {useState} from "react";

function Toggle() {

  const [onOff, setOnOff] = useState(false)
  const handleClick = () => {
    setOnOff((onOff) => !onOff)
  }
  return <button onClick={handleClick} style={{background: onOff ? "red":"white"}}>{onOff ? "On":"OFF"}</button>;
}

export default Toggle;
