import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

        {/* TOGGLE – TOP CENTER */}
        <div className="flex justify-center pt-6">
          <ThemeBtn />
        </div>

        {/* CARD – CENTER */}
        <div className="flex justify-center mt-8">
          <Card />
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
