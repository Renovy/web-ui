import { useEffect } from "react";
import { useDarkMode } from "@renovy/web-ui";

import { Header } from "./components";
import ButtonPage from "./pages/components/Button.mdx";

function App() {
  const { isDark } = useDarkMode();

  useEffect(() => {
    const element = document.querySelector("html");

    if (isDark) element?.classList.add("dark");
    else element?.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="justify-center flex w-full">
      <div className="p-2 lg:max-w-screen-2xl w-full">
        <Header />

        <main className="py-5 flex flex-col gap-y-5">
          <ButtonPage />
        </main>

        <footer />
      </div>
    </div>
  );
}

export default App;
