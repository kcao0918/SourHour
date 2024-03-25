import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import FloatingActionButton from "./components/floating_add_btn";
import CurrentBakesStandard from "./components/SourD_currentBakes";
// functions
import { getTest } from "./functions/test";

function App() {
  const [data, setData] = useState("Hello World!");

  useEffect(() => {
    getTest()
      .then((res) => setData(res.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <CurrentBakesStandard />
      <FloatingActionButton />
      <Navbar />
    </div>
  );
}

export default App;
