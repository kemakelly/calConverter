import { useState, useEffect } from "react";
import "./CalculatorConverter.css";
import { Outlet, useNavigate } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";





export default function CalculatorConverter() {
  const [activeButton, setActiveButton] = useState("Calculator");
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const handleNavigation = (target) => {
    setActiveButton(target);
    navigate(target);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`CalculatorConverter ${theme}`}>
     
      <div className="theme-toggle">
          <div className="calbuttoncontainer">
            <button
              onClick={() => handleNavigation("Calculator")}
              style={{
                background: activeButton === "Calculator" ? "#029689" : "transparent",
                color: activeButton === "Calculator" ? "#fff" : "#029689",
                padding: ".5rem 1rem", 
                border: "1px solid #029689",
                borderRadius: "5px", 
              }}
            >
              Calculator
            </button>
            <button
              onClick={() => handleNavigation("Converter")}
              style={{
                background: activeButton === "Converter" ? "#029689" : "transparent",
                color: activeButton === "Converter" ? "white" : "#029689",
                padding: ".5rem .8rem", 
                border: "1px solid #029689", 
                borderRadius: "5px", 
              }}
            >
              Currency Converter
            </button>
          </div>
          <div className="tl"
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem", 
            }}
          >
            {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </div>
      </div>

      
    

      <Outlet />
    </div>
  );
}