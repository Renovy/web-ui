import { useEffect } from "react";
import { ToggleTheme } from "./components";
import ButtonPage from "./pages/components/Button.mdx";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const element = document.querySelector("html");

    if (theme === "light") element?.classList.remove("dark");
    else element?.classList.add("dark");
  }, [theme]);

  return (
    <>
      <header>
        <nav />
        <ToggleTheme switchTheme={switchTheme} />
      </header>

      <main>
        <ButtonPage />
      </main>

      <footer />
    </>
  );
}

export default App;
