/** @format */
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
function App() {
  const [show, setShow] = useState("home");
  return (
    <div className="App">
      <Header controlShow={setShow} />
      {show === "home" && <Main />}
      {show === "cart" && <Cart />}
    </div>
  );
}

export default App;
