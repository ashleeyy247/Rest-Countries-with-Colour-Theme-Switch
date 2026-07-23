export const useTheme = () => {
  const theme = useState("theme", () => "light");

  const applyTheme = (value) => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", value === "dark");
      localStorage.setItem("theme", value);
    }
  };

  const initTheme = () => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");

    if (saved) {
      theme.value = saved === "dark" ? "dark" : "light";
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      theme.value = systemPrefersDark ? "dark" : "light";
    }

    applyTheme(theme.value);
  };

  const setTheme = (value) => {
    theme.value = value;
    applyTheme(value);
  };

  const toggleTheme = () => {
    setTheme(theme.value === "light" ? "dark" : "light");
  };

  return { theme, initTheme, toggleTheme };
};
