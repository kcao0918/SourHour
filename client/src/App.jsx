import { useState, useEffect } from "react";

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
      <h1>{data}</h1>
      <h2 className="text-2xl underline text-red-500">apples</h2>
    </div>
  );
}

export default App;
