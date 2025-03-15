import { useContext, useEffect } from "react";
import { ThemeContext } from "./context";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  }, [theme]);
  return (
    <div>
      <header>
        <h1>Theme Switcher</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}

export default App;
