import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setSetDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        setSetDarkMode(false);
        document.documentElement.classList.remove("dark");
      } else {
        setSetDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    } else {
      setSetDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }, []);

  const handleMode = () => {
    if(darkMode){
      setSetDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      setSetDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");      
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-b from-teal-50 via-white to-teal-50 dark:bg-gradient-to-b dark:from-[#0D0E12] dark:via-[#0D0E12] dark:to-[#0D0E12] min-h-screen">
      <Navbar mode={darkMode} toggle={handleMode} />
    </div>
  );
}

export default App;
