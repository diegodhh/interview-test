import React from "react";

const ThemeContext = React.createContext();

const Content = (props) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <section className={`theme-${context.theme}`}>
          <span>Current theme: {context.theme}</span>
          <button onClick={context.switchTheme}>Switch Theme</button>
        </section>
      )}
    </ThemeContext.Consumer>
  );
};

function App() {
  const [theme, setTheme] = React.useState("dark");
  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;
