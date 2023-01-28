import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import profilePic from "./assets/pp.png";

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
      <section className="flex justify-evenly items-center h-screen">
        <div className="flex justify-center flex-col h-full">
        <h1 className="text-[100px] dark:text-white text-black font-bold ">Avishkar</h1>
        <h1 className="text-[200px] dark:text-white text-black font-bold">Gunjal</h1>
        </div>
        <img src={profilePic} className="grayscale h-96 rounded-full bg-gray-200" />
      </section>
    </div>
  );
}

export default App;
