import { useState } from "react";
function Main() {

  const [text, setText ]=useState({text:"Level 1 done"})
  
  // setText("");

  return (
    <div className="App">
  {text.text}
    </div>
  );
}

export default Main;
