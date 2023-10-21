import { useState } from "react";

const ToggleButton = () => {
  const [toggleTheme, setToggleTheme] = useState(true);

  const toggleButton = () => {
    setToggleTheme(!toggleTheme);
  };

  toggleTheme
    ? document.documentElement.setAttribute("data-theme", "light")
    : document.documentElement.setAttribute("data-theme", "dark");

  return (
    <div className="ml-3">
      <button
        className={
          toggleTheme
            ? "px-5 bg-slate-200 rounded-xl text-slate-700 font-semibold"
            : "px-5 bg-slate-700 rounded-xl text-slate-200 font-semibold"
        }
        onClick={toggleButton}
      >
        {toggleTheme ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ToggleButton;
