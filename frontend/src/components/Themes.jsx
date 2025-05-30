import React, { useState, useEffect } from "react";

const Themes = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "default"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // ✅ Persist theme across refresh
  }, [theme]);

  return (
    <div className="dropdown mb-72">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl">
        {["default", "retro", "cyberpunk", "valentine", "aqua"].map(
          (themeName) => (
            <li key={themeName}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                aria-label={themeName}
                value={themeName}
                checked={theme === themeName} // ✅ Highlights the selected theme
                onChange={() => setTheme(themeName)} // ✅ Updates React state
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Themes;
