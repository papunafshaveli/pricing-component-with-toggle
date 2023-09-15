import React, { useState } from "react";
import "./App.css";
import Pricing from "./components/Pricing/Pricing";
import Basic from "./components/Basic/Basic";
import Professional from "./components/Professional/Professional";
import Master from "./components/Master/Master";

function App() {
  const [isMonthly, setIsMonthly] = useState(false); // Initialize checkbox state

  // Function to update the checkbox state
  const handleCheckboxChange = () => {
    setIsMonthly(!isMonthly); // Toggle the checkbox state
  };

  return (
    <body>
      <header style={{ position: "relative" }}>
        <Pricing onCheckboxChange={handleCheckboxChange} />
      </header>
      <Basic isMonthly={isMonthly} />
      <Professional isMonthly={isMonthly} />
      <Master isMonthly={isMonthly} />
    </body>
  );
}

export default App;
